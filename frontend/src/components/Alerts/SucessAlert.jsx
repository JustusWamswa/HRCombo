import { Alert, AlertTitle } from '@mui/material'
import React from 'react'

function SuccessAlert({message}) {
    return (
        <Alert severity="success" sx={{position: 'absolute', top: 10, right: 10}}>
            <AlertTitle>Success</AlertTitle>
            {message}
        </Alert>
    )
}

export default SuccessAlert