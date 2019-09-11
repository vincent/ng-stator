import { Action, on } from '@ngrx/store';
import { withListReducer } from 'projects/ng-stator';
import { TodosListState } from './state';
import * as featureActions from './actions';
import { TodosListActions } from './actions';

const reducer = withListReducer(TodosListActions)(
    { todosList: null },
    on(featureActions.LoadTodosListRequest, (state, action) => ({ 
        ...state,
        // list loaded !
    })),
);

export function counterReducer(
    state: TodosListState | undefined,
    action: Action) {
    return reducer(state, action);
}