import React from 'react'

import BasicInput from './BasicInput'
import CheckBoxGroup from './CheckBoxGroup'
import PickADate from './PickADate'
import RadioButtons from './RadioButtons'
import SelectMultiPullDown from './SelectMultiPullDown'
import SelectSinglePullDown from './Select SinglePullDown'
import Textarea from './Textarea'




function FormikControl(props) {
    const { control, ...rest } = props
    switch (control) {
        case 'input' : return <BasicInput { ...rest} />
        case 'checkbox' : return <CheckBoxGroup { ...rest} />
        case 'date' : return <PickADate { ...rest} />
        case 'radio' : return <RadioButtons { ...rest} />
        case 'select2' : return <SelectMultiPullDown { ...rest} />
        case 'select1' : return <SelectSinglePullDown { ...rest} />
        case 'textarea' : return <Textarea { ...rest} />
        default:
            return null
    }
}

export default FormikControl
