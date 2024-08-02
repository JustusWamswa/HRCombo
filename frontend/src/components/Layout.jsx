import React from 'react'
import Navbar from './Navbar'
import { Box } from '@mui/material'
import ScrollToTopButton from './ScrollToTopButton'
import SuccessAlert from './Alerts/SucessAlert'
import ErrorAlert from './Alerts/ErrorAlert'
import Loader from './Modals/Loader'

function Layout({ children }) {

  return (
    <Box minHeight={'100vh'} >
      <SuccessAlert />
      <ErrorAlert />
      <Loader />
      <Navbar children={children} />
      <ScrollToTopButton />
    </Box>
  )
}

export default Layout