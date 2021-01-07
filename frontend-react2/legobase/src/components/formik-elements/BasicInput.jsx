import React from 'react'
import { Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { Typography } from '@material-ui/core'

function BasicInput(props) {
    const {title, value, label, name, ...rest } = props
    return (
        <div className= 'form-control'>
            <Typography align="center" color="textPrimary" variant="body1" >
                {title}
            </Typography>
            <Field component = {TextField}
            fullWidth
            name={name}
            label={label}
            variant="outlined"
            {...rest}
            />
        </div>
    )
}

export default BasicInput
