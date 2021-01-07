import React from 'react'
import {Field} from 'formik'
import { TextField } from 'formik-material-ui'
import { Typography } from '@material-ui/core'

function TextArea(props) {
    const { title, value, lable, name, ...rest } = props
    return (
        <div className='form-control'>
            <Typography align="center" color="textPrimary" variant="body1">
                {title}
            </Typography>
            <Field as='textarea' component={TextField} multiline
                rows={4} fullWidth
                name={name} label={label} variant="outlined" {...rest}
            />
            
        </div>
    )
}

export default TextArea
