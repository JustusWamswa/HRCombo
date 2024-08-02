import React from 'react'
import CandidateIntro from '../components/CandidateIntro'
import { Divider, Paper } from '@mui/material'
import UploadResume from '../components/UploadResume'
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react'
import { Box, Button, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import Underline from '../assets/underline.png'
import { useNavigate } from 'react-router-dom'


function CandidatePortal() {

  const navigate = useNavigate()

  return (
    <>
      <SignedIn>
        <CandidateIntro />
        <Divider sx={{ width: '70%', mt: 12, mb: 2, mx: 'auto', bgcolor: 'gray' }} />
        <UploadResume />
      </SignedIn>
      <SignedOut>
        <Box width={'70%'} px={5} mx={'auto'} pt={8} display={'flex'} textAlign={'justify'} mb={20}>
          <Box
            width={'50%'}
            component={motion.div}
            initial={{ scale: 0.9, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', duration: 2, delay: 0.1 }}
          >
            <Box display={'flex'} flexDirection={'column'} alignItems={'start'}>
              <Typography color={'secondary'} fontWeight={'bold'} variant='h2' fontSize={{ xs: 40, md: 60 }} textAlign={'left'}>
                Welcome to the Candidate Portal
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
              Unlock Your Future with Us!
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
              To access our exclusive candidate portal and take the first step towards your dream job, please sign in.
              Our portal offers personalized job matches, insightful career resources, and direct connections with top employers.
            </Typography>
            <SignInButton>
              <Button
                variant='contained'
                sx={{ paddingX: '2rem', textTransform: 'capitalize', borderRadius: 3, py: 2 }}
                component={motion.div}
                initial={{ y: '-3vh', opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', duration: 2, delay: 0.1 }}
              >
                Login/Register
              </Button>
            </SignInButton>
          </Box>
          <Box width={'100%'} height={'60vh'} pl={15} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'}>
            <Typography sx={{ textDecoration: 'underline' }}>Why Sign In/Up?</Typography>
            <Box display={'flex'} alignItems={'center'}>
              <Paper elevation={3} sx={{ minWidth: '1rem', height: '1rem', borderRadius: '50%', bgcolor: 'bglight.main' }} ></Paper>
              <Typography ml={3}>
                Personalized Job Matches: Get job recommendations tailored to your unique skills and preferences.
              </Typography>
            </Box>
            <Box display={'flex'} alignItems={'center'}>
              <Paper elevation={3} sx={{ minWidth: '1rem', height: '1rem', borderRadius: '50%', bgcolor: 'bgdark.main' }} ></Paper>
              <Typography ml={3}>
                Career Resources: Access a wealth of resources, including resume tips, interview guides, and industry insights.
              </Typography>
            </Box>
            <Box display={'flex'} alignItems={'center'}>
              <Paper elevation={3} sx={{ minWidth: '1rem', height: '1rem', borderRadius: '50%', bgcolor: 'primary.main' }} ></Paper>
              <Typography ml={3}>
                Direct Employer Connections: Connect directly with recruiters and hiring managers from leading companies.
              </Typography>
            </Box>
          </Box>
        </Box>
      </SignedOut>
    </>
  )
}

export default CandidatePortal