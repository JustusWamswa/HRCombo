import { Alert, AlertTitle } from '@mui/material'
import React from 'react'

function ErrorAlert({message}) {
    return (
        <Alert severity="error" sx={{ position: 'absolute', top: 10, right: 10 }}>
            <AlertTitle>Error</AlertTitle>
            {message}
        </Alert>
    )
}

export default ErrorAlert