import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

import { Router } from '@angular/router';

import { EventModel } from '../../event.model';


import { Store } from '@ngrx/store';
import * as fromEvent from 'src/app/events/store';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  @Input() event: EventModel;
  [x: string]: any;

  public eventForm: FormGroup;

  constructor(private store: Store<fromEvent.State>, private formBuilder: FormBuilder, public router: Router) {

    this.eventForm = this.formBuilder.group({
      eventName: new FormControl('', [Validators.required]),
      eventAddress: new FormControl('', [Validators.required]),
      eventDate: new FormControl('', [Validators.required, this.dateValidator]),
    });
  }

  ngOnInit() {
  }

  addEvent() {
    this.store.dispatch(new fromEvent.AddEvent(this.eventForm.value));
    this.router.navigate(['/']);
  }


  dateValidator(control: AbstractControl): { [key: string]: any } {
    let datePattern = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;

    if (!control.value.match(datePattern)) {
      return { dateValidator: true };
    }

    return null;
  }

}
