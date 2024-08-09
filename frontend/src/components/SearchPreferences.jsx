import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, List, ListItem, ListItemText, Box, Autocomplete } from '@mui/material';
import { searchPreferences } from '../services/api';
import { useRequestStateStore } from '../stores/useRequestStateStore';

const industryOptions = [
    { title: 'Technology' },
    { title: 'Finance' },
    { title: 'Healthcare' },
]

const SearchPreferences = ({results, setResults, setShowResume, setSelectedResume, setSelectedResumeText}) => {
    const [country, setCountry] = useState('');
    const [industry, setIndustry] = useState(null);
    const { setSuccess, setError, setLoading } = useRequestStateStore()


    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true)
        const search = { country: country, industry: industry?.title }
        searchPreferences(search)
            .then((res) => {
                setResults(res.data.preferences);
                setLoading(false)
                setSuccess(true)
                setTimeout(() => {
                    setSuccess(false)
                }, 3000)
            })
            .catch((err) => {
                console.error('Error fetching search results:', err);
                setLoading(false)
                setError(true)
                setTimeout(() => {
                    setError(false)
                }, 3000)
            })
    };

    return (
        <Box>
            <form onSubmit={handleSearch} style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <TextField
                        label="Country"
                        variant="outlined"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        fullWidth
                    />
                    <Autocomplete
                        options={industryOptions}
                        getOptionLabel={(option) => option.title}
                        value={industry}
                        onChange={(event, newValue) => {
                            setIndustry(newValue);
                        }}
                        renderInput={(params) => (
                            <TextField {...params} label="Industry" variant="outlined" fullWidth />
                        )}
                        sx={{ ml: 3, width: '100%' }}
                    />
                </Box>
                <Button variant="contained" color="primary" type="submit">
                    Search
                </Button>
            </form>
            <Typography gutterBottom>
                Search Results:
            </Typography>
            <List>
                {results.map((preference, index) => (
                    <ListItem key={preference.id} divider sx={{border: '1px solid gray', mb: 1, borderRadius: 3}}>
                        <ListItemText
                            primary={`Candidate ${index + 1}`}
                            secondary={
                                <>
                                    <Typography component="span" variant="body2" color="textPrimary">
                                        Preferred Working Location: {preference.preferred_location}
                                    </Typography>
                                    <br />
                                    <Typography component="span" variant="body2" color="textPrimary">
                                        Industry: {preference.industries}
                                    </Typography>
                                    <br />
                                    <Typography component="span" variant="body2" color="textPrimary">
                                        Address: {preference.address}
                                    </Typography>
                                    <br />
                                    <Typography component="span" variant="body2" color="textPrimary">
                                        Country: {preference.country}
                                    </Typography>
                                    <br />
                                </>
                            }
                        />
                        <Button 
                        onClick={() => {
                            setShowResume(true)
                            setSelectedResume(preference.resume_pdf__file)
                            setSelectedResumeText(preference.resume_pdf__file_text)
                        }} 
                        sx={{textTransform: 'capitalize', ml: 3}} 
                        variant='contained'>
                            View Resume
                            </Button>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default SearchPreferences;
