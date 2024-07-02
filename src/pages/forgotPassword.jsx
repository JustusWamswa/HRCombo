import React from 'react'
import { Box, Button, Typography, Paper, TextField, Link } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import Title from '../components/Title'
import { useNavigate } from 'react-router-dom'


function ForgotPassword() {

    const navigate = useNavigate()

    return (
        <Box width={'100%'} height={'100vh'} sx={{ backgroundColor: 'bgdark.main' }} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Paper sx={{ width: {xs: '90%', lg:'45%'}, height: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: {xs: 3, lg:10} }} elevation={0}>
                <Title text={"Forgot Password?"} />
                <Typography mt={2}>Enter the email address associated with the account.</Typography>
                <Typography mt={5} width={'100%'}>Email Address</Typography>
                <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter your email' />
                <Button variant='contained' sx={{ paddingX: '3rem', textTransform: 'capitalize', width: '100%', my: 5}} onClick={() => console.log('clicked')}>Send Link</Button>
                <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
                    <Typography>Didn't receive link?</Typography>
                    <Typography><Link href="#">Resend</Link></Typography>
                </Box>
                <Button startIcon={<KeyboardBackspaceIcon />} color='success' sx={{ textTransform: 'capitalize', width: { lg: '50%' }, my: 4 }} onClick={() => navigate('/login')}>Go Back</Button>
            </Paper>
        </Box>
    )
}

export default ForgotPassword