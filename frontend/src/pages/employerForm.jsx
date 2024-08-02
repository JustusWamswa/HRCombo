import React, { useState, useEffect } from 'react'
import { Box, Typography, Button, Grid, Autocomplete, TextField } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { Viewer } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { Worker } from '@react-pdf-viewer/core'
import { createJobPosting } from '../services/api'
import { useRequestStateStore } from '../stores/useRequestStateStore'
import { useUser } from '@clerk/clerk-react'

const industryOptions = [
  { title: 'Technology' },
  { title: 'Finance' },
  { title: 'Healthcare' },
]

const employmentOptions = [
  { title: 'Contract' },
  { title: 'Full-time' },
  { title: 'Part-time' },
]

const EmployerForm = () => {
  const { user } = useUser()
  const navigate = useNavigate()
  const defaultLayoutPluginInstance = defaultLayoutPlugin()
  const location = useLocation()
  const { file: initialFile, resume_pdf_id } = location.state || {}
  const [fileUrl, setFileUrl] = useState(null)
  const [industries, setIndustries] = useState([])
  const [myLocation, setMyLocation] = useState({ country: '', address: '' })
  const [jobPosting, setJobPosting] = useState({
    title: '',
    company: '',
    location: '',
    type_of_employment: null,
    lowest_monthly_salary_usd: '',
    highest_monthly_salary_usd: '',
    deadline: '',
    logo: null,
    job_pdf: resume_pdf_id || '',
  })
  const [errors, setErrors] = useState({
    title: false,
    company: false,
    location: false,
    type_of_employment: false,
    lowest_monthly_salary_usd: false,
    highest_monthly_salary_usd: false,
    deadline: false,
    logo: false,
    job_pdf: false,
    industries: false,
    employmentType: false,
    country: false,
    address: false,
  })
  const { setSuccess, setError, setLoading } = useRequestStateStore()

  useEffect(() => {
    if (initialFile) {
      const fileReader = new FileReader()
      fileReader.onload = () => {
        setFileUrl(fileReader.result)
      }
      fileReader.readAsDataURL(initialFile)
    }
  }, [initialFile])

  const handleFileChange = (e) => {
    setJobPosting({ ...jobPosting, logo: e.target.files[0] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Validate fields
    const newErrors = {
      title: jobPosting.title === '',
      company: jobPosting.company === '',
      location: jobPosting.location === '',
      type_of_employment: jobPosting.type_of_employment === null,
      lowest_monthly_salary_usd: jobPosting.lowest_monthly_salary_usd === '',
      highest_monthly_salary_usd: jobPosting.highest_monthly_salary_usd === '',
      deadline: jobPosting.deadline === '',
      logo: jobPosting.logo === null,
      job_pdf: jobPosting.job_pdf === '',
      industries: industries.length === 0,
    }
    setErrors(newErrors)

    if (!Object.values(newErrors).includes(true)) {
      const formData = new FormData()
      formData.append('title', jobPosting.title)
      formData.append('company', jobPosting.company)
      formData.append('location', jobPosting.location)
      formData.append('type_of_employment', jobPosting.type_of_employment.title)
      formData.append('lowest_monthly_salary_usd', jobPosting.lowest_monthly_salary_usd)
      formData.append('highest_monthly_salary_usd', jobPosting.highest_monthly_salary_usd)
      formData.append('deadline', jobPosting.deadline)
      formData.append('logo', jobPosting.logo)
      formData.append('job_pdf', jobPosting.job_pdf)
      formData.append('industries', industries.map(ind => ind.title).join(', '))

      
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

      setLoading(true)
      createJobPosting(formData)
        .then((res) => {
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
                  plugins={[defaultLayoutPluginInstance]}
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
            <Typography mb={3}>Details for card placement</Typography>
            <TextField
              value={jobPosting.title}
              onChange={(e) => setJobPosting({ ...jobPosting, title: e.target.value })}
              variant="outlined"
              label="Job Title"
              placeholder="Job Title"
              fullWidth
              sx={{ mb: 3 }}
              required
              error={errors.title}
              helperText={errors.title ? 'Job title is required' : ''}
              size='small'
            />
            <TextField
              value={jobPosting.company}
              onChange={(e) => setJobPosting({ ...jobPosting, company: e.target.value })}
              variant="outlined"
              label="Company"
              placeholder="Company"
              fullWidth
              sx={{ mb: 3 }}
              required
              error={errors.company}
              helperText={errors.company ? 'Company is required' : ''}
              size='small'
            />
            <TextField
              value={jobPosting.location}
              onChange={(e) => setJobPosting({ ...jobPosting, location: e.target.value })}
              variant="outlined"
              label="Job Location"
              placeholder="Job Location"
              fullWidth
              sx={{ mb: 3 }}
              required
              error={errors.location}
              helperText={errors.location ? 'Job location is required' : ''}
              size='small'
            />
            <TextField
              value={jobPosting.lowest_monthly_salary_usd}
              onChange={(e) => setJobPosting({ ...jobPosting, lowest_monthly_salary_usd: e.target.value })}
              variant="outlined"
              label="Lowest Monthly Salary (USD)"
              placeholder="Lowest Monthly Salary (USD)"
              type="number"
              fullWidth
              sx={{ mb: 3 }}
              required
              error={errors.lowest_monthly_salary_usd}
              helperText={errors.lowest_monthly_salary_usd ? 'Lowest monthly salary is required' : ''}
              size='small'
            />
            <TextField
              value={jobPosting.highest_monthly_salary_usd}
              onChange={(e) => setJobPosting({ ...jobPosting, highest_monthly_salary_usd: e.target.value })}
              variant="outlined"
              label="Highest Monthly Salary (USD)"
              placeholder="Highest Monthly Salary (USD)"
              type="number"
              fullWidth
              sx={{ mb: 3 }}
              required
              error={errors.highest_monthly_salary_usd}
              helperText={errors.highest_monthly_salary_usd ? 'Highest monthly salary is required' : ''}
              size='small'
            />
            <Autocomplete
              multiple
              options={industryOptions}
              getOptionLabel={(option) => option.title}
              value={industries}
              onChange={(event, newValue) => setIndustries(newValue)}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" label="Choose your industry" placeholder="Select industries" required error={errors.industries} helperText={errors.industries ? 'Industry is required' : ''}/>
              )}
              sx={{ mb: 3 }}
              size='small'
            />
            <Autocomplete
              options={employmentOptions}
              getOptionLabel={(option) => option.title}
              value={jobPosting.type_of_employment}
              onChange={(event, newValue) => setJobPosting({ ...jobPosting, type_of_employment: newValue })}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" label="Type of Employment" placeholder="Type of Employment" fullWidth required error={errors.type_of_employment} helperText={errors.type_of_employment ? 'Type of employment is required' : ''} />
              )}
              sx={{ mb: 3 }}
              size='small'
            />
            <Typography>Deadline</Typography>
            <TextField
              value={jobPosting.deadline}
              onChange={(e) => setJobPosting({ ...jobPosting, deadline: e.target.value })}
              variant="outlined"
              type="datetime-local"
              fullWidth
              sx={{ mb: 3 }}
              required
              error={errors.deadline}
              helperText={errors.deadline ? 'Deadline is required' : ''}
              size='small'
            />
            <Typography>Upload company logo</Typography>
            <TextField
              accept="image/*"
              id="logo-upload"
              type="file"
              onChange={handleFileChange}
              sx={{ mb: 3 }}
              fullWidth
              size='small'
              required
              error={errors.logo}
              helperText={errors.logo ? 'Logo is required' : ''}
            />
            {jobPosting.logo && (
              <Box mt={2}>
                <img
                  src={URL.createObjectURL(jobPosting.logo)}
                  alt="Logo Preview"
                  style={{ maxWidth: '100%', maxHeight: '150px' }}
                />
              </Box>
            )}
            <Button
              variant="contained"
              color="primary"
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

export default EmployerForm
