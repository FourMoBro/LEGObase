import React from 'react'

import AddSomethingDialog from './AddSomethingDialog'

function TableToolbarControl(props) {
    const { control, ...rest} = props
    switch (control) {
        case 'some': return <AddSomethingDialog {...rest} />
        default:
            return null
    }
}

export default TableToolbarControl
