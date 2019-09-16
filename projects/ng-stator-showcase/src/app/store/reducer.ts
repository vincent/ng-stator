import { Action, on } from '@ngrx/store';
import { withListReducer } from 'projects/ng-stator';
import { TodosListState } from './state';
import { TodosListActions } from './actions';

const reducer = withListReducer('todosList', TodosListActions)(
    { todosList: { list: [], filters: [], props: { sort: 'id', dir: 'asc' } } },
    // FIXME: Cannot overload reducers ?
    // https://github.com/ngrx/platform/issues/1956
    // https://github.com/ngrx/platform/pull/2103
);

export function todosReducer(
    state: TodosListState | undefined,
    action: Action) {
    return reducer(state, action);
}