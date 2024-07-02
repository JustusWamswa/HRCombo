import { Avatar, Box, Button, Divider, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import Title from './Title'
import { motion } from 'framer-motion'
import Avatar9 from '../assets/avatar9.jpg'
import Avatar11 from '../assets/avatar11.jpg'
import Avatar12 from '../assets/avatar12.jpg'
import Slider from 'react-slick'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const testimonials = [
    {
        index: 0,
        text: "Our recruitment process has been revolutionized by this platform. The AI-driven candidate matching has significantly reduced our time-to-hire and ensured that we only interview the most qualified candidates. The intuitive interface and comprehensive analytics provide invaluable insights, making it easier to manage job postings and track applicant progress. We've successfully filled multiple positions with top-tier talent in a fraction of the time it used to take. This platform is a must-have for any company looking to streamline their hiring process.",
        name: "Michael Brown",
        jobTitle: "HR Manager at Innovatech Solutions",
        image: { src: Avatar9 }
    },
    {
        index: 1,
        text: "This platform made my job search incredibly efficient and stress-free. The personalized job recommendations were spot on, and I appreciated how the AI matched my skills with relevant job opportunities. The straightforward application process and timely notifications kept me informed every step of the way. Thanks to this platform, I found an amazing job that matches my career goals perfectly within just a few weeks. I highly recommend it to anyone looking to take their career to the next level.",
        name: "Emily Davis",
        jobTitle: "Marketing Specialist at Bright Horizons Media",
        image: { src: Avatar11 }
    },
    {
        index: 2,
        text: "Using this recruitment platform was a game-changer for my job search. The AI-powered matching system accurately identified opportunities that aligned perfectly with my skills and experience. The seamless application process and user-friendly interface made it incredibly easy to apply for jobs and track my progress. Within a month, I landed a fantastic position at a company I love. I highly recommend this platform to anyone serious about finding their next career opportunity!",
        name: "George Johnson",
        jobTitle: "Software Engineer at Tech Solutions Inc.",
        image: { src: Avatar12 }
    }
]

function Testimonials() {

    const [data, setData] = useState(testimonials[0])

    const handleNext = (index) => {
        if (index == testimonials.length - 1) {
            setData(testimonials[0])
            return
        }
        setData(testimonials[index + 1])
    }

    return (
        <Box bgcolor={'bgdark.main'} pb={15} mt={10}>
            <Box width={'70%'} mx={'auto'}>
                <Title text={"Hear from our users"} />
                <Stack direction={'row'}>
                    <Box width={'80%'} px={5} >
                        <Typography
                            lineHeight={2}
                            letterSpacing={0.5}
                            textAlign={'justify'}
                            component={motion.div}
                            initial={{ scale: 0.9, opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ type: 'spring', duration: 2, delay: 0.1 }}
                        >
                            {data.text}
                        </Typography>
                        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} mt={7}>
                            <Box display={'flex'} alignItems={'center'}>
                                <Avatar
                                    alt="Avatar9"
                                    src={data.image.src}
                                    sx={{ width: 60, height: 60, mr: 3 }}
                                    component={motion.div}
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1.1, opacity: 1 }}
                                    transition={{ type: 'spring', duration: 2, delay: 0.3 }}
                                    viewport={{ once: true }}
                                />
                                <Box>
                                    <Typography lineHeight={2} letterSpacing={0.5} fontWeight={'bold'}>{data.name}</Typography>
                                    <Typography lineHeight={2} letterSpacing={0.5}>{data.jobTitle}</Typography>
                                </Box>
                            </Box>
                            <IconButton aria-label="next" size="large" sx={{ bgcolor: 'secondary.main' }} onClick={() => handleNext(data.index)}>
                                <NavigateNextIcon sx={{ color: 'white', ":hover": { color: 'inherit' } }} />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box width={'20%'} minHeight={'40vh'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'center'} position={'relative'}>
                        <Divider orientation='vertical' sx={{ position: 'absolute', top: '-10%', width: 3, height: '120%', bgcolor: 'bglight.main' }} />
                        <Avatar
                            alt="Avatar"
                            src={data.index == 0 ? testimonials[testimonials.length - 1]['image']['src'] : testimonials[data.index - 1]['image']['src']}
                            sx={{ width: 60, height: 60 }}
                            component={motion.div}
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1.1, opacity: 1 }}
                            transition={{ type: 'spring', duration: 2, delay: 0.3 }}
                            viewport={{ once: true }}
                        />
                        <Avatar
                            alt="Avatar"
                            src={data.image.src}
                            sx={{ width: 100, height: 100 }}
                            component={motion.div}
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1.1, opacity: 1 }}
                            transition={{ type: 'spring', duration: 2, delay: 0.3 }}
                            viewport={{ once: true }}
                        />
                        <Avatar
                            alt="Avatar"
                            src={data.index == testimonials.length - 1 ? testimonials[0]['image']['src'] : testimonials[data.index + 1]['image']['src']}
                            sx={{ width: 60, height: 60 }}
                            component={motion.div}
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1.1, opacity: 1 }}
                            transition={{ type: 'spring', duration: 2, delay: 0.3 }}
                            viewport={{ once: true }}
                        />
                    </Box>

                </Stack>
            </Box>
        </Box>
    )
}

export default Testimonials