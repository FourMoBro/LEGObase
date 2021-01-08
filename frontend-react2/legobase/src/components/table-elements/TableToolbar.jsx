import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import GlobalFilter from './GlobalFilter'
import TableToolbarControl from './TableToolbarControl'

import { Button, Tooltip, Typography, Toolbar, lighten, makeStyles, Tab} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'


const useToolbarStyles = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
    theme.palette.type === 'light'
        ? { color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
        flex: '1 1 100%'
    },
}))


function TableToolbar(props) {
    const { numSelected, preGlobalFilteredRows, setGlobalFilter, globalFilter, addSomethingHandler, getMoreInfo, control, ...rest} = props
    
    const classes = useToolbarStyles()

    return (
        <Toolbar className={clsx(classes.root, {[classes.highlight]: numSelected > 0, })}>
            <TableToolbarControl control={control} />
                {numSelected} > 0 ? (
                    <Typography className={classes.title} color="inherit" variant="subtitle1">
                        {numSelected} selected
                    </Typography>
                ) : (
                    <Typography className={classes.title} variant="h4" id="tableTitle">
                        {control} not listed?
                    </Typography>
                )}
                {numSelected > 0 ? (
                    <Tooltip title="More Info">
                        <IconButton aria-label="more info" onClick={getMoreInfo}>
                            <Button color="primary" variant="contained">
                                Get More Info
                            </Button>
                        </IconButton>
                    </Tooltip>
                ) : (
                    <GlobalFilter
                        preGloablFilteredRows={preGloablFilteredRows}
                        globalFilter={globalFilter}
                        setGlobalFilter={setGlobalFilter}
                    />
                )}
        </Toolbar>
    )
}

TableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
    getMoreInfo: PropTypes.func.isRequired,
    setGlobalFilter: PropTypes.func.isRequired,
    preGloablFilteredRows: PropTypes.array.isRequired,
    globalFilter: PropTypes.string.isRequired,
}

export default TableToolbar
