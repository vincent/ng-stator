import { createListSliceSelectors } from 'projects/ng-stator';
import { createFeatureSelector, MemoizedSelector, createSelector } from '@ngrx/store';
import { List, Props, Filter } from '../app.models';
import { TodosListState } from './state';

export const visitTodos: MemoizedSelector<object, TodosListState> = createFeatureSelector<TodosListState>('todos');

export const {
	selectList: selectTodosList,
	selectFilters: selectTodosFilters,
	selectError: selectTodosError,
	selectIsLoading: selectTodosIsLoading,
	selectProps: selectTodosProps,
} = createListSliceSelectors<List, Props, Filter>(createSelector(visitTodos, (state) => state.todosList));
