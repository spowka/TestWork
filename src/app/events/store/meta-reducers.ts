import { MetaReducer, ActionReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger, LoggerOptions } from 'ngrx-store-logger';
import { State } from './reducer';
import { environment } from 'src/environments/environment';

export function logger(reducer: ActionReducer<State>): any {
    const options: LoggerOptions = {
        filter: {
            blacklist: [
                '@ngrx/store/update-reducers',
                '@ngrx/effects/init',
            ]
        }
    };
    return storeLogger(options)(reducer);
}

export const metaReducers: MetaReducer<any>[] = environment.production ? [] : [storeFreeze, logger];