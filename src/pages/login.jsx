import React from 'react'
import { Box, Button, Checkbox, Divider, Link, Stack, TextField, Typography } from '@mui/material'
import { useGoogleLogin } from '@react-oauth/google'
import BgPlaceholder from '../components/BgPlaceholder'


function Login() {

    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    })

    return (
        <Stack direction={'row'}>
            <Box width={{ xs: '100%', lg: '50%' }} minHeight={'100vh'} display={'flex'} alignItems={'center'}>
                <Box width={{ xs: '80%', lg: '50%' }} mx={'auto'} >
                    <Typography color={'secondary'} fontWeight={''} variant='h2' fontSize={{ xs: 40, lg: 40 }}>
                        Welcome!
                    </Typography>
                    <Typography mt={2}>Enter your credentials to access your account</Typography>
                    <Typography mt={5}>Email Address</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter your email' />
                    <Box display={'flex'} justifyContent={'space-between'} mt={3} >
                        <Typography>Password</Typography>
                        <Typography><Link href="/forgotpassword">forgot password</Link></Typography>
                    </Box>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter your password' />
                    <Box sx={{ display: 'flex', alignItems: 'center' }} width={'100%'} mt={2}>
                        <Checkbox />
                        <Typography>Remember for 30 days</Typography>
                    </Box>
                    <Button variant='contained' sx={{ paddingX: '3rem', textTransform: 'capitalize', width: '100%', mt: 5, mb: 8 }} onClick={() => navigate('/login')}> Login</Button>
                    <Divider>Or</Divider>
                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                        <Button variant='outlined' sx={{ textTransform: 'capitalize', width: { lg: '50%' }, my: 4, borderColor: 'lightgray', color: 'gray' }} onClick={() => login()}>Sign in with Google</Button>
                        <Stack direction={'row'} spacing={1}>
                            <Typography>Don't have an account?</Typography>
                            <Typography><Link href="/signup">Sign Up</Link></Typography>

                        </Stack>
                    </Box>
                </Box>
            </Box>
            <BgPlaceholder />
        </Stack>
    )
}

export default Login