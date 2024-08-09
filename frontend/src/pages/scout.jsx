import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, Stack } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core';
import { createCandidatePreference, getInference } from '../services/api';
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
import { searchPlugin } from '@react-pdf-viewer/search'
import '@react-pdf-viewer/search/lib/styles/index.css'

const url = import.meta.env.VITE_MEDIA_URL



const Scout = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [results, setResults] = useState([])
  const [showResume, setShowResume] = useState(false)
  const [selectedResume, setSelectedResume] = useState('')
  const [selectedJobText, setSelectedJobText] = useState('')
  const [selectedResumeText, setSelectedResumeText] = useState('')
  const [searchPluginInstances1, setSearchPluginInstances1] = useState([])
  const [searchPluginInstances2, setSearchPluginInstances2] = useState([])
  const [matchingWords, setMatchingWords] = useState([])
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
  // const searchPluginInstance1 = searchPlugin({keyword: new RegExp(`\\bcommunication\\b`, 'gi') });

  const defaultLayoutPluginInstance2 = defaultLayoutPlugin();
  const fullScreenPluginInstance2 = fullScreenPlugin();
  const getFilePluginInstance2 = getFilePlugin();
  const toolbarPluginInstance2 = toolbarPlugin();
  const highlightPluginInstance2 = highlightPlugin();
  const searchPluginInstance2 = searchPlugin();

  const location = useLocation();
  const { file, fileText } = location.state || {};
  const [industries, setIndustries] = useState([]);
  const [preferredLocations, setPreferredLocations] = useState([]);
  const [locationValue, setLocationValue] = useState(null);
  const [myLocation, setMyLocation] = useState({ country: '', address: '' });
  const [errors, setErrors] = useState({ industries: false, preferredLocations: false, country: false, address: false });
  const { setSuccess, setError, setLoading } = useRequestStateStore();

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const newSearchPlugins1 = matchingWords?.map((word) =>
    searchPlugin({
      keyword: new RegExp(`\\b${word}\\b`, 'gi'),
      onHighlightKeyword: (props) => {
        props.highlightEle.style.backgroundColor = getRandomColor();
        props.highlightEle.style.opacity = 0.3;
      }
    })
  )
  const newSearchPlugins2 = matchingWords?.map((word) =>
    searchPlugin({
      keyword: new RegExp(`\\b${word}\\b`, 'gi'),
      onHighlightKeyword: (props) => {
        props.highlightEle.style.backgroundColor = getRandomColor();
        props.highlightEle.style.opacity = 0.3;
      }
    })
  )
  useEffect(() => {
    setSearchPluginInstances1(newSearchPlugins1);
    setSearchPluginInstances2(newSearchPlugins2);
  }, [matchingWords]);

  console.log(matchingWords)
  const handleAnalyseResume = () => {
    setLoading(true)
    const data = { job: fileText, resume: selectedResumeText }
    getInference(data)
      .then((res) => {
        const words = res.data['Matching Nouns']
        console.log(typeof(words))
        // setMatchingWords(words)
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((err) => {
        console.log(err)
        setLoading(false);
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
      })
  };

  
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
                    // searchPluginInstance1,
                    ...searchPluginInstances1,
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
              <Button onClick={handleAnalyseResume} sx={{ textTransform: 'capitalize', ml: 3 }} variant='contained'>Analyse Resume</Button>
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
                    searchPluginInstance2,
                    ...searchPluginInstances2,
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
              <SearchPreferences
                results={results}
                setResults={setResults}
                setShowResume={setShowResume}
                setSelectedResume={setSelectedResume}
                setSelectedResumeText={setSelectedResumeText} />
            </Box>
          </Grid>}
      </Grid>
    </Box>
  );
};

export default Scout;
