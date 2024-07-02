import React from 'react'
import { Box, Button, Checkbox, Divider, Link, Stack, TextField, Typography } from '@mui/material'
import BgPlaceholder from '../components/BgPlaceholder'

function Signup() {
  return (
    <Stack direction={'row'}>
            <Box width={{ xs: '100%', lg: '50%' }} minHeight={'100vh'} display={'flex'} alignItems={'center'}>
                <Box width={{xs:'80%', lg:'50%'}} mx={'auto'} >
                    <Typography color={'secondary'} fontWeight={''} variant='h2' fontSize={{ xs: 40, lg: 30 }}>
                        Get Started Now
                    </Typography>
                    <Typography mt={5}>Full Name</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter your full name' />
                    <Typography mt={3}>Email Address</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter your email' />
                    <Typography mt={3} >Phone Number</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter your phone number' />
                    <Typography mt={3} >Current Health Status</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='"Pregnant", "Planning Pregnancy", "Postpartum", etc' />
                    <Typography mt={3} >Password</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter your password' />
                    <Typography mt={3} >Confirm Password</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter your password' />
                    <Button variant='contained' sx={{ paddingX: '3rem', textTransform: 'capitalize', width: '100%', mt: 5, mb: 5 }} onClick={() => navigate('/login')}> Sign up</Button>
                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                        <Stack direction={'row'} spacing={1}>
                            <Typography>Have an account?</Typography>
                            <Typography><Link href="/login">Sign In</Link></Typography>
                        </Stack>
                    </Box>
                </Box>
            </Box>
            <BgPlaceholder />
        </Stack>
  )
}

export default Signup