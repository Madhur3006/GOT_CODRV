import React, { useMemo } from 'react';
import { useTable, useGlobalFilter, useFilters, usePagination, useSortBy } from 'react-table';
import { COLUMNS } from '../utils/columns';
import { GlobalFilter } from '../utils/GlobalFilter';
import './table.css'

const Table = ({ data }) => {
    const columns = useMemo(() => COLUMNS, [])

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      prepareRow,
      setGlobalFilter,
      page,
      canPreviousPage,
      canNextPage,
      pageOptions,
      gotoPage,
      pageCount,
      nextPage,
      previousPage,
      setPageSize,
      state: { pageIndex, pageSize, globalFilter },
    } = useTable(
      {
        columns,
        data,
      },
      useFilters,
      useGlobalFilter,
      useSortBy,
      usePagination
    );
  
    return (
      <div>
        
        <GlobalFilter filter = {globalFilter} setFilter={setGlobalFilter} />

        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                  <span style={{color: 'white'}}>
                  {column.isSorted ? (column.isSortedDesc ? ' Sort' : ' Sort') : " Sort"}
                  </span>
                  <div>{column.render('Filter')}</div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div style={{textAlign: 'center'}}>
            <span>
                Page{" "}
                <strong>{pageIndex + 1} of {pageOptions.length}</strong>{" "}
            </span>
            <span>
                | Go to page: {' '}
                <input type = {'number'} defaultValue = {pageIndex + 1} onChange = {(e) => {
                    const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                    gotoPage(pageNumber)
                }} style = {{ width: '50px', border: '1px solid black'}}/>
            </span>
            <select value = {pageSize} onChange = {e => setPageSize(Number(e.target.value))}>
                {[10,15,50].map((pageSize) => (
                    <option key = {pageSize} value = {pageSize}>
                        Show {pageSize}
                    </option>
                ))}
            </select>
            <button onClick = {() => gotoPage(0)} disabled = {!canPreviousPage}>{"<<"}</button>
            <button onClick = {() => previousPage()} disabled = {!canPreviousPage}>Prev</button>
            <button onClick = {() => nextPage()} disabled = {!canNextPage}>Next</button>
            <button onClick = {() => gotoPage(pageCount - 1)} disabled = {!canNextPage}>{">>"}</button>
        </div>
      </div>
    );
  };

export default Table
  