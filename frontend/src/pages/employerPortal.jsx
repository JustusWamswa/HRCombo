import React from 'react'
import EmployerIntro from '../components/EmployerIntro'
import { Divider } from '@mui/material'
import UploadJD from '../components/UploadJD'


function EmployerPortal() {
  return (
    <>
      <EmployerIntro />
      <Divider sx={{width: '70%', mt: 12, mb: 2, mx: 'auto', bgcolor: 'gray'}}  />
      <UploadJD />
    </>
  )
}

export default EmployerPortal