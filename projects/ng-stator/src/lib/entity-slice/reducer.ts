import { IStoreEntityStateSlice } from './state';
import { EntityActionType } from './enum';
import { EntityAction } from './actions';

export function reduceEntitySlice<Entity>(state: IStoreEntityStateSlice<Entity>, action: EntityAction<Entity>): IStoreEntityStateSlice<Entity> {
	switch (action.is) {
		case EntityActionType.LoadEntityRequest:
		case EntityActionType.CreateEntityRequest:
		case EntityActionType.UpdateEntityRequest:
			return {
				...state,
				isLoading: true,
				error: false,
			};
		case EntityActionType.LoadEntitySuccess:
		case EntityActionType.CreateEntitySuccess:
		case EntityActionType.UpdateEntitySuccess:
			return {
				...state,
				isLoading: false,
				error: false,
				entity: action.entity,
			};
		case EntityActionType.LoadEntityFailure:
		case EntityActionType.CreateEntityFailure:
		case EntityActionType.UpdateEntityFailure:
			return {
				...state,
				isLoading: false,
				error: action.error,
			};
		default:
			return state;
	}
}
