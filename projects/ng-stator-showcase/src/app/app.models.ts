export interface Todo {
    id: number;
    label: string;
}

export type List = Todo[];

export interface Props {
    sort: string;
    dir: 'asc' | 'desc';
}

export interface Filter {
    field: 'some field';
    value: string;
}
