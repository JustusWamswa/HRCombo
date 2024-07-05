import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'
import Underline from '../assets/underline.png'
import { useNavigate } from 'react-router-dom'

function CandidateIntro() {

    const navigate = useNavigate()

    return (
        <Box width={'70%'} px={5} mx={'auto'} pt={8} display={'flex'}>
            <Box
                width={'50%'}
                component={motion.div}
                initial={{ scale: 0.9, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', duration: 2, delay: 0.1 }}
            >
                <Box display={'flex'} flexDirection={'column'} alignItems={'start'}>
                    <Typography color={'secondary'} fontWeight={'bold'} variant='h2' fontSize={{ xs: 40, md: 60 }}>
                        Welcome Daisy!
                    </Typography>
                    <Box
                        component="img"
                        sx={{ height: 25 }}
                        alt="Underline"
                        src={Underline}
                        pl={30}
                    />
                </Box>
                <Typography
                    mt={5}
                    variant='h6'
                    component={motion.div}
                    initial={{ scale: 0.9, opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', duration: 2, delay: 0.1 }}
                >
                    Your personalized dashboard to manage your job search
                </Typography>
                <Typography
                    lineHeight={1.5}
                    letterSpacing={0.3}
                    mt={3}
                    mb={6}
                    component={motion.div}
                    initial={{ scale: 0.9, opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', duration: 2, delay: 0.1 }}
                >
                    Make the most of our advanced recruitment platform by ensuring your profile is complete and up-to-date.
                </Typography>
                <Button
                    variant='outlined'
                    color='secondary'
                    sx={{ paddingX: 3, paddingY: 2, textTransform: 'capitalize', boxShadow: 2, borderRadius: 3, minWidth: 200 }}
                    onClick={() => navigate('/candidateportal/profile')}
                    component={motion.div}
                    initial={{ y: '-3vh', opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', duration: 2, delay: 0.1 }}
                >
                    Edit profile
                </Button>
            </Box>
            <Box display={'flex'} justifyContent={'end'} alignItems={'center'} width={'50%'}>
                <svg width="300" height="300" viewBox="0 0 160 160" style={{ transform: "rotate(-90deg)" }}>
                    <defs>
                        <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: "#B175FF", stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: "#210D41", stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    <circle r="70" cx="80" cy="80" fill="transparent" stroke="#ebebeb" strokeWidth="12px"></circle>
                    <motion.circle r="70" cx="80" cy="80" fill="transparent" stroke="url(#gradientStroke)" strokeLinecap="round" strokeWidth="12px" strokeDasharray="439.6px" strokeDashoffset="109px"
                        initial={{ strokeDashoffset: 439.6 }}
                        whileInView={{ strokeDashoffset: 109.9 }}
                        transition={{ type: 'spring', duration: 2, delay: 0.1 }}
                        viewport={{ once: true }}
                    ></motion.circle>
                    <text x="71px" y="115px" fill="#5e5d5e" fontSize="10px" style={{ transform: "rotate(90deg) translate(-8px, -220px)" }}>Profile</text>
                    <text x="71px" y="115px" fill="#210D41" fontSize="30px" fontWeight="bold" style={{ transform: "rotate(90deg) translate(-20px, -180px)" }}>79%</text>
                </svg>
            </Box>
        </Box>
    )
}

export default CandidateIntro