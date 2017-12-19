import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TohComponent } from './toh.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const tohRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'view', component: TohComponent },
  { path: 'heroes', component: HeroesComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'hero-detail/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(tohRoutes)],
  exports: [RouterModule]
})
export class TohRoutingModule {}
