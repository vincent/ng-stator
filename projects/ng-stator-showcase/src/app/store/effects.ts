import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, withLatestFrom, exhaustMap, catchError } from 'rxjs/operators';

import * as featureActions from './actions';
import { List, Props, Filter } from '../app.models';
import { Store } from '@ngrx/store';
import { TodosListState } from './state';
import { visitTodos } from './selectors';

@Injectable()
export class TodosEffects {
    load$ = createEffect(() => this.actions.pipe(
        ofType(featureActions.LoadTodosListRequest),
        withLatestFrom(this.store.pipe(map(state => visitTodos(state)))),
        exhaustMap(([action, state]) => this.loadTodos(state.todosList.props, state.todosList.filters).pipe(
            map(list => featureActions.LoadTodosListSuccess({ list })),
            catchError(error => of(featureActions.LoadTodosListFailure({ error })))
        ))
    ));

  constructor(private store: Store<TodosListState>, private actions: Actions) { }

  loadTodos(props: Props, filters: Filter[]): Observable<List> {
        const todos = [
            { id:1, label: '1st todo' },
            { id:2, label: '2st todo' },
            { id:3, label: '3st todo' },
            { id:4, label: '4st todo' },
        ];
        return of(todos
                  .filter(t => !filters.find(f => t[f.field].includes(f.value)))
                  .sort((a, b) => (a[props.sort] < b[props.sort] ? 1 : -1) * (props.dir === 'asc' ? 1 : -1))
        );
  } 
}
