import { props } from '@ngrx/store';
import { EntityActionType as Types } from './enum';
import { createTypedAction, IsTypedAction } from '../shared/action-creators';

export type LoadEntityRequestActionPayload<Entity>   = IsTypedAction<Types.LoadEntityRequest>   & { entity: Entity };
export type LoadEntitySuccessActionPayload<Entity>   = IsTypedAction<Types.LoadEntitySuccess>   & { entity: Entity };
export type LoadEntityFailureActionPayload           = IsTypedAction<Types.LoadEntityFailure>   & { error:  Error  };
export type CreateEntityConfirmActionPayload<Entity> = IsTypedAction<Types.CreateEntityConfirm> & { entity: Entity, isDirty?: boolean };
export type CreateEntityRequestActionPayload<Entity> = IsTypedAction<Types.CreateEntityRequest> & { entity: Entity };
export type CreateEntitySuccessActionPayload<Entity> = IsTypedAction<Types.CreateEntitySuccess> & { entity: Entity };
export type CreateEntityFailureActionPayload         = IsTypedAction<Types.CreateEntityFailure> & { error:  Error  };
export type UpdateEntityConfirmActionPayload<Entity> = IsTypedAction<Types.UpdateEntityConfirm> & { entity: Entity, isDirty?: boolean };
export type UpdateEntityRequestActionPayload<Entity> = IsTypedAction<Types.UpdateEntityRequest> & { entity: Entity };
export type UpdateEntitySuccessActionPayload<Entity> = IsTypedAction<Types.UpdateEntitySuccess> & { entity: Entity };
export type UpdateEntityFailureActionPayload         = IsTypedAction<Types.UpdateEntityFailure> & { error:  Error  };
export type DeleteEntityConfirmActionPayload<Entity> = IsTypedAction<Types.DeleteEntityConfirm> & { entity: Entity, isDirty?: boolean };
export type DeleteEntityRequestActionPayload<Entity> = IsTypedAction<Types.DeleteEntityRequest> & { entity: Entity };
export type DeleteEntitySuccessActionPayload<Entity> = IsTypedAction<Types.DeleteEntitySuccess> & { entity: Entity };
export type DeleteEntityFailureActionPayload         = IsTypedAction<Types.DeleteEntityFailure> & { error:  Error  };

export type EntityAction<Entity> =
    |   LoadEntityRequestActionPayload<Entity>
    |   LoadEntitySuccessActionPayload<Entity>
    |   LoadEntityFailureActionPayload
    |   CreateEntityConfirmActionPayload<Entity>
    |   CreateEntityRequestActionPayload<Entity>
    |   CreateEntitySuccessActionPayload<Entity>
    |   CreateEntityFailureActionPayload
    |   UpdateEntityConfirmActionPayload<Entity>
    |   UpdateEntityRequestActionPayload<Entity>
    |   UpdateEntitySuccessActionPayload<Entity>
    |   UpdateEntityFailureActionPayload
    |   DeleteEntityConfirmActionPayload<Entity>
    |   DeleteEntityRequestActionPayload<Entity>
    |   DeleteEntitySuccessActionPayload<Entity>
    |   DeleteEntityFailureActionPayload
    ;

export function createEntityActions<Entity>(basename: string) {
    return {
        LoadEntityRequest:   createTypedAction(Types.LoadEntityRequest,   `[LoadEntityRequest] ${  basename}`, props<{ entity: Entity }>()),
        LoadEntitySuccess:   createTypedAction(Types.LoadEntitySuccess,   `[LoadEntitySuccess] ${  basename}`, props<{ entity: Entity }>()),
        LoadEntityFailure:   createTypedAction(Types.LoadEntityFailure,   `[LoadEntityFailure] ${  basename}`, props<{ error:  Error  }>()),
        CreateEntityConfirm: createTypedAction(Types.CreateEntityConfirm, `[CreateEntityConfirm] ${basename}`, props<{ entity: Entity, isDirty?: boolean }>()),
        CreateEntityRequest: createTypedAction(Types.CreateEntityRequest, `[CreateEntityRequest] ${basename}`, props<{ entity: Entity }>()),
        CreateEntitySuccess: createTypedAction(Types.CreateEntitySuccess, `[CreateEntitySuccess] ${basename}`, props<{ entity: Entity }>()),
        CreateEntityFailure: createTypedAction(Types.CreateEntityFailure, `[CreateEntityFailure] ${basename}`, props<{ error:  Error  }>()),
        UpdateEntityConfirm: createTypedAction(Types.UpdateEntityConfirm, `[UpdateEntityConfirm] ${basename}`, props<{ entity: Entity, isDirty?: boolean }>()),
        UpdateEntityRequest: createTypedAction(Types.UpdateEntityRequest, `[UpdateEntityRequest] ${basename}`, props<{ entity: Entity }>()),
        UpdateEntitySuccess: createTypedAction(Types.UpdateEntitySuccess, `[UpdateEntitySuccess] ${basename}`, props<{ entity: Entity }>()),
        UpdateEntityFailure: createTypedAction(Types.UpdateEntityFailure, `[UpdateEntityFailure] ${basename}`, props<{ error:  Error  }>()),
        DeleteEntityConfirm: createTypedAction(Types.DeleteEntityConfirm, `[DeleteEntityConfirm] ${basename}`, props<{ entity: Entity, isDirty?: boolean }>()),
        DeleteEntityRequest: createTypedAction(Types.DeleteEntityRequest, `[DeleteEntityRequest] ${basename}`, props<{ entity: Entity }>()),
        DeleteEntitySuccess: createTypedAction(Types.DeleteEntitySuccess, `[DeleteEntitySuccess] ${basename}`, props<{ entity: Entity }>()),
        DeleteEntityFailure: createTypedAction(Types.DeleteEntityFailure, `[DeleteEntityFailure] ${basename}`, props<{ error:  Error  }>()),
    };
}
