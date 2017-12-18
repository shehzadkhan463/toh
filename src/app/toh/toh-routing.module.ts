import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TohComponent } from './toh.component';
import { HeroesComponent } from './heroes/heroes.component';
const tohRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'view' },
  { path: 'view', component: TohComponent },
  { path: 'heroes', component: HeroesComponent}
];
@NgModule({
  imports: [RouterModule.forChild(tohRoutes)]
})
export class TohRoutingModule {}
