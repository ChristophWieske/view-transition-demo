import { Directive, input } from '@angular/core';
import { v4 } from 'uuid';

@Directive({
  selector: '[transition]',
  host: {
    '[style.view-transition-name]':
      'userDefinedTransitionId() || fallbackTransitionId',
  },
})
export class TransitionDirective {
  readonly fallbackTransitionId = 't-' + v4();

  readonly userDefinedTransitionId = input('', { alias: 'transition' });
}
