import { MemoizedSelector, createSelector } from '@ngrx/store';
import { IStoreListStateSlice } from './state';

export interface IStoreListStateSelectors<List, Props, Filter> {
    getList: (state: IStoreListStateSlice<List, Props, Filter>) => List;
    selectList: MemoizedSelector<object, List>;

    getFilters: (state: IStoreListStateSlice<List, Props, Filter>) => Filter[];
    selectFilters: MemoizedSelector<object, Filter[]>;

    getError: (state: IStoreListStateSlice<List, Props, any>) => any;
    selectError: MemoizedSelector<object, any>;

    getIsLoading: (state: IStoreListStateSlice<List, Props, Filter>) => boolean;
    selectIsLoading: MemoizedSelector<object, boolean>;

    getProps: (state: IStoreListStateSlice<List, Props, Filter>) => Props;
    selectProps: MemoizedSelector<object, Props>;
}


export function createListSliceSelectors<List, Props, Filter>
	(sliceSelector:  MemoizedSelector<object, IStoreListStateSlice<List, Props, Filter>>):
	IStoreListStateSelectors<List, Props, Filter> {

	const getList = (state: IStoreListStateSlice<List, Props, Filter>): List => state.list;
	const selectList: MemoizedSelector<object, List> = createSelector(sliceSelector, getList);

	const getFilters = (state: IStoreListStateSlice<List, Props, Filter>): Filter[] => state.filters;
	const selectFilters: MemoizedSelector<object, Filter[]> = createSelector(sliceSelector, getFilters);

	const getError = (state: IStoreListStateSlice<List, Props, Filter>): any => state.error;
	const selectError: MemoizedSelector<object, any> = createSelector(sliceSelector, getError);

	const getIsLoading = (state: IStoreListStateSlice<List, Props, Filter>): boolean => state.isLoading;
	const selectIsLoading: MemoizedSelector<object, boolean> = createSelector(sliceSelector, getIsLoading);

	const getProps = (state: IStoreListStateSlice<List, Props, Filter>): Props => state.props;
	const selectProps: MemoizedSelector<object, Props> = createSelector(sliceSelector, getProps);

	return {
		getList,
		selectList,
		getFilters,
		selectFilters,
		getProps,
		selectProps,
		getError,
		selectError,
		getIsLoading,
		selectIsLoading,
	};
}