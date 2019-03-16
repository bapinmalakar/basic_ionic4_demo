import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './component/home/home.page';
import { UserInteractionPage } from './component/user-interaction/user-interaction.page.';
import {DisplayPage} from './component/display/display.page'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage},
  { path: 'user_interaction/:user_name', component: UserInteractionPage},
  { path: 'display', component: DisplayPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
