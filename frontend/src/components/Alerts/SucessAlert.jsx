import { Alert, AlertTitle, Snackbar } from '@mui/material'
import React from 'react'
import { useRequestStateStore } from '../../stores/useRequestStateStore'

function SuccessAlert() {

    const { success } = useRequestStateStore()

    return (
        <Snackbar open={success} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >
            <Alert severity="success" sx={{width: '20vw'}}>
                <AlertTitle>Success</AlertTitle>
            </Alert>
        </Snackbar>
    )
}

export default SuccessAlert
