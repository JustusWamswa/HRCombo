import React, { useState } from 'react'
import { Container, Grid, Card, CardContent, Typography, Avatar, Button, Box, Stack, TextField, Divider } from '@mui/material'
import passion from '../assets/passion.jpg'
import Title from '../components/Title'
import { motion } from 'framer-motion'
import hero from '../assets/hero.png'
import { createMessage } from '../services/api'
import { useRequestStateStore } from '../stores/useRequestStateStore'
import Loader from '../components/Modals/Loader'
import SuccessAlert from '../components/Alerts/SucessAlert'
import ErrorAlert from '../components/Alerts/ErrorAlert'

const AboutUs = () => {

  const [enquiry, setEnquiry] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [errors, setErrors] = useState({ name: false, email: false, message: false })
  const { loading, success, error, setLoading, setSuccess, setError } = useRequestStateStore()

  const handleChange = (e) => {
    const { name, value } = e.target
    setEnquiry({ ...enquiry, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate fields
    const newErrors = {
      name: enquiry.name === '',
      email: enquiry.email === '',
      message: enquiry.message === '',
    };
    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      setLoading(true)
      createMessage(enquiry)
        .then((res) => {
          setLoading(false)
          setSuccess(true)
          setTimeout(() => {
            setSuccess(false)
          }, 3000)
        })
        .catch((err) => {
          console.log(err)
          setLoading(false)
          setError(true)
          setTimeout(() => {
            setError(false)
          }, 3000)
        })
    }
  }
  
  return (
    <Box sx={{}}>
      {loading && <Loader loading={loading} />}
      <Title text='Our Mission' />
      <Grid container spacing={8} sx={{ marginBottom: 8 }} width={'80%'} mx={'auto'}>
        <Grid item xs={12} md={6}>
          <Box bgcolor={'primary.main'} width={'100%'} height={'100%'} borderRadius={1} position={'relative'}>
            <Box sx={{
              width: '100%', height: '100%', borderRadius: 1, position: 'absolute', bottom: 10, left: 10,
              backgroundImage: `url(${passion})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
            }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            lineHeight={2}
            letterSpacing={0.5}
            textAlign={'justify'}
            component={motion.div}
            initial={{ scale: 0.9, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', duration: 2, delay: 0.1 }}>
            At TalentScout AI, our mission is to leverage the power of artificial intelligence to transform the talent
            scouting process. We aim to provide companies with the best tools to find and recruit top talent efficiently
            and effectively. <br /> <br />
            We believe that by harnessing advanced technologies, we can make the talent acquisition process more
            transparent, objective, and inclusive. Our goal is to empower businesses to make data-driven decisions and
            foster diverse and dynamic teams.
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: 6, marginBottom: 4 }} bgcolor={'bglight.main'} pb={14}>
        <Title text='Our Values' />
        <Grid container spacing={4} width={'80%'} mx={'auto'}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', bgcolor: 'bgdark.main' }}>
              <CardContent sx={{ p: 5 }}>
                <Typography color={'secondary'} fontWeight={'bold'} gutterBottom textAlign={'center'} mb={2}>
                  Innovation
                </Typography>
                <Typography variant="body1" textAlign={'center'}>
                  We are committed to continuous innovation in the field of AI and talent scouting. Our team works
                  tirelessly to develop cutting-edge solutions that meet the evolving needs of our clients.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', bgcolor: 'secondary.main' }}>
              <CardContent sx={{ p: 5 }}>
                <Typography color={'white'} fontWeight={'bold'} gutterBottom textAlign={'center'} mb={2}>
                  Integrity
                </Typography>
                <Typography variant="body1" color={'white'} textAlign={'center'}>
                  Integrity is at the core of everything we do. We uphold the highest standards of ethical conduct and
                  ensure that our solutions are fair, transparent, and unbiased.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: 'white', height: '100%' }}>
              <CardContent sx={{ p: 5 }}>
                <Typography color={'secondary'} fontWeight={'bold'} gutterBottom textAlign={'center'} mb={2}>
                  Excellence
                </Typography>
                <Typography variant="body1" textAlign={'center'}>
                  We strive for excellence in every aspect of our business. From our technology to our customer service,
                  we are dedicated to delivering the best possible experience to our clients.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ marginBottom: 4 }}>
        <Title text='Meet Our Team' />
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} width={'70%'} mx={'auto'}>
          <Avatar
            alt="Founder"
            src={hero}
            sx={{ width: 300, height: 300, border: '2px dashed lightgray' }}
            component={motion.div}
            initial={{ x: '3vw', y: '5vh', opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ type: 'spring', duration: 2, delay: 0.1 }}
          />
          <Box ml={10}>
            <Typography variant="h6" gutterBottom>
              Justus Wamswa Chemirmir
            </Typography>
            <Typography variant="body2" color="textSecondary">
              CEO & Founder
            </Typography>
            <Typography
              mt={3}
              lineHeight={2}
              letterSpacing={0.5}
              textAlign={'justify'}
              component={motion.div}
              initial={{ scale: 0.9, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', duration: 2, delay: 0.1 }}
            >
              A passionate and innovative software engineer using AI to solve
              complex problems. He studies BSc(Hons) in Computing at the African Leadership
              College in partnership with Glasgow Caledonian University and has a proven track record in developing
              efficient software solutions.
              Proficient in a range of technologies including Python, Java, JavaScript, React, Node.js, and Django,
              Justus is skilled in both frontend and backend development, as well as cloud deployment.
              His career is marked by a commitment to continuous learning, teamwork, and effective communication,
              with additional interests in AI, cloud systems, and social impact initiatives.
            </Typography>
          </Box>
        </Stack>
      </Box>

      <Divider sx={{ width: '70%', mt: 8, mx: 'auto', bgcolor: 'gray' }} />

      <Box sx={{ marginBottom: 8 }}>
        <Title text='Our Story' />
        <Typography
          width={'70%'}
          mx={'auto'}
          mt={3}
          lineHeight={2}
          letterSpacing={0.5}
          textAlign={'justify'}
          component={motion.div}
          initial={{ scale: 0.9, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', duration: 2, delay: 0.1 }}
        >
          HRCombo was founded in 2024 by a CEO who saw the potential of AI in revolutionizing
          the talent scouting industry. What started as a small project is now offering a suite of AI-driven tools
          that help businesses find the right talent quickly and efficiently.
          This journey has been driven by a passion for innovation and a commitment to excellence. It is with excitement that we
          continue pushing the boundaries of what's possible and helping our clients achieve their goals.
        </Typography>
      </Box>

      <Box sx={{ marginTop: 4 }} bgcolor={'bgdark.main'} pb={5}>
        <Title text='Reach Out' />
        <Typography
          width={'70%'}
          mx={'auto'}
          lineHeight={2}
          letterSpacing={0.5}
          textAlign={'center'}
          component={motion.div}
          initial={{ scale: 0.9, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', duration: 2, delay: 0.1 }}
        >
          For any queries, kindly fill in the form below. We are also always looking for talented and passionate individuals to join our team. If you are excited about the
          future of AI and want to be part of a dynamic and innovative company, we would love to hear from you.
        </Typography>
        <Box mx={'auto'} width={'40%'} my={10} position={'relative'} bgcolor={'secondary.main'} color={'white'} minHeight={'80vh'} p={5}>
          {success && <SuccessAlert message={'Your message has been sent!'} />}
          {error && <ErrorAlert message={'Your message has not been sent!'} />}
          <Typography variant='h4' fontSize={'1.5rem'} mb={3}>
            Contact Us
          </Typography>
          <Typography mt={5}>Name</Typography>
          <TextField
            required
            error={errors.name}
            helperText={errors.name ? 'Name is required' : ''}
            id="outlined-basic"
            label=""
            variant="outlined"
            size='small'
            sx={{ bgcolor: 'white' }} InputProps={{ sx: { borderRadius: 0 } }}
            fullWidth
            placeholder='Enter name'
            value={enquiry?.name}
            name='name'
            onChange={handleChange}
          />
          <Typography mt={3}>Email</Typography>
          <TextField id="outlined-basic" label="" variant="outlined" size='small' sx={{ bgcolor: 'white' }} InputProps={{ sx: { borderRadius: 0 } }} fullWidth placeholder='Enter email'
            value={enquiry?.email}
            name='email'
            onChange={handleChange}
            type='email'
            required
            error={errors.email}
            helperText={errors.email ? 'Email is required' : ''}
          />
          <Typography mt={3} >Message</Typography>
          <TextField id="outlined-basic" label="" variant="outlined" size='small' sx={{ bgcolor: 'white' }} InputProps={{ sx: { borderRadius: 0 } }} fullWidth placeholder='Enter message'
            value={enquiry?.message}
            name='message'
            onChange={handleChange}
            required
            error={errors.message}
            helperText={errors.message ? 'Message is required' : ''}
            multiline rows={5} />
          <Button variant='contained' sx={{ paddingX: '3rem', textTransform: 'capitalize', fontSize: '1rem', py: 1, width: '100%', mt: 5, bgcolor: 'primary.main', ":hover": { bgcolor: 'primary.dark' } }}
            onClick={handleSubmit}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default AboutUs
