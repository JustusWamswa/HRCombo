import React, { useEffect, useState } from 'react'
import Title from './Title'
import { Avatar, Box, Button, Grid, IconButton, Paper, Stack, Typography } from '@mui/material'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import { useRequestStateStore } from '../stores/useRequestStateStore'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import { getUserJobPDF } from '../services/api'
import { motion } from 'framer-motion'


function ActiveJobPostings() {

    const [jobs, setJobs] = useState([])
    const { setSuccess, setError, setLoading } = useRequestStateStore()
    const navigate = useNavigate()
    const { user } = useUser()
    const url = import.meta.env.VITE_MEDIA_URL

    console.log(jobs)
    useEffect(() => {
        setLoading(true)
        getUserJobPDF(user?.id)
            .then((res) => {
                setJobs(res.data.data)
                setLoading(false)
                setSuccess(true)
                setTimeout(() => {
                    setSuccess(false)
                }, 3000)
                navigate('/employerportal')
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
                setError(true)
                setTimeout(() => {
                    setError(false)
                }, 3000)
            })
    }, [])
    return (
        <Box my={5}>
            <Title text={'Active Job Postings'} />
            <Box width={'80%'} mx={'auto'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                {jobs?.length > 0 ? 
                <Grid container spacing={4} sx={{ px: 10 }}>
                    {jobs.map((job) => (
                        <Grid item xs={4}>
                            <Paper
                                elevation={2}
                                sx={{ p: 3, borderRadius: 3, cursor: 'pointer', transition: 'transform 0.2s ease-in-out', ":hover": { transform: 'scale(1.02)' } }}
                                component={motion.div}
                                initial={{ y: '5vh', opacity: 0 }}
                                transition={{ type: 'spring', duration: 1, delay: 0.2 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                onClick={() => navigate('/employerportal/scout', { state: { file: `${url}${job?.file}` } })}
                            >
                                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                    <Avatar alt="logo" src={`${url}${job?.job_postings[0]?.logo}`} sx={{ width: 60, height: 60 }} />
                                    <IconButton sx={{ width: 50, height: 50 }}>
                                        <BookmarkBorderOutlinedIcon />
                                    </IconButton>
                                </Stack>
                                <Typography color={'secondary'} fontWeight={'bold'} mt={2}>{job?.job_postings[0]?.title}</Typography>
                                <Typography color={'gray'} fontWeight={'light'}>{job?.job_postings[0]?.company}</Typography>
                                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} mt={2}>
                                    <Typography bgcolor={'bgdark.main'} borderRadius={5} px={3} py={1}>{job?.job_postings[0]?.type_of_employment}</Typography>
                                    <Typography bgcolor={'bglight.main'} borderRadius={5} px={3} py={1}>{job?.job_postings[0]?.location}</Typography>
                                </Stack>
                                <Typography bgcolor={'bglight.main'} borderRadius={5} px={3} py={1} mt={2}>
                                    ${Math.trunc(job?.job_postings[0]?.lowest_monthly_salary_usd)} - ${Math.trunc(job?.job_postings[0]?.highest_monthly_salary_usd)}/month
                                </Typography>
                                <Typography px={3} py={1} mt={2}>
                                    Deadline: {(new Date(job?.job_postings[0]?.deadline)).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
                : 
                <Box height={'10vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Typography>No jobs posted yet!</Typography>
                </Box>
                }
                {/* <Button variant='text' sx={{ mt: 7, fontSize: '1.1rem', textDecoration: 'underline', textTransform: 'capitalize', px: 4 }} onClick={() => handleNavigate('/joblistings', 2)}>See all jobs</Button> */}
            </Box>
        </Box>
    )
}

export default ActiveJobPostings