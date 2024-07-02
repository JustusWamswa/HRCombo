import React from 'react'
import Title from './Title'
import { Box, Grid, Paper, Typography } from '@mui/material'
import Artificial from '../assets/artificial.png'
import Resume from '../assets/resumeWhite.png'
import Public from '../assets/public.png'
import Dashboard from '../assets/dashboard.png'
import { motion } from 'framer-motion'

function WhyChooseUs() {

    return (
        <Box bgcolor={'bglight.main'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} pb={5} >
            <Title text={"Why Choose Us"} />
            <Grid container spacing={2} width={'80%'} >
                <Grid
                    item
                    xs={6}
                    p={4}
                    component={motion.div}
                    initial={{ y: '5vh', opacity: 0 }}
                    transition={{ type: 'spring', duration: 1, delay: 0.1 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}

                >
                    <Paper elevation={5} sx={{ py: 5, px: 10, height: '100%', bgcolor: 'bgdark.main' }} >
                        <Box display={'flex'} justifyContent={'center'} width={'100%'}>
                            <Box
                                component="img"
                                sx={{ height: 35 }}
                                alt="icon"
                                src={Artificial}
                            />
                            <Typography color={'secondary'} fontWeight={'bold'} ml={3}>
                                AI-Powered Matching
                            </Typography>
                        </Box>
                        <Typography mt={3} textAlign={'justify'} >
                            Our advanced AI algorithms analyze candidate profiles and job descriptions to ensure precise matching,
                            connecting the right candidates with the right opportunities. This helps job seekers find roles that truly
                            fit their skills and aspirations while providing employers with a pool of highly qualified candidates.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid
                    item
                    xs={6}
                    p={4}
                    component={motion.div}
                    initial={{ y: '5vh', opacity: 0 }}
                    transition={{ type: 'spring', duration: 1, delay: 0.2 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <Paper elevation={5} sx={{ py: 5, px: 10, height: '100%', bgcolor: 'primary.main' }} >
                        <Box display={'flex'} justifyContent={'center'} width={'100%'}>
                            <Box
                                component="img"
                                sx={{ height: 35 }}
                                alt="icon"
                                src={Resume}
                            />
                            <Typography color={'white'} fontWeight={'bold'} ml={3}>
                                Seamless Application Process
                            </Typography>
                        </Box>
                        <Typography color={'white'} mt={3} textAlign={'justify'}>
                            We simplify the job application process with a user-friendly interface that allows candidates to apply for multiple jobs with a single click.
                            Employers can easily manage job postings, review applications, and communicate with potential hires, all in one place.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid
                    item
                    xs={6}
                    p={4}
                    component={motion.div}
                    initial={{ y: '5vh', opacity: 0 }}
                    transition={{ type: 'spring', duration: 1, delay: 0.2 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <Paper elevation={5} sx={{ py: 5, px: 10, height: '100%', bgcolor: 'secondary.main' }} >
                        <Box display={'flex'} justifyContent={'center'} width={'100%'}>
                            <Box
                                component="img"
                                sx={{ height: 35 }}
                                alt="icon"
                                src={Dashboard}
                            />
                            <Typography color={'white'} fontWeight={'bold'} ml={3}>
                                Data-Driven Insights
                            </Typography>
                        </Box>
                        <Typography color={'white'} mt={3} textAlign={'justify'}>
                            Our platform offers detailed analytics and insights into the recruitment process.
                            Employers can track key metrics such as application volume, time-to-hire, and candidate engagement.
                            Job seekers can monitor their application status and receive feedback to improve their chances of success.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid
                    item
                    xs={6}
                    p={4}
                    component={motion.div}
                    initial={{ y: '5vh', opacity: 0 }}
                    transition={{ type: 'spring', duration: 1, delay: 0.3 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <Paper elevation={5} sx={{ py: 5, px: 10, height: '100%', bgcolor: 'white' }} >
                        <Box display={'flex'} justifyContent={'center'} width={'100%'}>
                            <Box
                                component="img"
                                sx={{ height: 35 }}
                                alt="icon"
                                src={Public}
                            />
                            <Typography color={'secondary'} fontWeight={'bold'} ml={3}>
                                Support and Resources
                            </Typography>
                        </Box>
                        <Typography mt={3} textAlign={'justify'}>
                            We provide a wealth of resources to help both candidates and employers succeed.
                            From resume building tips and interview preparation guides for job seekers to best practices for writing job
                            descriptions and conducting interviews for employers, we offer the support needed to navigate the recruitment process.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default WhyChooseUs