import { createEntityActions } from './actions';
import { EntityActionType } from './enum';

describe('createEntityActions', () => {
    it('creates each action type', () => {
        const actions = createEntityActions('Test');
        expect(actions).toBeTruthy();
        Object.keys(EntityActionType).map(type => expect(actions[type]).toBeTruthy())
    });
});

describe('LoadListSuccess', () => {
    it('have a list property', () => {
        const actions = createEntityActions('Test');
        ///
        const entity = ['an', 'entity']
        const action = actions.LoadEntitySuccess({ entity })
        expect(action.entity).toEqual(entity);
    });
});
