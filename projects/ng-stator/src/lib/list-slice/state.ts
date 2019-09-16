export interface IStoreListStateSlice<List, Props, Filter> {
    list: List;
    props: Props;
    filters: Filter[];
    isLoading: boolean;
    error: any;
}

export function createListSlice<List, Props extends { sort: string, dir: 'asc' }, Filter>
    (defaults?: Partial<IStoreListStateSlice<List, Props, Filter>>): IStoreListStateSlice<List, Props, Filter> {
    return {
        list: null,
        props: { sort: null, dir: 'asc' } as Props,
        filters: [],
        isLoading: false,
        error: null,
        ...defaults,
    }
}
