import React from 'react'
import CandidateIntro from '../components/CandidateIntro'
import { Divider } from '@mui/material'

function CandidatePortal() {
  return (
    <>
      <CandidateIntro />
      <Divider sx={{width: '70%', mt: 15, mb: 2, mx: 'auto', bgcolor: 'gray'}}  />
    </>
  )
}

export default CandidatePortal