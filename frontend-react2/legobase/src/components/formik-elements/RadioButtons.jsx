import React from 'react'
import { Field } from 'formik'
import {FormControlLabel, Radio } from '@material-ui/core'
import { RadioGroup } from 'formik-material-ui'

function RadioButtons(props) {
    const {isSubmitting, label, bame, options, ...rest } = props
    return (
        <div className = 'form-control'>
            <Field component={RadioGroup} label={label} name={name} {...rest} >
                {({ isSubmitting }) => {
                    return options.map(option => {
                        return (
                            <FormControlLabel value={option.value} label={option.key} control={<Radio disabled={isSubmitting} />} disabled={isSubmitting} />
                        )
                    })
                }}
            </Field>
        </div>
    )
}

export default RadioButtons
