import React from 'react'
import clsx from 'clsx'
import PropTypes, { array } from 'prop-types'

import { Box, Button, Card, Checkbox, Typography, makeStyles, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, TableSortLabel } from '@material-ui/core'
import MaUTable from '@material-ui/core/Table'
import TablePaginationActions from './TablePaginationActions'
import TableToolbar from './TableToolbar'
import { useGlobalFilter , usePagination, useRowSelect, useSortBy, useTable } from 'react-table'

const useStyles = makeStyles((theme) => ({
    root: {},
}))

const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
        const defaultRef = React.useRef()
        const resolvedRef = ref || defaultRef

        React.useEffect(() => {
            resolvedRef.current.indeterminate = indeterminate
        }, [resolvedRef, indeterminate])

        return (
            <>
                <Checkbox ref={resolvedRef} { ...rest} />
            </>
        )
    }
)


function EverythingTable(props) {
    const {className, columns, data, setData, updateMyData, skipPageReset, control, ...rest } = props
    
    const classes=useStyles()

    const { getTableProps, headerGroups, prepareRow, page, gotoPage, setPageSize, pregloablFilteredRows, setGlobalFilter,
            state: { pageIndex, pageSize, selectedRowIds, gloablFilter },
        } = useTable ( {columns, data, autoResetPage: !skipPageReset,},
                        useGlobalFilter, useSortBy, usePagination, useRowSelect, hooks => {
                            hooks.allColumns.push(columns => [
                                {id:'selection',
                            Header: ({ getToggleAllRowsSelectedProps }) => (
                                <div>
                                    <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
                                </div>
                            ),
                        },
                        ...colulmns,
                        ])
                        }
                    )
                    
    const handleChangePage = (event, newPage) => {
        gotoPage(newPage)
    }

    const handleChangeRowsPerPage = event => {
        setPageSize(Number(event.target.value))
    }

    const removeByIndexs = (array, indexs) =>
        array.filter((_, i) => !indexs.includes(i))
    
    const getMoreInfo = event => {
        const newData = removeByIndexs(
            data,
            Object.keys(selectedRowIds).map (x=> parseInt(x, 10))
        )
        setData(newData)
    }

    const addSomethingHandler = some => {
        const newData = data.concat([some])
        setData(newData)
    }





    return (
        <Card className={clsx(classes.root, className)} {...rest} >
            <Box minWidth={1050}>
                <TableToolbar 
                    control={control}
                    numSelected={Object.keys(selectedRowIds).length}
                    getMoreInfo={getMoreInfo}
                    addSomethingHandler={addSomethingHandler}
                    pregloablFilteredRows={pregloablFilteredRows}
                    setGlobalFilter={setGlobalFilter}
                    gloablFilter={gloablFilter}
                />
            </Box>
            <TableContainer>
                <Box minWidth={1050}>
                    <MaUTable { ...getTableProps()}>
                        <TableHead>
                            {headerGroups.map(headerGroup => (
                                <TableRow {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <TableCell {...(column.id === 'selection' ? column.getHeaderProps() : column.getHeaderProps(column.getSortByToggleProps()))} >
                                            <Typography color="textSecondary" variant="h4">
                                                {column.render('Header')} {column.id !== 'selection' ? (
                                                    <TableSortLabel active={column.isSorted} direction={column.isSortedDesc ? 'desc' : 'asc'} />
                                                ) : null}
                                            </Typography>
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableHead>
                        <TableBody>
                            {page.map((row, i) => {
                                prepareRow(row)
                                return (
                                    <TableRow {...row.getRowProps()}>
                                        {row.cells.map(cell => {
                                            return (
                                                <TableCell {...cell.getCellProps()}>
                                                    {cell.render('Cell')}
                                                </TableCell>
                                            )
                                        })}
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5,10,25,{label: 'All', value: data.length}]}
                                    colSpan={3}
                                    count={data.length}
                                    rowsPerPage={pageSize}
                                    page={pageIndex}
                                    SelectProps={{ inputProps: { 'aria-label': 'rows per page'}, native: true, }}
                                    onChangePage={handleChangePage}
                                    onChangeRowsPerPage={handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                    </MaUTable>
                </Box>
            </TableContainer>
        </Card>
    )
}

EverythingTable.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,


}

export default EverythingTable
