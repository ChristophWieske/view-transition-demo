import { Component } from '@angular/core';

@Component({
  selector: 'app-boxes-1',
  templateUrl: './boxes-1.component.html',
  styleUrl: './boxes-1.component.scss',
})
export class Boxes1Component {
  toggle(box: HTMLDivElement) {
    box.classList.toggle('active');
  }
}
