import React from 'react'
import { Field } from 'formik'
import { DatePicker } from 'formik-material-ui-pickers'
import {MuiPickersUtilsProvider} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

function PickADate(props) {
    const { label, name, ...rest} = props
    return (
        <div className='form-control'>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Field fullWidth component={DatePicker} name={name} label={label} />
            </MuiPickersUtilsProvider>
            
        </div>
    )
}

export default PickADate
