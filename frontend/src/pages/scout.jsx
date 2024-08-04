import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, Autocomplete, TextField, Stack } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core';
import { createCandidatePreference } from '../services/api';
import { useRequestStateStore } from '../stores/useRequestStateStore';
import { useUser } from '@clerk/clerk-react';
import Title from '../components/Title';
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen'
import { getFilePlugin } from '@react-pdf-viewer/get-file'
import { toolbarPlugin } from '@react-pdf-viewer/toolbar'
import { highlightPlugin } from '@react-pdf-viewer/highlight'
import '@react-pdf-viewer/highlight/lib/styles/index.css'
import '../index.css'
import SearchPreferences from '../components/SearchPreferences';

const url = import.meta.env.VITE_MEDIA_URL

const matchingWords = ['data', 'work', 'programming']
const industryOptions = [
  { title: 'Technology' },
  { title: 'Finance' },
  { title: 'Healthcare' },
  // Add more options as needed
];

const locationOptions = [
  { title: 'Hybrid' },
  { title: 'Remote' },
  { title: 'Onsite' },
  // Add more options as needed
];

const HighlightPlugin = ({ fileUrl, matchingWords }) => {
  const highlightPluginInstance = highlightPlugin({
    highlightAreas: matchingWords.map(word => ({
      keyword: word,
      highlightColor: '#FFFF00' // Yellow highlight
    }))
  });

  return (
    <div style={{ height: '750px' }}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}>
        <Viewer
          fileUrl={fileUrl}
          plugins={[highlightPluginInstance]}
        />
      </Worker>
    </div>
  );
};


const Scout = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [results, setResults] = useState([])
  const [showResume, setShowResume] = useState(false)
  const [selectedResume, setSelectedResume] = useState('')
  // const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    toolbarPlugin: {
      fullScreenPlugin: {
        getFullScreenTarget: (pagesContainer) => pagesContainer.closest('[data-testid="default-layout__body"]'),
        renderExitFullScreenButton: (props) => <></>,
      },
    },
  });
  // Create separate plugin instances for each viewer
  const defaultLayoutPluginInstance1 = defaultLayoutPlugin();
  const fullScreenPluginInstance1 = fullScreenPlugin();
  const getFilePluginInstance1 = getFilePlugin();
  const toolbarPluginInstance1 = toolbarPlugin();
  const highlightPluginInstance1 = highlightPlugin();

  const defaultLayoutPluginInstance2 = defaultLayoutPlugin();
  const fullScreenPluginInstance2 = fullScreenPlugin();
  const getFilePluginInstance2 = getFilePlugin();
  const toolbarPluginInstance2 = toolbarPlugin();
  const highlightPluginInstance2 = highlightPlugin();
  const location = useLocation();
  const { file } = location.state || {};
  const [industries, setIndustries] = useState([]);
  const [preferredLocations, setPreferredLocations] = useState([]);
  const [locationValue, setLocationValue] = useState(null);
  const [myLocation, setMyLocation] = useState({ country: '', address: '' });
  const [errors, setErrors] = useState({ industries: false, preferredLocations: false, country: false, address: false });
  const { setSuccess, setError, setLoading } = useRequestStateStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate fields
    const newErrors = {
      industries: industries.length === 0,
      preferredLocations: preferredLocations.length === 0,
      country: myLocation.country === '',
      address: myLocation.address === '',
    };
    setErrors(newErrors);

    if (!newErrors.industries && !newErrors.preferredLocations && !newErrors.country && !newErrors.address) {
      const preferences = {
        industries: industries.map(ind => ind.title).join(', '),
        preferred_location: preferredLocations.map(loc => loc.title).join(', '),
        country: myLocation.country,
        address: myLocation.address,
        resume_pdf_id: file,
        user: user?.id
      };
      console.log(preferences);
      setLoading(true);
      createCandidatePreference(preferences)
        .then((res) => {
          setLoading(false);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
          navigate('/candidateportal');
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 3000);
        });
    }
  };
  console.log(selectedResume)

  return (
    <Box sx={{ px: 4 }} width={'80%'} mx={'auto'}>
      <Title text={"Scout Talent"} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography mb={3} sx={{ textDecoration: 'underline' }}>Job Description</Typography>
          <Box width={'100%'} height={'100vh'} mb={20}>
            {file ? (
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer
                  key={'viewer1'}
                  fileUrl={file}
                  httpHeaders={{
                    'Content-Type': 'application/pdf'
                  }}
                  withCredentials={true}
                  plugins={[
                    // Register plugins
                    defaultLayoutPluginInstance1,
                    // fullScreenPluginInstance1,
                    getFilePluginInstance1,
                    toolbarPluginInstance1,
                    highlightPluginInstance1,
                  ]}
                />
              </Worker>
            ) : (
              <Typography variant="body2" color="error">
                No file selected
              </Typography>
            )}
          </Box>
        </Grid>
        {showResume ? <Grid item xs={12} md={6}>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography mb={3} sx={{ textDecoration: 'underline' }}>Resume</Typography>
            <Box>
              <Button onClick={() => setShowResume(true)} sx={{ textTransform: 'capitalize', ml: 3 }} variant='contained'>Analyse Resume</Button>
              <Button onClick={() => setShowResume(false)} sx={{ textTransform: 'capitalize', ml: 3 }} variant='contained'>New Search</Button>
            </Box>
          </Stack>
          <Box width={'100%'} height={'100vh'} mb={20}>
            {file ? (
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer
                  key={'viewer2'}
                  fileUrl={`${url}/media/${selectedResume}`}
                  httpHeaders={{
                    'Content-Type': 'application/pdf'
                  }}
                  withCredentials={true}
                  plugins={[
                    // Register plugins
                    defaultLayoutPluginInstance2,
                    // fullScreenPluginInstance2,
                    getFilePluginInstance2,
                    toolbarPluginInstance2,
                    highlightPluginInstance2,
                  ]}
                />
              </Worker>
            ) : (
              <Typography variant="body2" color="error">
                No file selected
              </Typography>
            )}
          </Box>
        </Grid>
          :
          <Grid item xs={12} md={6}>

            <Box width={'100%'} pl={5}>
              <Typography mb={3}>Filter candidates by country or industry</Typography>
              <SearchPreferences results={results} setResults={setResults} setShowResume={setShowResume} setSelectedResume={setSelectedResume} />
            </Box>
          </Grid>}
      </Grid>
    </Box>
  );
};

export default Scout;
