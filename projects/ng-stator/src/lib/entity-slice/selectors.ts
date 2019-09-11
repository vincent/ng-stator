import { MemoizedSelector } from '@ngrx/store';
import { IStoreEntityStateSlice } from './state';

export interface IStoreEntityStateSelectors<Entity> {
	getError: (state: IStoreEntityStateSlice<Entity>) => any;
	selectError: MemoizedSelector<object, any>;

	getIsLoading: (state: IStoreEntityStateSlice<Entity>) => boolean;
	selectIsLoading: MemoizedSelector<object, boolean>;

	getEntity: (state: IStoreEntityStateSlice<Entity>) => Entity;
	selectEntity: MemoizedSelector<object, Entity>;
}