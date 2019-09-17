import { createListActions } from "./actions";
import { withListReducer } from './reducer';

const state   = { test: {} };
const actions = createListActions('Test');
const reducer = withListReducer('test', actions);

describe('List Slice Reducer', () => {
    it('toggle loading on request', () => {
        const reduced = reducer({})(state, actions.LoadListRequest());
        expect(reduced.test).toBeTruthy();
        expect(reduced.test.isLoading).toBeTruthy();
    });

    it('toggle error on request', () => {
        const reduced = reducer({})(state, actions.LoadListRequest());
        expect(reduced.test).toBeTruthy();
        expect(reduced.test.error).toBeFalsy();
    });

    it('toggle error on failure', () => {
        const error = Error('nope');
        const reduced = reducer({})(state, actions.LoadListFailure({ error }));
        expect(reduced.test.error).toEqual(error);
    });

    it('toggle error on success', () => {
        const list = ['a', 'list']
        const reduced = reducer({})(state, actions.LoadListSuccess({ list }));
        expect(reduced.test.error).toBeFalsy();
    });

    it('toggle list on success', () => {
        const list = ['a', 'list']
        const reduced = reducer({})(state, actions.LoadListSuccess({ list }));
        expect(reduced.test.list).toEqual(list);
    });
});
