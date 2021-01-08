import React from 'react'
import Proptypes from 'prop-types'
import AddIcon from '@material-ui/icons/Add'

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
            IconButton, TextField, Tooltip } from '@material-ui/core'

const initialSomething = {
    prop1:'',
    prop2:'',
    prop3:'',
}

function AddSomethingDialog(props) {
    const { addSomethingHandler } = props

    const [some, setSome] = useState(initialSomething)
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleAdd = event => {
        addSomethingHandler(some)
        setSome(initialSomething)
    }

    const handleChange = name => ({ target: { value } }) => {
        setSome({ ...some, [name]: value })
    }

    return (
        <div>
            <Tooltip title="Add">
                <IconButton arai-label="add" onClick={handleClickOpen}>
                    <AddIcon />
                </IconButton>
            </Tooltip>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Missing Something</DialogTitle>
                <DialogContent>
                    <DialogContentText>Please fill out the form</DialogContentText>
                    <TextField autoFocus margin="dense" label="Something Prop1" type="text" fullWidth
                                value={some.prop1} onChange={handleChange('prop1')} />
                    <TextField autoFocus margin="dense" label="Something Prop2" type="text" fullWidth
                                value={some.prop2} onChange={handleChange('prop2')} />
                    <TextField autoFocus margin="dense" label="Something Prop3" type="text" fullWidth
                                value={some.prop3} onChange={handleChange('prop3')} />
                    <TextField autoFocus margin="dense" label="Something Prop4" type="text" fullWidth
                                value={some.prop4} onChange={handleChange('prop4')} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAdd} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
            
        </div>
    )
}

AddSomethingDialog.propTypes = {
    addSomethingHandler: Proptypes.func.isRequired,
}
export default AddSomethingDialog
