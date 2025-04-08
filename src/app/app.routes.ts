import { Routes } from '@angular/router';
import { Boxes1Component } from './boxes-1/boxes-1.component';
import { TextsComponent } from './texts/texts.component';
import { TablesComponent } from './tables/tables.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'boxes-1', component: Boxes1Component },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'experiments', component: TextsComponent },
  { path: 'tables', component: TablesComponent },
  { path: '**', redirectTo: 'boxes-1' },
];
