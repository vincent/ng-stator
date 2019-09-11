import { createListActions } from 'projects/ng-stator';
import { List, Props, Filter } from '../app.models';

export const TodosListActions = createListActions<List, Props, Filter>('ToDos');

export const {
    LoadListRequest: LoadTodosListRequest,
    LoadListSuccess: LoadTodosListSuccess,
    LoadListFailure: LoadTodosListFailure,
    ListSettings: TodosListSettings,
    AddListFilter: AddTodosListFilter,
    RemoveListFilter: RemoveTodosListFilter,
} = TodosListActions;
