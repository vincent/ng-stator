import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { TodosListState, selectTodosList, TodosListActions, selectTodosProps, selectTodosIsLoading, selectTodosError } from './store';
import { Todo } from './app.models';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'ng-stator-showcase';

    inverseDir = this.store.select(selectTodosProps).pipe(map(props => props.dir === 'asc' ? 'desc' : 'asc' ))
    loading = this.store.select(selectTodosIsLoading)
    error = this.store.select(selectTodosError)
    todos = this.store.select(selectTodosList)

    constructor(private store: Store<TodosListState>) {}

    ngOnInit(): void {
        this.store.dispatch(TodosListActions.LoadListRequest());
    }

    sort(dir: 'asc' | 'desc') {
        this.store.dispatch(TodosListActions.ListSettings({ props: { sort: 'id', dir } }));
    }

    delete(todo: Todo) {
        // this.store.dispatch(TodosListActions.LoadListRequest(null));
    }
}
