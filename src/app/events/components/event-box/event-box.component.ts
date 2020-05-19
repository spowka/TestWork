import { Component, OnInit, Input } from '@angular/core';
import { EventModel } from '../../event.model';

@Component({
  selector: 'app-event-box',
  templateUrl: './event-box.component.html',
  styleUrls: ['./event-box.component.scss']
})
export class EventBoxComponent implements OnInit {
  @Input() event: EventModel;

  constructor() {
  }

  ngOnInit() {
  }

}
