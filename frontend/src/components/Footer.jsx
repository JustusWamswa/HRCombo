import { Box, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import facebook from '../assets/facebook.png'
import x from '../assets/x.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'

function Footer() {
    return (
        <Box bgcolor={'secondary.main'}>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} width={'80%'} mx={'auto'} color={'white'} p={3}>
                <Box>
                    <Typography fontWeight={'bold'} pb={1}>Quick Links</Typography>
                    <Typography fontSize={'0.9rem'}>Privacy Policy</Typography>
                    <Typography fontSize={'0.9rem'}>Terms of Service</Typography>
                </Box>
                <Box>
                    <Typography fontWeight={'bold'} pb={1}>Contact Information</Typography>
                    <Typography fontSize={'0.9rem'}>Address: "123 Recruitment Ave, Job City, Country"</Typography>
                    <Typography fontSize={'0.9rem'}>Phone: "(123) 456-7890"</Typography>
                    <Typography fontSize={'0.9rem'}>Email: "support@recruitmentplatform.com"</Typography>
                </Box>
                <Box>
                    <Typography fontWeight={'bold'} pb={1}>Social Media</Typography>
                    <Box display={'flex'}>
                        <Box>
                            <Box display={'flex'} alignItems={'center'}>
                                <Box component={'img'} src={facebook} alt='facebook' height={25} mr={1} />
                                <Link href='#' sx={{ color: 'white' }}>Facebook</Link>
                            </Box>
                            <Box display={'flex'} alignItems={'center'} mt={2}>
                                <Box component={'img'} src={instagram} alt='instagram' height={25} mr={1} />
                                <Link href='#' sx={{ color: 'white' }}>Instagram</Link>
                            </Box>
                        </Box>
                        <Box ml={2}>
                            <Box display={'flex'} alignItems={'center'}>
                                <Box component={'img'} src={x} alt='x' height={25} mr={1} />
                                <Link href='#' sx={{ color: 'white' }}>X</Link>
                            </Box>
                            <Box display={'flex'} alignItems={'center'} mt={2}>
                                <Box component={'img'} src={linkedin} alt='linkedin' height={25} mr={1} />
                                <Link href='#' sx={{ color: 'white' }}>LinkedIn</Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Stack>
            <Typography fontSize={'0.8rem'} color={'white'} textAlign={'center'} mt={3} pb={2}>© 2024 HR Combo. All rights reserved.</Typography>
        </Box>
    )
}

export default Footer