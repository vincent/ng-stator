import { createAction, props, ActionCreator } from '@ngrx/store';
import { EntityActionType } from './enum';

export type LoadEntityRequestActionPayload<Entity>   = { is: EntityActionType.LoadEntityRequest,   entity: Entity };
export type LoadEntitySuccessActionPayload<Entity>   = { is: EntityActionType.LoadEntitySuccess,   entity: Entity };
export type LoadEntityFailureActionPayload<Entity>   = { is: EntityActionType.LoadEntityFailure,   error:  Error  };
export type CreateEntityConfirmActionPayload<Entity> = { is: EntityActionType.CreateEntityConfirm, entity: Entity, isDirty?: boolean };
export type CreateEntityRequestActionPayload<Entity> = { is: EntityActionType.CreateEntityRequest, entity: Entity };
export type CreateEntitySuccessActionPayload<Entity> = { is: EntityActionType.CreateEntitySuccess, entity: Entity };
export type CreateEntityFailureActionPayload<Entity> = { is: EntityActionType.CreateEntityFailure, error:  Error  };
export type UpdateEntityConfirmActionPayload<Entity> = { is: EntityActionType.UpdateEntityConfirm, entity: Entity, isDirty?: boolean };
export type UpdateEntityRequestActionPayload<Entity> = { is: EntityActionType.UpdateEntityRequest, entity: Entity };
export type UpdateEntitySuccessActionPayload<Entity> = { is: EntityActionType.UpdateEntitySuccess, entity: Entity };
export type UpdateEntityFailureActionPayload<Entity> = { is: EntityActionType.UpdateEntityFailure, error:  Error  };
export type DeleteEntityConfirmActionPayload<Entity> = { is: EntityActionType.DeleteEntityConfirm, entity: Entity, isDirty?: boolean };
export type DeleteEntityRequestActionPayload<Entity> = { is: EntityActionType.DeleteEntityRequest, entity: Entity };
export type DeleteEntitySuccessActionPayload<Entity> = { is: EntityActionType.DeleteEntitySuccess, entity: Entity };
export type DeleteEntityFailureActionPayload<Entity> = { is: EntityActionType.DeleteEntityFailure, error:  Error  };

export type EntityAction<Entity> =
    |   LoadEntityRequestActionPayload<Entity>
    |   LoadEntitySuccessActionPayload<Entity>
    |   LoadEntityFailureActionPayload<Entity>
    |   CreateEntityConfirmActionPayload<Entity>
    |   CreateEntityRequestActionPayload<Entity>
    |   CreateEntitySuccessActionPayload<Entity>
    |   CreateEntityFailureActionPayload<Entity>
    |   UpdateEntityConfirmActionPayload<Entity>
    |   UpdateEntityRequestActionPayload<Entity>
    |   UpdateEntitySuccessActionPayload<Entity>
    |   UpdateEntityFailureActionPayload<Entity>
    |   DeleteEntityConfirmActionPayload<Entity>
    |   DeleteEntityRequestActionPayload<Entity>
    |   DeleteEntitySuccessActionPayload<Entity>
    |   DeleteEntityFailureActionPayload<Entity>
    ;

export type EntityActions<Entity> = {[K in EntityActionType]: ActionCreator<string, (props: EntityAction<Entity>) => EntityAction<Entity>>}

export function createEntityActions<Entity>(basename: string): EntityActions<Entity> {
    return {
        LoadEntityRequest:   createAction(`[LoadEntityRequest] ${basename}`,   props<LoadEntityRequestActionPayload<Entity>>()),
        LoadEntitySuccess:   createAction(`[LoadEntitySuccess] ${basename}`,   props<LoadEntitySuccessActionPayload<Entity>>()),
        LoadEntityFailure:   createAction(`[LoadEntityFailure] ${basename}`,   props<LoadEntityFailureActionPayload<Entity>>()),
        CreateEntityConfirm: createAction(`[CreateEntityConfirm] ${basename}`, props<CreateEntityConfirmActionPayload<Entity>>()),
        CreateEntityRequest: createAction(`[CreateEntityRequest] ${basename}`, props<CreateEntityRequestActionPayload<Entity>>()),
        CreateEntitySuccess: createAction(`[CreateEntitySuccess] ${basename}`, props<CreateEntitySuccessActionPayload<Entity>>()),
        CreateEntityFailure: createAction(`[CreateEntityFailure] ${basename}`, props<CreateEntityFailureActionPayload<Entity>>()),
        UpdateEntityConfirm: createAction(`[UpdateEntityConfirm] ${basename}`, props<UpdateEntityConfirmActionPayload<Entity>>()),
        UpdateEntityRequest: createAction(`[UpdateEntityRequest] ${basename}`, props<UpdateEntityRequestActionPayload<Entity>>()),
        UpdateEntitySuccess: createAction(`[UpdateEntitySuccess] ${basename}`, props<UpdateEntitySuccessActionPayload<Entity>>()),
        UpdateEntityFailure: createAction(`[UpdateEntityFailure] ${basename}`, props<UpdateEntityFailureActionPayload<Entity>>()),
        DeleteEntityConfirm: createAction(`[DeleteEntityConfirm] ${basename}`, props<DeleteEntityConfirmActionPayload<Entity>>()),
        DeleteEntityRequest: createAction(`[DeleteEntityRequest] ${basename}`, props<DeleteEntityRequestActionPayload<Entity>>()),
        DeleteEntitySuccess: createAction(`[DeleteEntitySuccess] ${basename}`, props<DeleteEntitySuccessActionPayload<Entity>>()),
        DeleteEntityFailure: createAction(`[DeleteEntityFailure] ${basename}`, props<DeleteEntityFailureActionPayload<Entity>>()),
    };
}
