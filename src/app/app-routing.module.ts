import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuarterCardComponent } from './quarter-card/quarter-card.component';

const routes: Routes = [
  { path: 'quarter', component: QuarterCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
