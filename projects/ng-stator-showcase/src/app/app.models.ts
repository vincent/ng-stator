export type List = any[];

export interface Props {
    sort: string;
    dir: 'asc' | 'desc';
}

export interface Filter {
    field: 'some field';
    value: string;
}
