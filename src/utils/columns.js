import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
    {
        Header: 'Name',
        accessor: 'name',
        Filter: ColumnFilter
    },
    {
        Header: 'Father',
        accessor: 'father',
        Filter: ColumnFilter
    },
    {
        Header: 'Born',
        accessor: 'born',
        Filter: ColumnFilter,
    },
    {
        Header: 'Culture',
        accessor: 'culture',
        Filter: ColumnFilter
    },
    {
        Header: 'Gender',
        accessor: 'gender',
        Filter: ColumnFilter
    }
]