import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'cslx'

import { Search as SearchIcon } from 'react-feather'
import { Box, Card, CardContent, InputBAse, makeStyles, TextField, InputAdornment, SvgIcon } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {},
}))


function GlobalFilter(props) {
    const {preGloablFilteredRows, globalFilter, setGlobalFilter, ...rest} = props

    const classes = useStyles()
    const count = preGloablFilteredRows.length
    
    return (
        <TextField value={globalFilter || ''}
            onChange={e => { setGlobalFilter(e.target.value || undefined) }}
            InputProps = {{ startAdornment: (
                <InputAdornment position="start">
                    <SvgIcon fonstSize="small" color="action" >
                        <SearchIcon />
                    </SvgIcon>
                </InputAdornment>
            )}}
            placehodler={`${count} returned items`} variant="outlined"
        />
    )
}

GlobalFilter.propTypes = {
    preGloablFilteredRows: PropTypes.array.isRequired,
    globalFilter: PropTypes.string.isRequired,
    setGlobalFilter: PropTypes.func.isRequired,
}

export default GlobalFilter
