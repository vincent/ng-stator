import { createListActions } from './actions';
import { ListActionType } from './enum';

describe('createListActions', () => {
    it('creates each action type', () => {
        const actions = createListActions('Test');
        expect(actions).toBeTruthy();
        Object.keys(ListActionType).map(type => expect(actions[type]).toBeTruthy())
    });
});

describe('LoadListSuccess', () => {
    it('have a list property', () => {
        const actions = createListActions('Test');
        ///
        const list = ['a', 'list']
        const action = actions.LoadListSuccess({ list })
        expect(action.list).toEqual(list);
    });
});
