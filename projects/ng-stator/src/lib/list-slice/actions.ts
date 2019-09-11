import { createAction, props, ActionCreator } from '@ngrx/store';
import { ListActionType } from './enum';

export type LoadListRequestActionPayload<List>     = { is: ListActionType.LoadListRequest                   };
export type LoadListSuccessActionPayload<List>     = { is: ListActionType.LoadListSuccess,   list:   List   };
export type LoadListFailureActionPayload<List>     = { is: ListActionType.LoadListFailure,   error:  Error  };
export type ListSettingsActionPayload<Props>       = { is: ListActionType.ListSettings,      props:  Props  };
export type AddListFilterActionPayload<Filter>     = { is: ListActionType.AddListFilter,     filter: Filter };
export type RemoveListFilterActionPayload<Filter>  = { is: ListActionType.RemoveListFilter,  filter: Filter };

export type ListAction<List, Props, Filter> =
    |   LoadListRequestActionPayload<List>
    |   LoadListSuccessActionPayload<List>
    |   LoadListFailureActionPayload<List>
    |   ListSettingsActionPayload<Props>
    |   AddListFilterActionPayload<Filter>
    |   RemoveListFilterActionPayload<Filter>
    ;

export type ListActions<List, Props, Filter> = {[K in ListActionType]: TypedAction<ListAction<List, Props, Filter>>}

export function createListActions<List, Props, Filter>(basename: string): ListActions<List, Props, Filter> {
    return {
        LoadListRequest:   createAction(`[LoadListRequest] ${basename}`,   props<LoadListRequestActionPayload<List>>()),
        LoadListSuccess:   createAction(`[LoadListSuccess] ${basename}`,   props<LoadListSuccessActionPayload<List>>()),
        LoadListFailure:   createAction(`[LoadListFailure] ${basename}`,   props<LoadListFailureActionPayload<List>>()),
        ListSettings:      createAction(`[ListSettings] ${basename}`,      props<ListSettingsActionPayload<Props>>()),
        AddListFilter:     createAction(`[AddListFilter] ${basename}`,     props<AddListFilterActionPayload<Filter>>()),
        RemoveListFilter:  createAction(`[RemoveListFilter] ${basename}`,  props<RemoveListFilterActionPayload<Filter>>()),
    };
}
  