import * as fromActions from './event.action';
import { EventModel } from '../../event.model';

export class EventState {
    events: EventModel[];
    error: string;
}

const initialState: EventState = {
    events: [{ eventName: 'Event 1', eventAddress: ' USA, NY', eventDate: '13 april' }],
    error: '',
};

export function EventReducer(
    state: EventState = initialState,
    action: fromActions.EventAction,
): EventState {
    switch (action.type) {
        case fromActions.ADD_EVENT: {
            return {
                ...state,
                events: [...state.events, action.payload],
            };
        }

        default: return state;
    }
}

export const getEvents: any = (state: EventState): EventModel[] => state.events;
