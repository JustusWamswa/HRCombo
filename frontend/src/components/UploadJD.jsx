import React, { useState } from 'react'
import Title from './Title'
import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import hr from '../assets/hr.jpg'
import resumewhite from '../assets/resumeWhite.png'
import { useNavigate } from 'react-router-dom'
import UploadModal from './Modals/UploadModal'
import UploadJDModal from './Modals/UploadJDModal'


function UploadJD() {

    const navigate = useNavigate()
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <Box width={'70%'} px={5} mx={'auto'}>
            <Title text={"Upload Your Job Description"} />
            <Typography
                textAlign={'center'}
                width={'80%'}
                mx={'auto'}
                lineHeight={1.5}
                letterSpacing={0.3}
                mb={6}
                component={motion.div}
                initial={{ scale: 0.9, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', duration: 2, delay: 0.1 }}
            >
                Reach top talent by posting your job openings with our easy-to-use job description form. Our platform uses advanced AI to ensure your job postings attract the right candidates.            </Typography>
            <Stack direction={'row'}>
                <Box
                    width={'50%'}
                    height={'60vh'}
                    sx={{ backgroundImage: `url(${hr})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                    borderRadius={3}
                    position={'relative'}
                    component={motion.div}
                    initial={{ scale: 0.9, opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', duration: 2, delay: 0.1 }}
                >
                    <Box width={'10rem'} height={'10rem'} borderRadius={'50%'} bgcolor={'white'} display={'flex'} alignItems={'center'} justifyContent={'center'} position={'absolute'} right={'-10%'} top={'-10%'}>
                        <Typography fontWeight={'bold'} fontSize={'1.5rem'} p={5}>Why?</Typography>
                    </Box>

                </Box>
                <Box width={'50%'} height={'60vh'} pl={15} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'}>
                    <Box display={'flex'} alignItems={'center'}>
                        <Paper elevation={3} sx={{ width: '1.5rem', height: '1.5rem', borderRadius: '50%', bgcolor: 'bglight.main' }} ></Paper>
                        <Typography ml={3}>AI-Powered Job Matching </Typography>
                    </Box>
                    <Box display={'flex'} alignItems={'center'}>
                        <Paper elevation={3} sx={{ width: '1.5rem', height: '1.5rem', borderRadius: '50%', bgcolor: 'bgdark.main' }} ></Paper>
                        <Typography ml={3}>Increase Visibility </Typography>
                    </Box>
                    <Box display={'flex'} alignItems={'center'}>
                        <Paper elevation={3} sx={{ width: '1.5rem', height: '1.5rem', borderRadius: '50%', bgcolor: 'primary.main' }} ></Paper>
                        <Typography ml={3}>Save Time </Typography>
                    </Box>
                    <Box display={'flex'} alignItems={'center'}>
                        <Paper elevation={3} sx={{ width: '1.5rem', height: '1.5rem', borderRadius: '50%', bgcolor: 'secondary.main' }} ></Paper>
                        <Typography ml={3}>Get Personalized Recommendations </Typography>
                    </Box>
                    <Button
                        variant='contained'
                        startIcon={<Box component="img" sx={{ width: 25, cursor: 'pointer' }} alt="resume" src={resumewhite} />}
                        sx={{ paddingX: 2, paddingY: 2, textTransform: 'capitalize', boxShadow: 2, borderRadius: 3, minWidth: 200, width: '60%', mt: 5 }}
                        onClick={handleOpen}
                        component={motion.div}
                        initial={{ y: '3vh', opacity: 0 }}
                        viewport={{ once: true }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', duration: 1, delay: 0.1 }}
                    > Post a Job </Button>
                </Box>
            </Stack>
            <UploadJDModal open={open} handleClose={handleClose} />
        </Box>
    )
}

export default UploadJD