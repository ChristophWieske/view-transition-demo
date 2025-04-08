import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-thermometer',
  imports: [DecimalPipe],
  templateUrl: './thermometer.component.html',
  styleUrl: '../shared.scss',
})
export class ThermometerComponent {
  readonly value = 25 - Math.random() * 2;
}
