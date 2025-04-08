import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-gauge',
  imports: [DecimalPipe],
  templateUrl: './gauge.component.html',
  styleUrl: '../shared.scss',
})
export class GaugeComponent {
  readonly value = Math.random() * 10;
}
