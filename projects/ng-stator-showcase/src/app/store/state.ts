import { IStoreListStateSlice } from 'projects/ng-stator';
import { List, Props, Filter } from '../app.models';

export interface TodosListState {
    todosList: IStoreListStateSlice<List, Props, Filter>;
}
