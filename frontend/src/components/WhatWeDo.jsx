import { Avatar, Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import Title from './Title'
import { motion } from 'framer-motion'
import Avatar8 from '../assets/avatar8.jpg'
import Avatar7 from '../assets/avatar7.jpg'
import Avatar9 from '../assets/avatar9.jpg'
import Avatar10 from '../assets/avatar10.jpg'
import { useNavigate } from 'react-router-dom'
import { useNavStore } from '../stores/useNavStore'

function WhatWeDo() {

    const navigate = useNavigate()
    const { setNavValue } = useNavStore()

    const handleNavigate = (url, value) => {
        navigate(url)
        setNavValue(value)
    }

    return (
        <Box width={'80%'} mx={'auto'}>
            <Title text={"What We Do"} />
            <Stack direction={'row'}>
                <Box width={'80%'} minHeight={'60vh'} position={'relative'}>
                    <Avatar
                        alt="Avatar8"
                        src={Avatar8}
                        sx={{ position: 'absolute', top: '10%', left: '20%', width: 200, height: 200 }}
                        component={motion.div}
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1.1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', duration: 2, delay: 0.1 }}
                    />
                    <Avatar
                        alt="Avatar10"
                        src={Avatar10}
                        sx={{ position: 'absolute', bottom: '8%', right: '10%', width: 200, height: 200 }}
                        component={motion.div}
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1.1, opacity: 1 }}
                        transition={{ type: 'spring', duration: 2, delay: 0.2 }}
                        viewport={{ once: true }}
                    />
                    <Avatar
                        alt="Avatar9"
                        src={Avatar9}
                        sx={{ position: 'absolute', top: '15%', right: '20%', width: 100, height: 100 }}
                        component={motion.div}
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1.1, opacity: 1 }}
                        transition={{ type: 'spring', duration: 2, delay: 0.3 }}
                        viewport={{ once: true }}
                    />
                    <Avatar
                        alt="Avatar7"
                        src={Avatar7}
                        sx={{ position: 'absolute', bottom: '8%', left: '22%', width: 130, height: 130 }}
                        component={motion.div}
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1.1, opacity: 1 }}
                        transition={{ type: 'spring', duration: 2, delay: 0.4 }}
                        viewport={{ once: true }}
                    />
                </Box>
                <Box width={'80%'} px={5} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
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
                        We are a leading recruitment platform dedicated to connecting top talent with great companies.
                        Our mission is to make the job search and hiring process as efficient and effective as possible
                        through the power of AI and machine learning. <br /> <br />
                        We are committed to continuous improvement and innovation. Our team is constantly working on new
                        features and enhancements to make our platform even more effective and user-friendly.
                        Join us on this journey and experience a smarter, more efficient way to connect talent with opportunity.
                    </Typography>
                    <Button
                        variant='contained'
                        sx={{ paddingX: 3, paddingY: 2, textTransform: 'capitalize', boxShadow: 2, borderRadius: 3, minWidth: 200, width: '20%', mb: 5 }}
                        onClick={() => handleNavigate('/aboutus', 1)}
                        component={motion.div}
                        initial={{ y: '3vh', opacity: 0 }}
                        viewport={{ once: true }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', duration: 1, delay: 0.1 }}
                    > Learn more</Button>
                </Box>
            </Stack>
        </Box>
    )
}

export default WhatWeDo