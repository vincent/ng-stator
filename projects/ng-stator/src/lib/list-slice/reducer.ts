import { createReducer, on } from '@ngrx/store';
import { ListReducerStrategy } from './enum';

export function withListReducer(
	slice: string,
	{
		LoadListRequest, LoadListSuccess, LoadListFailure,
		ListSettings, AddListFilter, RemoveListFilter
	},
	strategy: ListReducerStrategy = ListReducerStrategy.Replace
) {
	return (initialState, ...ons) => createReducer(
		initialState,

		on(LoadListRequest,  state           => ({ ...state, [slice]: { ...state[slice], isLoading: true,  error: false } })),
		on(LoadListSuccess,  (state, action) => (stategies[strategy].LoadListSuccess(slice)(state, action))),
		on(LoadListFailure,  (state, action) => ({ ...state, [slice]: { ...state[slice], isLoading: false, error: action.error } })),
		on(ListSettings,     (state, action) => ({ ...state, [slice]: { ...state[slice], isLoading: false, props: action.props } })),
		on(AddListFilter,    (state, action) => ({ ...state, [slice]: { ...state[slice], isLoading: false, filters: [...state[slice].filters, action.filter] } })),
		on(RemoveListFilter, (state, action) => ({ ...state, [slice]: { ...state[slice], isLoading: false, filters: state[slice].filters.filter(f => f !== action.filter) } })),

		...ons,
	);
}

const stategies = {

	[ListReducerStrategy.Replace]: {
		LoadListSuccess: (slice) => (state, action) => ({ ...state, [slice]: { ...state[slice], isLoading: false, error: false, list: action.list } }),
	},

}
