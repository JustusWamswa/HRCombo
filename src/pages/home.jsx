import React from 'react'
import Hero from '../components/Hero'
import WhyChooseUs from '../components/WhyChooseUs'
import HowItWorks from '../components/HowItWorks'
import { Divider } from '@mui/material'
import WhatWeDo from '../components/WhatWeDo'
import Testimonials from '../components/Testimonials'
import JobHighlights from '../components/JobHighlights'
import HRComboGuides from '../components/HRComboGuides'
import PortalCall from '../components/PortalCall'

function Home() {


    return (
        <>
            <Hero />
            <WhyChooseUs />
            <HowItWorks />
            <Divider sx={{width: '70%', mt: 15, mb: 2, mx: 'auto', bgcolor: 'gray'}}  />
            <WhatWeDo />
            <Testimonials />
            <JobHighlights />
            <Divider sx={{width: '70%', mt: 8, mx: 'auto', bgcolor: 'gray'}}  />
            <HRComboGuides />
            <Divider sx={{width: '70%', mt: 10, mx: 'auto', bgcolor: 'gray'}}  />
            <PortalCall />
        </>
    )
}

export default Home