import { EventListComponent } from "./containers/event-list/event-list.component";
import { Routes, RouterModule } from '@angular/router';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { ngModuleJitUrl } from '@angular/compiler';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: EventListComponent
    },
    {
        path: 'create',
        component: CreateEventComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class EventsRoutingModule {}