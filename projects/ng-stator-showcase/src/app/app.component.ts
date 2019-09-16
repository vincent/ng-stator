import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodosListState, selectTodosList, TodosListActions } from './store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'ng-stator-showcase';

    todos = this.store.select(selectTodosList)

    constructor(private store: Store<TodosListState>) {}

    ngOnInit(): void {
        this.store.dispatch(TodosListActions.LoadListRequest(null));
    }
}
