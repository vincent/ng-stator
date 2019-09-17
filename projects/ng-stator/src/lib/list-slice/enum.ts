export enum ListActionType {
    LoadListRequest  = 'LoadListRequest',
    LoadListSuccess  = 'LoadListSuccess',
    LoadListFailure  = 'LoadListFailure',
    ListSettings     = 'ListSettings',
    AddListFilter    = 'AddListFilter',
    RemoveListFilter = 'RemoveListFilter',
}

export enum ListReducerStrategy {
    Append    = 'Append',
    Prepend   = 'Prepend',
    Replace   = 'Replace',
}
