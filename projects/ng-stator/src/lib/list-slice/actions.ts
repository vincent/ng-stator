import { props } from '@ngrx/store';
import { ListActionType as Types } from './enum';
import { createTypedAction, IsTypedAction } from '../shared/action-creators';

export type LoadListRequestActionPayload           = IsTypedAction<Types.LoadListRequest>                      ;
export type LoadListSuccessActionPayload<List>     = IsTypedAction<Types.LoadListSuccess>  & { list:   List   };
export type LoadListFailureActionPayload           = IsTypedAction<Types.LoadListFailure>  & { error:  Error  };
export type ListSettingsActionPayload<Props>       = IsTypedAction<Types.ListSettings>     & { props:  Props  };
export type AddListFilterActionPayload<Filter>     = IsTypedAction<Types.AddListFilter>    & { filter: Filter };
export type RemoveListFilterActionPayload<Filter>  = IsTypedAction<Types.RemoveListFilter> & { filter: Filter };

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
        LoadListRequest:   createTypedAction(Types.LoadListRequest,  `[LoadListRequest] ${ basename}`                              ),
        LoadListSuccess:   createTypedAction(Types.LoadListSuccess,  `[LoadListSuccess] ${ basename}`,  props<{ list:   List   }>()),
        LoadListFailure:   createTypedAction(Types.LoadListFailure,  `[LoadListFailure] ${ basename}`,  props<{ error:  Error  }>()),
        ListSettings:      createTypedAction(Types.ListSettings,     `[ListSettings] ${    basename}`,  props<{ props:  Props  }>()),
        AddListFilter:     createTypedAction(Types.AddListFilter,    `[AddListFilter] ${   basename}`,  props<{ filter: Filter }>()),
        RemoveListFilter:  createTypedAction(Types.RemoveListFilter, `[RemoveListFilter] ${basename}`,  props<{ filter: Filter }>()),
    };
}
