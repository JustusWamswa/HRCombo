import React from 'react'
import CandidateIntro from '../components/CandidateIntro'
import { Divider } from '@mui/material'
import UploadResume from '../components/UploadResume'

function CandidatePortal() {
  return (
    <>
      <CandidateIntro />
      <Divider sx={{width: '70%', mt: 12, mb: 2, mx: 'auto', bgcolor: 'gray'}}  />
      <UploadResume />
    </>
  )
}

export default CandidatePortal