import React from 'react'
import { Box, Button, Typography, Paper, TextField } from '@mui/material'
import Title from '../components/Title'

function ResetPassword() {
    return (
        <Box width={'100%'} height={'100vh'} sx={{ backgroundColor: 'bgdark.main' }} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Paper sx={{ width: { xs: '90%', lg: '45%' }, height: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: { xs: 3, lg: 10 } }} elevation={0}>
                <Title text={"Reset Password"} />
                <Typography mt={5} width={'100%'}>Password</Typography>
                <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter your password' />
                <Typography mt={5} width={'100%'}>Confirm Password</Typography>
                <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Re-enter password' />
                <Button variant='contained' sx={{ paddingX: '3rem', textTransform: 'capitalize', width: '100%', my: 5 }} onClick={() => console.log('clicked')}>Change</Button>
            </Paper>
        </Box>
    )
}

export default ResetPassword