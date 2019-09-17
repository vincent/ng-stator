# NgStator

NgStator is a VERY OPINIATED ngrx module to wrap most common behaviours used in an ngrx store.

### what it does

* It can create actions, initial state, selectors and reducers to manage the state of either a list, or an form
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
//      [LoadListSuccess] Todos :: props<{ list: Todo[] }>
//      [LoadListFailure] Todos :: props<{ error: Error }>
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

```ts
// selectors.ts
export const visitTodos: MemoizedSelector<object, TodosListState> = createFeatureSelector<TodosListState>('todos');

export const {
	selectList: selectTodosList,
	selectError: selectTodosError,
	selectIsLoading: selectTodosIsLoading,
} = createListSliceSelectors<List, Props, Filter>(createSelector(visitTodos, (state) => state.todosList));
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
