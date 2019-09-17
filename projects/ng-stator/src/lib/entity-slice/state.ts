export interface IStoreEntityStateSlice<Entity> {
	isLoading: boolean;
	error: any;
	entity: Entity;
}


export function createEntitytSlice<Entity>
    (defaults?: Partial<IStoreEntityStateSlice<Entity>>): IStoreEntityStateSlice<Entity> {
    return {
        entity: null,
        isLoading: false,
        error: null,
        ...defaults,
    }
}
