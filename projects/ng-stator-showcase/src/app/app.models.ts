export interface List {
    items: any[];
}

export interface Props {
    sort: string;
    dir: 'asc' | 'desc';
}

export interface Filter {
    field: 'some field';
    value: string;
}
