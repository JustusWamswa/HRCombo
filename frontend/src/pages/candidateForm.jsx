import React, { useState } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';


const CandidateForm = () => {
  const location = useLocation();
  const { file: initialFile } = location.state || {};

  const [firstFile, setFirstFile] = useState(initialFile);
  const [secondFile, setSecondFile] = useState(null);
  const [error, setError] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === "application/pdf") {
      setSecondFile(droppedFile);
      setError(null);
    } else {
      setError("Only PDF files are allowed");
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setSecondFile(selectedFile);
      setError(null);
    } else {
      setError("Only PDF files are allowed");
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Candidate Portal
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h6" component="h2" gutterBottom>
            First PDF
          </Typography>
          {firstFile ? (
            <Document file={firstFile}>
              <Page pageNumber={1} />
            </Document>
          ) : (
            <Typography variant="body2">No first PDF uploaded yet.</Typography>
          )}
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" component="h2" gutterBottom>
            Second PDF
          </Typography>
          {secondFile ? (
            <Document file={secondFile}>
              <Page pageNumber={1} />
            </Document>
          ) : (
            <Typography variant="body2">No second PDF uploaded yet.</Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="h2" gutterBottom>
            Upload a new Resume
          </Typography>
          <Box
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            sx={{
              border: '2px dashed #ccc',
              padding: '20px',
              textAlign: 'center',
              cursor: 'pointer',
              mt: 2
            }}
          >
            <Typography variant="body2">
              Drag & Drop your file here or
            </Typography>
            <Button variant="contained" component="label" sx={{ mt: 1 }}>
              Browse File
              <input type="file" hidden onChange={handleFileChange} accept="application/pdf" />
            </Button>
          </Box>
          {error && (
            <Typography variant="body2" color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
          {secondFile && (
            <Typography variant="body2" sx={{ mt: 2 }}>
              Selected second file: {secondFile.name}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CandidateForm;
