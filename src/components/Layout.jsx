import React from 'react'
import Navbar from './Navbar'
import { Box } from '@mui/material'
import ScrollToTopButton from './ScrollToTopButton'

function Layout({ children }) {

  return (
    <Box minHeight={'100vh'} >
      <Navbar children={children} />
      <ScrollToTopButton />
    </Box>
  )
}

export default Layout