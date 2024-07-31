import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'
import Title from './Title'
import User from '../assets/user.png'
import Next from '../assets/curve-arrow.png'
import Resume from '../assets/resume.png'
import Puzzle from '../assets/puzzle.png'
import ButtonIc from '../assets/button.png'


function HowItWorks() {
    return (
        <Box width={'80%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} mx={'auto'}>
            <Title text={"How It Works"} />
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} width={'100%'}>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    component={motion.div}
                    initial={{ x: '-10vw', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', duration: 2, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <Avatar sx={{ width: '8rem', height: '8rem', bgcolor: 'secondary.main', color: 'primary.main' }}>
                        <Box
                            component="img"
                            sx={{ height: '65%' }}
                            alt="icon"
                            src={User}
                        />
                    </Avatar>
                    <Typography color={'secondary'} fontWeight={'bold'} mt={2}>
                        Sign Up
                    </Typography>
                    <Typography mt={2} width={'100%'} textAlign={'center'}>
                        Create your account to get started
                    </Typography>
                </Box>
                <motion.div
                    initial={{ x: '-10vw', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', duration: 2, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <Box
                        component="img"
                        sx={{ height: 150, rotate: '48deg' }}
                        alt="icon"
                        src={Next}
                    />
                </motion.div>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    component={motion.div}
                    initial={{ x: '-10vw', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', duration: 2, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <Avatar sx={{ width: '8rem', height: '8rem', bgcolor: 'secondary.main', color: 'primary.main' }}>
                        <Box
                            component="img"
                            sx={{ height: '65%' }}
                            alt="icon"
                            src={Resume}
                        />
                    </Avatar>
                    <Typography color={'secondary'} fontWeight={'bold'} mt={2}>
                        Upload Resume
                    </Typography>
                    <Typography mt={2} width={'90%'} textAlign={'center'}>
                        Upload your resume and let our AI do the rest
                    </Typography>
                </Box>
                <motion.div
                    initial={{ x: '-10vw', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', duration: 2, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Box
                        component="img"
                        sx={{ height: 150, rotate: '48deg' }}
                        alt="icon"
                        src={Next}
                    />
                </motion.div>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    component={motion.div}
                    initial={{ x: '-10vw', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', duration: 2, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Avatar sx={{ width: '8rem', height: '8rem', bgcolor: 'secondary.main', color: 'primary.main' }} >
                        <Box
                            component="img"
                            sx={{ height: '65%' }}
                            alt="icon"
                            src={Puzzle}
                        />
                    </Avatar>
                    <Typography color={'secondary'} fontWeight={'bold'} mt={2}>
                        Get Matched
                    </Typography>
                    <Typography mt={2} width={'90%'} textAlign={'center'}>
                        Get matched with jobs that fit your skills and preferences
                    </Typography>
                </Box>
                <motion.div
                    initial={{ x: '-10vw', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', duration: 2, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Box
                        component="img"
                        sx={{ height: 150, rotate: '48deg' }}
                        alt="icon"
                        src={Next}
                    />
                </motion.div>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    component={motion.div}
                    initial={{ x: '-10vw', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', duration: 2, delay: 0.7 }}
                    viewport={{ once: true }}
                >
                    <Avatar sx={{ width: '8rem', height: '8rem', bgcolor: 'secondary.main', color: 'primary.main' }} >
                        <Box
                            component="img"
                            sx={{ height: '65%' }}
                            alt="icon"
                            src={ButtonIc}
                        />
                    </Avatar>
                    <Typography color={'secondary'} fontWeight={'bold'} mt={2}>
                        Apply
                    </Typography>
                    <Typography mt={2} width={'90%'} textAlign={'center'}>
                        Apply to your matched jobs with just a few clicks
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default HowItWorks