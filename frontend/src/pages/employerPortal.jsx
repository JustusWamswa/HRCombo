import React from 'react'
import EmployerIntro from '../components/EmployerIntro'
import { Box, Button, Divider, Paper, Typography } from '@mui/material'
import UploadJD from '../components/UploadJD'
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react'
import { motion } from 'framer-motion'
import Underline from '../assets/underline.png'
import ActiveJobPostings from '../components/ActiveJobPostings'


function EmployerPortal() {
  return (
    <>
      <SignedIn>
        <EmployerIntro />
        <Divider sx={{ width: '70%', mt: 12, mb: 2, mx: 'auto', bgcolor: 'gray' }} />
        <UploadJD />
        <ActiveJobPostings />
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
                Welcome to the Employer Portal
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
              Unlock Exclusive Employer Features!
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
              To access the Employer Portal and take full advantage of our premium tools and resources,
              please sign in. By logging in, you'll gain access to powerful features tailored to help you streamline your
              hiring process, manage job postings, and connect with top talent effortlessly.
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
                Access to Top Talent: Gain exclusive access to a pool of highly qualified candidates who are actively seeking new opportunities.
              </Typography>
            </Box>
            <Box display={'flex'} alignItems={'center'}>
              <Paper elevation={3} sx={{ minWidth: '1rem', height: '1rem', borderRadius: '50%', bgcolor: 'bgdark.main' }} ></Paper>
              <Typography ml={3}>
                Efficient Job Management: Easily post and manage job listings, track applications, and communicate with candidates through a centralized platform.
              </Typography>
            </Box>
            <Box display={'flex'} alignItems={'center'}>
              <Paper elevation={3} sx={{ minWidth: '1rem', height: '1rem', borderRadius: '50%', bgcolor: 'primary.main' }} ></Paper>
              <Typography ml={3}>
                Enhanced Recruitment Insights: Utilize advanced analytics and reporting tools to gain valuable insights into your recruitment efforts.
              </Typography>
            </Box>
          </Box>
        </Box>
      </SignedOut>
    </>
  )
}

export default EmployerPortal