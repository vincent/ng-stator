export interface IStoreListStateSlice<List, Props, Filter> {
    list: List;
    props: Props;
    filters: Filter[];
    isLoading: boolean;
    error: any;
}