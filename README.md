# NgStator

NgStator is a VERY OPINIATED ngrx module to wrap most common behaviours used in an ngrx store.

### what it does

* It can create actions, initial state and reducers to manage the state of either a list, or an form

* Its main goal is to provide a simple common ground for ngrx managed lists and forms in your app, without knowledge of your models

* It is available as a library, but it can also easily be copied in your project, for a better customization

### what it does not

* It does not create any ngrx effects

* It has a very minimal knowledge of your pagination and validation system

* It certainly breaks multiple ngrx paradigms, in exchange for a simpler boilerplate


## List slice

```ts
// actions.ts
export const TodosListActions = createListActions('Todos');
export const {
    LoadListRequest: LoadTodosListRequest,
    LoadListSuccess: LoadTodosListSuccess,
    LoadListFailure: LoadTodosListFailure,
} = TodosListActions;
// build actions creators
//      [LoadListRequest] Todos
//      [LoadListSuccess] Todos :: props<{ list:  Todo[] }>
//      [LoadListFailure] Todos :: props<{ error: Error  }>
//
// pagination & filtering actions are also available
```

```ts
// reducer.ts
const initialState = {
    todosList: createListSlice({ list: [] })
}

// handle each actions to alter the todosList slice
const reducer = withListReducer('todosList', TodosListActions)(
    initialState,
    // your custom reducers
);
```


## Entity slice

```ts
// actions.ts
export const TodoFormActions = createEntityActions('Todo Form');
export const {
    LoadEntityRequest: LoadTodoFormRequest,
    LoadEntitySuccess: LoadTodoFormSuccess,
    LoadEntityFailure: LoadTodoFormFailure,
} = TodoFormActions;
// build actions creators
//      [LoadEntityRequest] Todo Form
//      [LoadEntitySuccess] Todo Form :: props<{ entity: Todo }>
//      [LoadEntityFailure] Todo Form :: props<{ error: Error }>
//
// confirmation actions are also available
```

```ts
// reducer.ts
const initialState = {
    todoForm: createEntitytSlice()
}

// handle each actions to alter the todoForm slice
const reducer = withEntitytReducer('todoForm', TodoFormActions)(
    initialState,
    // your custom reducers
);
```


## Development server

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
