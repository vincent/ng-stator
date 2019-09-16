import { Action, on } from '@ngrx/store';
import { withListReducer, createListSlice } from 'projects/ng-stator';
import { TodosListState } from './state';
import { TodosListActions } from './actions';

const initialState = {
    todosList: createListSlice({ list: [], props: { sort: 'id', dir: 'asc' } })
}

const reducer = withListReducer('todosList', TodosListActions)(
    initialState,
    // FIXME: Reducers are overwrited.
    // see https://github.com/ngrx/platform/issues/1956#issuecomment-526720340
    // Wait for this https://github.com/ngrx/platform/pull/2103
);

export function todosReducer(
    state: TodosListState | undefined,
    action: Action) {
    return reducer(state, action);
}
