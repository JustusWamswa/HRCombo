import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useNavStore } from '../stores/useNavStore'

function PortalCall() {

    const navigate = useNavigate()
    const { setNavValue } = useNavStore()

    const handleNavigate = (url, value) => {
        navigate(url)
        setNavValue(value)
    }

  return (
    <Stack direction={'row'} sx={{width: '80%', p: 10, mx: 'auto'}} >
        <Box width={'50%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} px={3}>
            <Typography variant='h5' fontWeight={'bold'}>Ready to Find Your Next Job?</Typography>
            <Typography textAlign={'center'} my={3} width={'80%'}>Join thousands of other professionals who have found their dream jobs with us.</Typography>
            <Button variant='contained' sx={{ paddingX: 3, paddingY: 2, textTransform: 'capitalize', boxShadow: 2, borderRadius: 3, minWidth: 200, width: '20%', mb: 5 }} onClick={() => handleNavigate('/candidateportal', 3)}>Update profile</Button>
        </Box>
        <Box width={'50%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} px={3}>
            <Typography variant='h5' fontWeight={'bold'}>Ready to Hire the Best Talent?</Typography>
            <Typography textAlign={'center'} my={3} width={'80%'}>Join hundreds of companies that have successfully filled their positions with top candidates using our platform.</Typography>
            <Button variant='contained' sx={{ paddingX: 3, paddingY: 2, textTransform: 'capitalize', boxShadow: 2, borderRadius: 3, minWidth: 200, width: '20%', mb: 5 }} onClick={() => handleNavigate('/employerportal', 4)}>Find talent</Button>
        </Box>
    </Stack>
  )
}

export default PortalCall