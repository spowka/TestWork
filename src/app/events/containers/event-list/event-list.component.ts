import { Component, OnInit } from '@angular/core';
import { EventModel } from '../../event.model';

import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromEvent from 'src/app/events/store';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  public eventBoxes$: Observable<EventModel[]>;

  public eventBoxes: EventModel[] = [];

  constructor(private store: Store<fromEvent.EventState>) {
    this.eventBoxes$ = this.store.pipe(select(fromEvent.selectEvents));

    this.eventBoxes$.pipe().subscribe(events => {
      this.eventBoxes = [ ... this.eventBoxes, ...events];
    });

  }

  ngOnInit() {
  }

}
