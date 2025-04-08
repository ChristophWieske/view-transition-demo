import { Component, signal } from '@angular/core';
import { WithTransitionPipe } from '../transition/with-transition.pipe';
import { getMessage } from './get-message';
import { TransitionDirective } from '../transition/transition.directive';
import { MatButton, MatIconButton } from '@angular/material/button';
import { NgClass } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-texts',
  imports: [
    WithTransitionPipe,
    TransitionDirective,
    MatButton,
    NgClass,
    MatIcon,
    MatIconButton,
  ],
  templateUrl: './texts.component.html',
  styleUrl: './texts.component.scss',
})
export class TextsComponent {
  readonly message = signal(getMessage());
  readonly messageTransitionClass = signal('default');

  slideMessage(): void {
    this.messageTransitionClass.set('slide');
    this.message.set(getMessage());
  }

  flipMessage(): void {
    this.messageTransitionClass.set('flip');
    this.message.set(getMessage());
  }

  bounceMessage(): void {
    this.messageTransitionClass.set('bounce');
    this.message.set(getMessage());
  }

  defaultMessage(): void {
    this.messageTransitionClass.set('default');
    this.message.set(getMessage());
  }

  triggerTransition(): void {
    document.startViewTransition();
  }
}
