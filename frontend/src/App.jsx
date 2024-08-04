import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Home from './pages/home'
import Login from './pages/login'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Signup from './pages/signup'
import ForgotPassword from './pages/forgotPassword'
import ResetPassword from './pages/resetPassword'
import Dashboard from './pages/dashboard'
import Layout from './components/Layout'
import PageNotFound from './pages/pageNotFound'
import AboutUs from './pages/aboutUs'
import JobListings from './pages/jobListings'
import CandidatePortal from './pages/candidatePortal'
import EmployerPortal from './pages/employerPortal'
import Profile from './pages/profile'
import CandidateForm from './pages/candidateForm'
import EmployerForm from './pages/employerForm'
import SingleJob from './pages/singleJob'
import Scout from './pages/scout'


const myTheme = createTheme({
  palette: {
    primary: {
      main: '#B175FF'
    },
    secondary: {
      main: '#210D41',
      contrastText: '#fff'
    },
    bgdark: {
      main: '#C7B8DD'
    },
    bglight: {
      main: '#FBF1EF'
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Noto Sans"',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
})

function App() {
 

  return (
    <ThemeProvider theme={myTheme}>
      <Layout>
        <GoogleOAuthProvider clientId="<your_client_id>">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />
            <Route path='/resetpassword' element={<ResetPassword />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/joblistings' element={<JobListings />} />
            <Route path='/joblistings/:id' element={<SingleJob />} />
            <Route path='/candidateportal' element={<CandidatePortal />} />
            <Route path='/employerportal' element={<EmployerPortal />} />
            <Route path='/candidateportal/profile' element={<Profile />} />
            <Route path='/candidateportal/candidateform' element={<CandidateForm />} />
            <Route path='/employerportal/employerform' element={<EmployerForm />} />
            <Route path='/employerportal/scout' element={<Scout />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </GoogleOAuthProvider>
      </Layout>
    </ThemeProvider>
  )
}

export default App
