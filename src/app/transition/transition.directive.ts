import { Directive, input } from '@angular/core';

@Directive({
  selector: '[transition]',
})
export class TransitionDirective {

  // We fill that with life a little later.
  // Patience young padawan!
  readonly dummy = input('', { alias: 'transition' });
}
