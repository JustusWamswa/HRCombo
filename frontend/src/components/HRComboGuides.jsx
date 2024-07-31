import React from 'react'
import Title from './Title'
import { Box, Paper, Stack, Typography } from '@mui/material'
import article2 from '../assets/article2.jpg'
import article3 from '../assets/article3.jpg'
import article4 from '../assets/article4.jpg'
import article5 from '../assets/article5.jpg'
import { motion } from 'framer-motion'

const articles = [
    {
        topic: "Employer User Guide",
        title: "Enhancing Your Hiring Process: A Complete Guide for Employers",
        description: "",
        image: { src: article2 },
        createdAt: "June 12, 2024"
    },
    {
        topic: "Candidate Resources",
        title: "Creating a Winning Resume: Tips and Tricks for Job Seekers",
        description: "",
        image: { src: article3 },
        createdAt: "June 06, 2024"
    },
    {
        topic: "Employer Resources",
        title: "Leveraging AI in Recruitment: How Employers Can Benefit from Our Platform",
        description: "",
        image: { src: article4 },
        createdAt: "June 01, 2024"
    }
]

function HRComboGuides() {
    return (
        <Box width={'80%'} mx={'auto'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Title text={"HRCombo Guides"} />
            <Stack direction={'row'} sx={{ px: 10 }} spacing={5}>
                <Paper
                    elevation={2}
                    sx={{ overflow: 'hidden', borderRadius: 3, cursor: 'pointer', transition: 'transform 0.2s ease-in-out', ":hover": { transform: 'scale(1.01)' }, height: '60vh', width: '60%', pb: 5 }}
                    component={motion.div}
                    initial={{ y: '5vh', opacity: 0 }}
                    transition={{ type: 'spring', duration: 1, delay: 0.2 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <Box bgcolor={'gray'} height={'60%'}>
                        <Box width={'100%'} height={'100%'} sx={{ backgroundImage: `url(${article5})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></Box>
                    </Box>
                    <Box px={4} py={1}>
                        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} my={2}>
                            <Typography color={'primary'} fontWeight={'bold'}>Candidate User Guide</Typography>
                            <Typography color={'gray'} fontWeight={'light'}>June 10, 2024</Typography>
                        </Stack>
                        <Typography fontWeight={'bold'} mb={1}>Maximizing Your Job Search: A Step-by-Step Guide for Candidates</Typography>
                        <Typography >Searching for a job can be daunting, but with the right tools and strategies, you can streamline the process and increase your chances of success. This guide provides a comprehe...</Typography>
                    </Box>
                </Paper>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                    {articles.map((article) => (
                        <Paper
                            elevation={2}
                            sx={{ overflow: 'hidden', borderRadius: 3, cursor: 'pointer', transition: 'transform 0.2s ease-in-out', ":hover": { transform: 'scale(1.01)' }, height: '18vh', display: 'flex' }}
                            component={motion.div}
                            initial={{ y: '5vh', opacity: 0 }}
                            transition={{ type: 'spring', duration: 1, delay: 0.2 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <Box bgcolor={'gray'} height={'100%'} width={'30%'}>
                                <Box width={'100%'} height={'100%'} sx={{ backgroundImage: `url(${article.image.src})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></Box>
                            </Box>
                            <Box width={'70%'} py={2} px={3}>
                                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                    <Typography color={'primary'} fontWeight={'bold'}>{article.topic}</Typography>
                                    <Typography color={'gray'} fontWeight={'light'}>{article.createdAt}</Typography>
                                </Stack>
                                <Typography fontWeight={'bold'} mt={2}>{article.title}</Typography>
                            </Box>
                        </Paper>
                    ))}
                </Box>
            </Stack>
        </Box>
    )
}

export default HRComboGuides