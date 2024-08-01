import React, { useState, useEffect } from 'react'
import { Box, Typography, Button, Grid, Autocomplete, TextField } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { Viewer } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { Worker } from '@react-pdf-viewer/core'

const industryOptions = [
  { title: 'Technology' },
  { title: 'Finance' },
  { title: 'Healthcare' },
  // Add more options as needed
]

const locationOptions = [
  { title: 'Hybrid' },
  { title: 'Remote' },
  { title: 'Onsite' },
  // Add more options as needed
]

const CandidateForm = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin()
  const location = useLocation()
  const { file: initialFile } = location.state || {}
  const [fileUrl, setFileUrl] = useState(null)
  const [industries, setIndustries] = useState([])
  const [preferredLocations, setPreferredLocations] = useState([])
  const [locationValue, setLocationValue] = useState(null)
  const [myLocation, setMyLocation] = useState({ country: '', address: '' })
  const [errors, setErrors] = useState({ industries: false, preferredLocations: false, country: false, address: false })

  useEffect(() => {
    if (initialFile) {
      const fileReader = new FileReader()
      fileReader.onload = () => {
        setFileUrl(fileReader.result)
      }
      fileReader.readAsDataURL(initialFile)
    }
  }, [initialFile])

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate fields
    const newErrors = {
      industries: industries.length === 0,
      preferredLocations: preferredLocations.length === 0,
      country: myLocation.country === '',
      address: myLocation.address === '',
    };
    setErrors(newErrors);

    if (!newErrors.industries && !newErrors.preferredLocations && !newErrors.country && !newErrors.address) {
      // setLoading(true)
      // createEnquiry(enquiry)
      //   .then((res) => {
      //     setLoading(false)
      //     setSuccess(true)
      //     setTimeout(() => {
      //       setSuccess(false)
      //     }, 3000)
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //     setLoading(false)
      //     setError(true)
      //     setTimeout(() => {
      //       setError(false)
      //     }, 3000)
      //   })
    }
  }

  return (
    <Box sx={{ p: 4 }} width={'80%'} mx={'auto'}>
      <Typography variant="h6" component="h1" gutterBottom mb={3}>
        Preview details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box width={'100%'} height={'100vh'} mb={20}>
            {fileUrl ? (
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer
                  fileUrl={fileUrl}
                  plugins={[
                    // Register plugins
                    defaultLayoutPluginInstance,
                  ]}
                />
              </Worker>
            ) : (
              <Typography variant="body2" color="error">
                No file selected
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box width={'70%'} pl={5}>
            <Typography mb={3}>Additional details</Typography>
            <Autocomplete
              multiple
              options={industryOptions}
              getOptionLabel={(option) => option.title}
              value={industries}
              onChange={(event, newValue) => setIndustries(newValue)}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" label="Choose your industry" placeholder="Select industries" />
              )}
              sx={{ mb: 3 }}
              required
              error={errors.industries}
              helperText={errors.industries ? 'Industry is required' : ''}
            />
            <Autocomplete
              multiple
              options={locationOptions}
              getOptionLabel={(option) => option.title}
              value={preferredLocations}
              onChange={(event, newValue) => setPreferredLocations(newValue)}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" label="Preferred Location of Work" placeholder="Select locations" />
              )}
              sx={{ mb: 3 }}
              required
              error={errors.preferredLocations}
              helperText={errors.preferredLocations ? 'Preferred Location of work is required' : ''}
            />
            <TextField
              value={myLocation.country}
              onChange={(e) => setMyLocation({ ...myLocation, country: e.target.value })}
              variant="outlined"
              label="Country of residence"
              placeholder="Country of residence"
              fullWidth
              sx={{ mb: 3 }}
              required
              error={errors.country}
              helperText={errors.country ? 'Country is required' : ''}
            />
            <TextField
              value={myLocation.address}
              onChange={(e) => setMyLocation({ ...myLocation, address: e.target.value })}
              variant="outlined"
              label="Address"
              placeholder="Address"
              fullWidth
              required
              error={errors.address}
              helperText={errors.address ? 'Address is required' : ''}
              sx={{ mb: 3 }}
            />
            <Button
              variant='contained'
              color='primary'
              sx={{ mt: 3, textTransform: 'capitalize', fontSize: '1rem', py: 1, width: '100%', bgcolor: 'primary.main', ":hover": { bgcolor: 'primary.dark' } }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CandidateForm
