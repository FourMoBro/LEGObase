import React from 'react'
import { Field } from 'formik'
import { Select } from 'formik-material-ui'
import { FormControl, InputLabel, MenuItem, Typography } from '@material-ui/core'

function SelectMultiPullDown(props) {
    const { title, label, name, options, ...rest} = props
    return (
        <div className='form-control'>
            <Typography align="center" color="textPrimary" variant="body1">
                {title}
            </Typography>
            <FormControl>
                <InputLabel shrink={true} htmlFor={label}>
                    {label}
                </InputLabel>
                <Field fullWidth component={Select} type="text" name={name} multiple={true}
                    variant="outlined" inputProps={{name:{name}, id:{name}}}>
                        {options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.value}
                            </MenuItem>
                        ))}
                </Field>
            </FormControl>
            
        </div>
    )
}

export default SelectMultiPullDown
