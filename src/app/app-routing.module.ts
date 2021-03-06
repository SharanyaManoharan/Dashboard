import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuarterCardComponent } from './components/quarter-card/quarter-card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'quarter', component: QuarterCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
