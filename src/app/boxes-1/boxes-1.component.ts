import { Component } from '@angular/core';
import { TransitionDirective } from '../transition/transition.directive';

@Component({
  selector: 'app-boxes-1',
  templateUrl: './boxes-1.component.html',
  styleUrl: './boxes-1.component.scss',
  imports: [TransitionDirective],
})
export class Boxes1Component {
  counter = 1;

  toggle(box: HTMLDivElement) {
    document.startViewTransition(() => {
      box.classList.toggle('active');
      //box.remove();
      //box.style.order = (this.counter++).toString();
    });
  }
}
