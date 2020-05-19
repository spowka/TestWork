import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as eventReducer from './event/event.reducer';

export interface State {
    event: eventReducer.EventState;
}

export const reducers: ActionReducerMap<State> = {
    event: eventReducer.EventReducer
};

export const getEventFeatureState: any = createFeatureSelector<State>('event');
