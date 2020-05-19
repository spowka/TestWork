import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsRoutingModule } from './events/events-routing.module';

const routes: Routes = [
  {
    path: '', loadChildren: './events/events-routing.module#EventsRoutingModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), EventsRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
