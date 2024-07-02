import { Box } from '@mui/material'
import React from 'react'

function BgPlaceholder() {
  return (
    <Box width={'50%' } display={{xs:'none', lg:'block'}} height={'100vh'} sx={{ backgroundColor: 'bgdark.main', borderTopLeftRadius: 80, borderBottomLeftRadius: 80 }}></Box>
  )
}

export default BgPlaceholder