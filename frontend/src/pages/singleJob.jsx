import React from 'react'
import { Viewer } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { Worker } from '@react-pdf-viewer/core'
import { Box, Button } from '@mui/material'


function SingleJob() {

    const defaultLayoutPluginInstance = defaultLayoutPlugin()
    
    return (
        <Box width={'60%'} height={'100vh'} mx={'auto'} mt={3} mb={20}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer
                    fileUrl='/job.pdf'
                    plugins={[
                        // Register plugins
                        defaultLayoutPluginInstance,
                    ]}
                />
            </Worker>

            <Button variant='contained' sx={{ paddingX: '3rem', textTransform: 'capitalize', fontSize: '1rem', py: 1, width: '100%', mt: 5, bgcolor: 'primary.main', ":hover": { bgcolor: 'primary.dark' } }}
          >
            Instant Application
          </Button>
        </Box>
    )
}

export default SingleJob