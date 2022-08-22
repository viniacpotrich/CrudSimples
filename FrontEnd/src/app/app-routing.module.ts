import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CurseRoutes } from './curses/curses-routing.module';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'curses',
    pathMatch: 'full'
  },
  ...CurseRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
