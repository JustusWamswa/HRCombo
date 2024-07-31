import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import { motion } from 'framer-motion'

function Title({ text }) {
  return (
    <Box
      py={8}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
    >
      <Typography
        color={'secondary'}
        fontWeight={'bold'}
        fontSize={{ xs: 18, lg: 35 }}
        textTransform={'capitalize'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'end'}
        component={motion.div}
        initial={{ x: '5vh', opacity: 0 }}
        transition={{ type: 'spring', duration: 2, delay: 0.1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        {text}
        <Divider
          sx={{ height: 5, width: 100, color: 'black', bgcolor: 'secondary.main' }}
          component={motion.div}
          initial={{ x: '-15vh', opacity: 0 }}
          transition={{ type: 'spring', duration: 2, delay: 0.1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        />
      </Typography>
    </Box>
  )
}

export default Title