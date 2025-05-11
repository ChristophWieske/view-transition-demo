import { Component, signal, Type } from '@angular/core';
import { TransitionDirective } from '../transition/transition.directive';
import { MatButton } from '@angular/material/button';
import { ProgressComponent } from './tiles/progress/progress.component';
import { NgClass, NgComponentOutlet } from '@angular/common';
import { LineChartComponent } from './tiles/line-chart/line-chart.component';
import { GaugeComponent } from './tiles/gauge/gauge.component';
import { WithTransitionPipe } from '../transition/with-transition.pipe';
import { ThermometerComponent } from './tiles/thermometer/thermometer.component';

declare type Size = 'small' | 'medium' | 'large';

interface Tile {
  size: Size;
  component: Type<unknown>;
}

interface TileDef extends Tile {
  id: number;
}

const TILES: Tile[] = [
  { size: 'medium', component: ProgressComponent },
  { size: 'large', component: LineChartComponent },
  { size: 'small', component: GaugeComponent },
  { size: 'small', component: ThermometerComponent },
];

@Component({
  selector: 'app-dashboard',
  imports: [
    TransitionDirective,
    MatButton,
    NgComponentOutlet,
    NgClass,
    WithTransitionPipe,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  readonly tiles = signal<TileDef[]>([]);

  constructor() {
    this.add(9);
    this.shuffle();
  }

  add(addCount: number) {
    this.tiles.update((boxes) => {
      const maxId = boxes.reduce((acc, box) => Math.max(acc, box.id), 0);
      const newBoxes = Array.from({ length: addCount }).map((_, i) => ({
        ...TILES[Math.round(Math.random() * (TILES.length - 1))],
        id: maxId + i + 1,
      }));

      return [...newBoxes, ...boxes];
    });
  }

  shuffle() {
    const tiles = this.tiles().slice();
    for (let i = tiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = tiles[i];
      tiles[i] = tiles[j];
      tiles[j] = temp;
    }
    this.tiles.set(tiles);
  }

  remove(tile: TileDef): void {
    this.tiles.update((tiles) => tiles.filter((x) => x !== tile));
  }
}
