import { IStoreListStateSlice } from './state';
import { ListAction } from './actions';
import { ListActionType } from './enum';
import { createReducer, on } from '@ngrx/store';

export function reduceListSlice<List, Props, Filter>
    (state: IStoreListStateSlice<List, Props, Filter>, action: ListAction<List, Props, Filter>): IStoreListStateSlice<List, Props, Filter> {
	switch (action.is) {
		case ListActionType.LoadListRequest:
			return {
				...state,
				isLoading: true,
				error: false,
			};
		case ListActionType.LoadListSuccess:
			return {
				...state,
				isLoading: false,
				error: false,
				list: action.list,
			};
		case ListActionType.LoadListFailure:
			return {
				...state,
				isLoading: false,
				error: action.error,
			};
		case ListActionType.ListSettings:
			return {
				...state,
				props: {
					...state.props,
					...action.props
				}
			};
		case ListActionType.AddListFilter:
			return {
				...state,
				filters: [...state.filters, action.filter]
			};
		case ListActionType.RemoveListFilter:
			return {
				...state,
				filters: state.filters.filter(f => f !== action.filter)
			};
		default:
			return state;
	}
}

export function withListReducer(slice: string, {LoadListRequest, LoadListSuccess, LoadListFailure, ListSettings, AddListFilter, RemoveListFilter}) {
	return (initialState, ...ons) => createReducer(
		initialState,
		on(LoadListRequest,  state           => ({ ...state, [slice]: { ...state[slice], isLoading: true,  error: false } })),
		on(LoadListSuccess,  (state, action) => ({ ...state, [slice]: { ...state[slice], isLoading: false, error: false, list: action.list } })),
		on(LoadListFailure,  (state, action) => ({ ...state, [slice]: { ...state[slice], isLoading: false, error: action.error } })),
		on(ListSettings,     (state, action) => ({ ...state, [slice]: { ...state[slice], isLoading: false, props: action.props } })),
		on(AddListFilter,    (state, action) => ({ ...state, [slice]: { ...state[slice], isLoading: false, filters: [...state[slice].filters, action.filter] } })),
		on(RemoveListFilter, (state, action) => ({ ...state, [slice]: { ...state[slice], isLoading: false, filters: state[slice].filters.filter(f => f !== action.filter) } })),
		...ons,
	);
}
