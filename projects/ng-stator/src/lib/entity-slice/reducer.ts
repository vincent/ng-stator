import { createReducer, on } from '@ngrx/store';

export function withEntitytReducer(slice: string, {
	LoadEntityRequest, CreateEntityRequest, UpdateEntityRequest,
	LoadEntitySuccess, CreateEntitySuccess, UpdateEntitySuccess,
	LoadEntityFailure, CreateEntityFailure, UpdateEntityFailure
}) {
	return (initialState, ...ons) => createReducer(
		initialState,

		on(LoadEntityRequest,    state           => ({ ...state, [slice]: { ...state[slice], isLoading: true,  error: false } })),
		on(CreateEntityRequest,  state           => ({ ...state, [slice]: { ...state[slice], isLoading: true,  error: false } })),
		on(UpdateEntityRequest,  state           => ({ ...state, [slice]: { ...state[slice], isLoading: true,  error: false } })),

		on(LoadEntitySuccess,    (state, action) => ({ ...state, [slice]: { ...state[slice], isLoading: false, error: false, entity: action.entity } })),
		on(CreateEntitySuccess,  (state, action) => ({ ...state, [slice]: { ...state[slice], isLoading: false, error: false, entity: action.entity } })),
		on(UpdateEntitySuccess,  (state, action) => ({ ...state, [slice]: { ...state[slice], isLoading: false, error: false, entity: action.entity } })),

		on(LoadEntityFailure,    (state, action) => ({ ...state, [slice]: { ...state[slice], isLoading: false, error: action.error } })),
		on(CreateEntityFailure,  (state, action) => ({ ...state, [slice]: { ...state[slice], isLoading: false, error: action.error } })),
		on(UpdateEntityFailure,  (state, action) => ({ ...state, [slice]: { ...state[slice], isLoading: false, error: action.error } })),

		...ons,
	);
}
