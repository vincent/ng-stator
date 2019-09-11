export interface IStoreEntityStateSlice<Entity> {
	isLoading: boolean;
	error: any;
	entity: Entity;
}