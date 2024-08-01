import { Avatar, Box, Button, Grid, IconButton, Link, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import rlogo1 from '../assets/rlogo1.png'
import rlogo2 from '../assets/rlogo2.png'
import rlogo3 from '../assets/rlogo3.png'
import rlogo4 from '../assets/rlogo4.png'
import rlogo5 from '../assets/rlogo5.png'
import rlogo6 from '../assets/rlogo6.png'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import { useNavigate } from 'react-router-dom'
import { useNavStore } from '../stores/useNavStore'
import {motion} from 'framer-motion'
import Title from '../components/Title'

const jobs = [
  {
    title: "Marketing Manager",
    organization: "Bright Horizons Media",
    logo: { src: rlogo2 },
    type: "Full-Time",
    location: "New York, NY",
    lowestMonthlySalaryPayableInUSD: 6900,
    highestMonthlySalaryPayableInUSD: 7500,
    deadline: "August 15, 2024"
  },
  {
    title: "Senior Software Developer",
    organization: "Innovatech Solutions",
    logo: { src: rlogo1 },
    type: "Full-Time",
    location: "San Francisco, CA",
    lowestMonthlySalaryPayableInUSD: 6000,
    highestMonthlySalaryPayableInUSD: 7000,
    deadline: "July 31, 2024"
  },
  {
    title: "Data Analyst",
    organization: "DataWorks Corp",
    logo: { src: rlogo5 },
    type: "Full-Time",
    location: "Austin, TX",
    lowestMonthlySalaryPayableInUSD: 5700,
    highestMonthlySalaryPayableInUSD: 6000,
    deadline: "June 30, 2024"
  },
  {
    title: "Graphic Designer",
    organization: "Creative Minds Studio",
    logo: { src: rlogo3 },
    type: "Part-Time",
    location: "Remote",
    lowestMonthlySalaryPayableInUSD: 1500,
    highestMonthlySalaryPayableInUSD: 1800,
    deadline: "July 15, 2024"
  },
  {
    title: "Project Manager",
    organization: "Apex Construction",
    logo: { src: rlogo6 },
    type: "Full-Time",
    location: "Seattle, WA",
    lowestMonthlySalaryPayableInUSD: 7700,
    highestMonthlySalaryPayableInUSD: 8000,
    deadline: "July 20, 2024"
  },
  {
    title: "Customer Support Specialist",
    organization: "HelpDesk Pro Services",
    logo: { src: rlogo4 },
    type: "Full-Time",
    location: "Chicago, IL",
    lowestMonthlySalaryPayableInUSD: 3300,
    highestMonthlySalaryPayableInUSD: 3800,
    deadline: "August 1, 2024"
  },
  {
    title: "Marketing Manager",
    organization: "Bright Horizons Media",
    logo: { src: rlogo2 },
    type: "Full-Time",
    location: "New York, NY",
    lowestMonthlySalaryPayableInUSD: 6900,
    highestMonthlySalaryPayableInUSD: 7500,
    deadline: "August 15, 2024"
  },
  {
    title: "Senior Software Developer",
    organization: "Innovatech Solutions",
    logo: { src: rlogo1 },
    type: "Full-Time",
    location: "San Francisco, CA",
    lowestMonthlySalaryPayableInUSD: 6000,
    highestMonthlySalaryPayableInUSD: 7000,
    deadline: "July 31, 2024"
  },
  {
    title: "Data Analyst",
    organization: "DataWorks Corp",
    logo: { src: rlogo5 },
    type: "Full-Time",
    location: "Austin, TX",
    lowestMonthlySalaryPayableInUSD: 5700,
    highestMonthlySalaryPayableInUSD: 6000,
    deadline: "June 30, 2024"
  },
  {
    title: "Graphic Designer",
    organization: "Creative Minds Studio",
    logo: { src: rlogo3 },
    type: "Part-Time",
    location: "Remote",
    lowestMonthlySalaryPayableInUSD: 1500,
    highestMonthlySalaryPayableInUSD: 1800,
    deadline: "July 15, 2024"
  },
  {
    title: "Project Manager",
    organization: "Apex Construction",
    logo: { src: rlogo6 },
    type: "Full-Time",
    location: "Seattle, WA",
    lowestMonthlySalaryPayableInUSD: 7700,
    highestMonthlySalaryPayableInUSD: 8000,
    deadline: "July 20, 2024"
  },
  {
    title: "Customer Support Specialist",
    organization: "HelpDesk Pro Services",
    logo: { src: rlogo4 },
    type: "Full-Time",
    location: "Chicago, IL",
    lowestMonthlySalaryPayableInUSD: 3300,
    highestMonthlySalaryPayableInUSD: 3800,
    deadline: "August 1, 2024"
  },
  {
    title: "Marketing Manager",
    organization: "Bright Horizons Media",
    logo: { src: rlogo2 },
    type: "Full-Time",
    location: "New York, NY",
    lowestMonthlySalaryPayableInUSD: 6900,
    highestMonthlySalaryPayableInUSD: 7500,
    deadline: "August 15, 2024"
  },
  {
    title: "Senior Software Developer",
    organization: "Innovatech Solutions",
    logo: { src: rlogo1 },
    type: "Full-Time",
    location: "San Francisco, CA",
    lowestMonthlySalaryPayableInUSD: 6000,
    highestMonthlySalaryPayableInUSD: 7000,
    deadline: "July 31, 2024"
  },
  {
    title: "Data Analyst",
    organization: "DataWorks Corp",
    logo: { src: rlogo5 },
    type: "Full-Time",
    location: "Austin, TX",
    lowestMonthlySalaryPayableInUSD: 5700,
    highestMonthlySalaryPayableInUSD: 6000,
    deadline: "June 30, 2024"
  },
  {
    title: "Graphic Designer",
    organization: "Creative Minds Studio",
    logo: { src: rlogo3 },
    type: "Part-Time",
    location: "Remote",
    lowestMonthlySalaryPayableInUSD: 1500,
    highestMonthlySalaryPayableInUSD: 1800,
    deadline: "July 15, 2024"
  },
  {
    title: "Project Manager",
    organization: "Apex Construction",
    logo: { src: rlogo6 },
    type: "Full-Time",
    location: "Seattle, WA",
    lowestMonthlySalaryPayableInUSD: 7700,
    highestMonthlySalaryPayableInUSD: 8000,
    deadline: "July 20, 2024"
  },
  {
    title: "Customer Support Specialist",
    organization: "HelpDesk Pro Services",
    logo: { src: rlogo4 },
    type: "Full-Time",
    location: "Chicago, IL",
    lowestMonthlySalaryPayableInUSD: 3300,
    highestMonthlySalaryPayableInUSD: 3800,
    deadline: "August 1, 2024"
  },
]

function JobListings() {

  const navigate= useNavigate()

  return (
    <Box my={5}>
      <Box width={'80%'} mx={'auto'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
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
                onClick={() => navigate('/joblistings/87358943575923')}
              >
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                  <Avatar alt="logo" src={job.logo.src} sx={{ width: 60, height: 60 }} />
                  <IconButton sx={{ width: 50, height: 50 }}>
                    <BookmarkBorderOutlinedIcon />
                  </IconButton>
                </Stack>
                <Typography color={'secondary'} fontWeight={'bold'} mt={2}>{job.title}</Typography>
                <Typography color={'gray'} fontWeight={'light'}>{job.organization}</Typography>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} mt={2}>
                  <Typography bgcolor={'bgdark.main'} borderRadius={5} px={3} py={1}>{job.type}</Typography>
                  <Typography bgcolor={'bglight.main'} borderRadius={5} px={3} py={1}>{job.location}</Typography>
                </Stack>
                <Typography bgcolor={'bglight.main'} borderRadius={5} px={3} py={1} mt={2}>
                  ${job.lowestMonthlySalaryPayableInUSD} - ${job.highestMonthlySalaryPayableInUSD}/month
                </Typography>
                <Typography px={3} py={1} mt={2}>Deadline: {job.deadline}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        {/* <Button variant='text' sx={{ mt: 7, fontSize: '1.1rem', textDecoration: 'underline', textTransform: 'capitalize', px: 4 }} onClick={() => handleNavigate('/joblistings', 2)}>See all jobs</Button> */}
      </Box>
    </Box>
  )
}

export default JobListings