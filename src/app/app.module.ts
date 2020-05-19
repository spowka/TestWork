import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './events/containers/event-list/event-list.component';
import { CreateEventComponent } from './events/components/create-event/create-event.component';
import { EventBoxComponent } from './events/components/event-box/event-box.component';

import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects, metaReducers } from './events/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsRoutingModule } from './events/events-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatIconModule,
} from '@angular/material';
import { HeaderComponent } from './core/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventListComponent,
    CreateEventComponent,
    EventBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    EventsRoutingModule,
    MatIconModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forFeature('event', reducers),
    EffectsModule.forRoot(effects),
    NoopAnimationsModule,
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
