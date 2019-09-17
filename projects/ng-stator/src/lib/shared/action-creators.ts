import { Creator, createAction, ActionCreator } from '@ngrx/store';
import { DisallowTypeProperty, TypedAction, FunctionWithParametersType } from '@ngrx/store/src/models';

export type IsTypedAction<K> = { is: K };

export function createTypedAction<K extends string, T extends string, P extends object>(
    itype: K,
    type: T,
): ActionCreator<T, () => TypedAction<T> & IsTypedAction<K>>;

export function createTypedAction<K extends string, T extends string, P extends object>(
    itype: K,
    type: T,
    config?: { _as: 'props'; _p: P }
): ActionCreator<T, (props: P) => P & TypedAction<T> & IsTypedAction<K>>;

export function createTypedAction<
    K extends string,
    T extends string,
    P extends any[],
    R extends object
>(
    itype: K,
    type: T,
    creator?: Creator<P, DisallowTypeProperty<R>>
): FunctionWithParametersType<P, R & TypedAction<T>> & IsTypedAction<K>;

export function createTypedAction<K extends string, T extends string, C extends Creator>(
    itype: K,
    type: T,
    config?: C
  ): Creator {
    return defineInternalType(itype, createAction(type, config));
};


function defineInternalType(type: string, creator: Creator): Creator {
    return Object.defineProperty(creator, 'is', {
        value: type,
        writable: false,
    });
}
