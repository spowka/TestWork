import { Action } from '@ngrx/store';
import { EventModel } from '../../event.model';

export const ADD_EVENT = '[Event] Add Event';

export class AddEvent implements Action {
    readonly type: string = ADD_EVENT;
    constructor(public payload: EventModel) { }
}

export type EventAction =
    | AddEvent;
