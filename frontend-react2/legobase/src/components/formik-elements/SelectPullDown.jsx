import React from 'react'
import { Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { MenuItem, Typography } from '@material-ui/core'


function SelectPullDown(props) {
    const { title, label, name, options, ...rest} = props
    return (
        <div className='form-control'>
            <Typography align="center" color="textPrimary" variant="body1">
                {title}
            </Typography>
            <Field fullWidth component={TextField} type="text" name={name} 
                    variant="outlined" inputLabelProps={{shrink: true, }}>
                        {options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.value}
                            </MenuItem>
                        ))}
                </Field>
            
        </div>
    )
}

export default SelectPullDown
