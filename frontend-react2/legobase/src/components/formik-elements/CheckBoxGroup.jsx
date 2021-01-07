import React from 'react'
import { Filed, ErrorMessage } from 'formik'
import { CheckboxWithLabel } from 'formik-material-ui'
import { FormControlLabel, Checkbox } from '@material-ui/core'

function CheckBoxGroup(props) {
    const { label, name, options, ...rest } = props
    return (
        <div className='form-control'>
            {/*<label>{label}</label>
            <Field name={name}>
            {({ field }) => {
                return options.map(option => {
                    return (
                        <Fragment key={option.key}>
                            <input type='checkbox' id={option.value} {...field} {...rest} value={option.value} checked={field.value.includes(option.value)} />
                            <label htmlFor={option.value}>{option.key}</label>
                        </Fragment>
                    )
                    })
                }}
            </Field>
            <ErrorMessage component={TextError} name={name} /> */}
            <Field component={CheckboxWithLabel}
                type="checkbox" name={name} {...rest} >
                {/* {({ field }) => {
                    return options.map(option => {
                        return ( 
                            <FormControlLabel control={<Checkbox checked ='false' name={name}}
                        )
                    })
                }}*/}
            </Field>
            
        </div>
    )
}

export default CheckBoxGroup
