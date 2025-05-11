import {
  afterNextRender,
  inject,
  Injector,
  Pipe,
  PipeTransform,
  signal,
  untracked,
} from '@angular/core';

@Pipe({
  name: 'withTransition',
  pure: false,
})
export class WithTransitionPipe<T> implements PipeTransform {
  private latestValue: any;
  private readonly injector = inject(Injector);
  private static state = signal<'Idle' | 'Requested' | 'Ongoing'>('Idle');

  transform<T>(value: T): T {
    if (!this.latestValue) {
      this.latestValue = value;
    }

    if (this.latestValue === value) {
      return value;
    }

    // We have a change!
    if (WithTransitionPipe.state() === 'Idle') {
      const transition = document.startViewTransition(() => {
        WithTransitionPipe.state.set('Ongoing');
        return new Promise<void>((resolve) =>
          afterNextRender(resolve, { injector: this.injector }),
        );
      });

      transition.finished.finally(() => WithTransitionPipe.state.set('Idle'));

      untracked(() => WithTransitionPipe.state.set('Requested'));
    }

    if (WithTransitionPipe.state() === 'Ongoing') {
      this.latestValue = value;
    }

    return this.latestValue;
  }
}
