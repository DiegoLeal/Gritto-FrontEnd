import { TextField } from '@material-ui/core'
import React, { Fragment } from 'react'

export const Input = props => {

    return (
        <Fragment>
            <TextField
                {...props}
                label={'Input'}
            />
        </Fragment>
    )
}

Input.defaultProps = {
    size: 'medium',
    margin: 'dense',
}

export default Input