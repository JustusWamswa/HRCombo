import { Alert, AlertTitle, Snackbar } from '@mui/material'
import React from 'react'
import { useRequestStateStore } from '../../stores/useRequestStateStore'

function ErrorAlert() {

    const { error } = useRequestStateStore()

    return (
        <Snackbar open={error} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >
            <Alert severity="error" sx={{width: '20vw'}}>
                <AlertTitle>An error occurred</AlertTitle>
            </Alert>
        </Snackbar>
    )
}

export default ErrorAlert
