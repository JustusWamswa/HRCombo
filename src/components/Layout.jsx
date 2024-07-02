import React from 'react'
import Navbar from './Navbar'
import { Box } from '@mui/material'

function Layout({ children }) {

  return (
    <Box minHeight={'100vh'} >
      <Navbar children={children} />
    </Box>
  )
}

export default Layout