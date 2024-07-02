import React from 'react'
import { Avatar, Box, Button, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Underline from '../assets/underline.png'
import { useNavStore } from '../stores/useNavStore'
import Avatar1 from '../assets/avatar1.webp'
import Avatar2 from '../assets/avatar2.webp'
import Avatar3 from '../assets/avatar3.webp'
import Avatar4 from '../assets/avatar4.webp'
import Avatar5 from '../assets/avatar5.webp'
import { motion } from 'framer-motion'

function Hero() {

    const navigate = useNavigate()
    const { setNavValue } = useNavStore()

    const handleNavigate = (url, value) => {
        navigate(url)
        setNavValue(value)
    }

    return (
        <Box width={'100%'} minHeight={'80vh'} sx={{ position: 'relative' }} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <Avatar
                alt="Avatar1"
                src={Avatar1}
                sx={{ position: 'absolute', top: '30%', left: '15%' }}
                component={motion.div}
                initial={{ x: '3vw', y: '5vh', opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ type: 'spring', duration: 2, delay: 0.1 }}
            />
            <Avatar
                alt="Avatar2"
                src={Avatar2}
                sx={{ position: 'absolute', top: '60%', left: '15%', width: 70, height: 70 }}
                component={motion.div}
                initial={{ x: '3vw', y: '-5vh', opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ type: 'spring', duration: 2, delay: 0.1 }}
            />
            <Avatar
                alt="Avatar3"
                src={Avatar3}
                sx={{ position: 'absolute', top: '10%', right: '25%' }}
                component={motion.div}
                initial={{ x: '-3vw', y: '5vh', opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ type: 'spring', duration: 2, delay: 0.1 }}
            />
            <Avatar
                alt="Avatar4"
                src={Avatar4}
                sx={{ position: 'absolute', top: '38%', right: '15%', width: 70, height: 70 }}
                component={motion.div}
                initial={{ x: '-3vw', opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', duration: 2, delay: 0.1 }}
            />
            <Avatar
                alt="Avatar5"
                src={Avatar5}
                sx={{ position: 'absolute', top: '60%', right: '22%' }}
                component={motion.div}
                initial={{ x: '-3vw', y: '-5vh', opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ type: 'spring', duration: 2, delay: 0.1 }}
            />
            <Avatar
                sx={{ position: 'absolute', top: '50%', left: '22%', width: 25, height: 25, bgcolor: 'primary.main', color: 'primary.main' }}
                component={motion.div}
                initial={{ x: '1vw', y: '-2vh', opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ type: 'spring', duration: 2, delay: 0.1 }}
            >
                N
            </Avatar>
            <Avatar
                sx={{ position: 'absolute', top: '10%', left: '35%', width: 15, height: 15, bgcolor: 'bgdark.main', color: 'bgdark.main' }}
                component={motion.div}
                initial={{ y: '2vh', opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', duration: 2, delay: 0.1 }}
            >
                N
            </Avatar>
            <Avatar
                sx={{ position: 'absolute', top: '20%', right: '22%', width: 25, height: 25, bgcolor: 'bglight.main', color: 'bglight.main' }}
                component={motion.div}
                initial={{ x: '-1vw', y: '2vh', opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ type: 'spring', duration: 2, delay: 0.1 }}
            >
                N
            </Avatar>
            <Box
                component={motion.div}
                initial={{ scale: 0.9, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', duration: 2, delay: 0.1 }}
            >
                {/* <Typography color={'white'} fontWeight={'bold'} variant='h2' fontSize={{ xs: 40, md: 60 }}>Smart</Typography> */}
                <Typography color={'secondary'} fontWeight={'bold'} textAlign={'center'} variant='h2' fontSize={{ xs: 40, md: 60 }} width={'60%'} mx={'auto'}>
                    We solve human resource problems with
                </Typography>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                    <Typography color={'secondary'} fontWeight={'bold'} textAlign={'center'} variant='h2' fontSize={{ xs: 40, md: 60 }} width={'50%'} mx={'auto'}>
                        technology
                    </Typography>
                    <Box
                        component="img"
                        sx={{ height: 25 }}
                        alt="Underline"
                        src={Underline}
                        pl={30}
                    />
                </Box>
            </Box>
            <Typography
                width={{ xs: '80%', md: '40%' }}
                textAlign={'center'}
                mt={5}
                variant='h6'
                component={motion.div}
                initial={{ scale: 0.9, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', duration: 2, delay: 0.1 }}
            >
                "Connecting top talent with leading companies"
            </Typography>
            <Stack
                direction={'row'}
                spacing={5}
                mt={8}
                component={motion.div}
                initial={{ y: '-3vh', opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', duration: 2, delay: 0.1 }}
            >
                <Button variant='outlined' color='secondary' sx={{ paddingX: 3, paddingY: 2, textTransform: 'capitalize', boxShadow: 2, borderRadius: 3, minWidth: 200 }} onClick={() => handleNavigate('/candidateportal', 3)}> Looking for a job?</Button>
                <Button variant='outlined' color='secondary' sx={{ paddingX: 3, paddingY: 2, textTransform: 'capitalize', boxShadow: 2, borderRadius: 3, minWidth: 200 }} onClick={() => handleNavigate('/employerportal', 4)}> Want to hire?</Button>
            </Stack>
        </Box>
    )
}

export default Hero