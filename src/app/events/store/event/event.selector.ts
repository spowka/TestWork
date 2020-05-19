import { createSelector, MemoizedSelector } from '@ngrx/store';

import * as fromEvent from './event.reducer';
import * as fromRoot from './event.reducer';
import * as fromEventReducer from '../reducer';

import { EventModel } from '../../event.model';

export const selectEventState: MemoizedSelector<
  fromRoot.EventState,
  fromEvent.EventState
> = createSelector(
  fromEventReducer.getEventFeatureState,
  (state: fromEventReducer.State) => state.event
);

export const selectEvents: MemoizedSelector<fromRoot.EventState, EventModel[]> = createSelector(
    selectEventState,
    fromEvent.getEvents
);
