import { props, ActionCreator } from '@ngrx/store';
import { ListActionType } from './enum';
import { createTypedAction, IsTypedAction } from '../shared/action-creators';
import { TypedAction } from '@ngrx/store/src/models';

export type LoadListRequestActionPayload           = IsTypedAction<ListActionType.LoadListRequest>  & {                };
export type LoadListSuccessActionPayload<List>     = IsTypedAction<ListActionType.LoadListSuccess>  & { list:   List   };
export type LoadListFailureActionPayload           = IsTypedAction<ListActionType.LoadListFailure>  & { error:  Error  };
export type ListSettingsActionPayload<Props>       = IsTypedAction<ListActionType.ListSettings>     & { props:  Props  };
export type AddListFilterActionPayload<Filter>     = IsTypedAction<ListActionType.AddListFilter>    & { filter: Filter };
export type RemoveListFilterActionPayload<Filter>  = IsTypedAction<ListActionType.RemoveListFilter> & { filter: Filter };

export type ListAction<List, Props, Filter> =
    |   LoadListRequestActionPayload
    |   LoadListSuccessActionPayload<List>
    |   LoadListFailureActionPayload
    |   ListSettingsActionPayload<Props>
    |   AddListFilterActionPayload<Filter>
    |   RemoveListFilterActionPayload<Filter>
    ;

export function createListActions<List, Props, Filter>(basename: string) {
    return {
        LoadListRequest:   createTypedAction(ListActionType.LoadListRequest,  `[LoadListRequest] ${ basename}`                              ),
        LoadListSuccess:   createTypedAction(ListActionType.LoadListSuccess,  `[LoadListSuccess] ${ basename}`,  props<{ list: List     }>()),
        LoadListFailure:   createTypedAction(ListActionType.LoadListFailure,  `[LoadListFailure] ${ basename}`,  props<{ error: Error   }>()),
        ListSettings:      createTypedAction(ListActionType.ListSettings,     `[ListSettings] ${    basename}`,  props<{ props:  Props  }>()),
        AddListFilter:     createTypedAction(ListActionType.AddListFilter,    `[AddListFilter] ${   basename}`,  props<{ filter: Filter }>()),
        RemoveListFilter:  createTypedAction(ListActionType.RemoveListFilter, `[RemoveListFilter] ${basename}`,  props<{ filter: Filter }>()),
    };
}
  