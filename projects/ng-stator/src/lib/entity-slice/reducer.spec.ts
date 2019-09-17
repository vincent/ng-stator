import { createEntityActions } from "./actions";
import { withEntitytReducer } from './reducer';

type Entity = { id: number };

const state   = { test: {} };
const actions = createEntityActions<Entity>('Test');
const reducer = withEntitytReducer('test', actions);

describe('Entity Slice Reducer', () => {
    it('toggle loading on request', () => {
        const entity  = { id: 123 };
        const reduced = reducer({})(state, actions.LoadEntityRequest({ entity }));
        expect(reduced.test).toBeTruthy();
        expect(reduced.test.isLoading).toBeTruthy();
    });

    it('toggle error on request', () => {
        const entity  = { id: 123 };
        const reduced = reducer({})(state, actions.LoadEntityRequest({ entity }));
        expect(reduced.test).toBeTruthy();
        expect(reduced.test.error).toBeFalsy();
    });

    it('toggle error on failure', () => {
        const error   = Error('nope');
        const reduced = reducer({})(state, actions.LoadEntityFailure({ error }));
        expect(reduced.test.error).toEqual(error);
    });

    it('toggle error on success', () => {
        const entity  = { id: 123 };
        const reduced = reducer({})(state, actions.LoadEntitySuccess({ entity }));
        expect(reduced.test.error).toBeFalsy();
    });

    it('toggle entity on success', () => {
        const entity  = { id: 123 };
        const reduced = reducer({})(state, actions.LoadEntitySuccess({ entity }));
        expect(reduced.test.entity).toEqual(entity);
    });
});
