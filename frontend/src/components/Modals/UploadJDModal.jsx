import React, { useState } from 'react'
import { Box, Modal, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { DNA } from 'react-loader-spinner'
import { createJobPDF, createResumePDF } from '../../services/api'
import { useRequestStateStore } from '../../stores/useRequestStateStore'
import { useUser } from '@clerk/clerk-react'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "40%",
    bgcolor: 'background.paper',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
}

const UploadJDModal = ({ open, handleClose }) => {

    const { user } = useUser()
    const navigate = useNavigate()
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    const { loading, success, setLoading, setSuccess } = useRequestStateStore()

    const handleDrop = (event) => {
        event.preventDefault()
        const droppedFile = event.dataTransfer.files[0]
        if (droppedFile && droppedFile.type === "application/pdf") {
            setFile(droppedFile)
            setError(null)
        } else {
            setError("Only PDF files are allowed")
        }
    }

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0]
        if (selectedFile && selectedFile.type === "application/pdf") {
            setFile(selectedFile)
            setError(null)
        } else {
            setError("Only PDF files are allowed")
        }
    }

    const handleUpload = () => {
        if (file) {
            setLoading(true)
            const formData = new FormData()
            formData.append('file', file)
            formData.append('uploaded_by', user?.id)
            createJobPDF(formData)
                .then((res) => {
                    console.log(res)
                    setLoading(false)
                    setSuccess(true)
                    setTimeout(() => {
                        setSuccess(false)
                    }, 3000)
                    navigate('/employerportal/employerform', { state: { file: file, resume_pdf_id: res.data.id } })
                })
                .catch((err) => {
                    console.error("Upload job description error: ", err)
                    setLoading(false)
                    setError("Uploading job description failed")
                })
        }
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="upload-modal-title"
            aria-describedby="upload-modal-description"
        >
            <Box sx={style} display={'flex'} flexDirection={'column'} alignItems={'end'}>
                <Box width={'100%'}>
                    <Typography id="upload-modal-title" variant="h6" component="h2">
                        Upload Job Description
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        Only PDF files are allowed
                    </Typography>
                    <Box
                        onDrop={handleDrop}
                        onDragOver={(e) => e.preventDefault()}
                        sx={{
                            border: '2px dashed #ccc',
                            padding: '20px',
                            textAlign: 'center',
                            cursor: 'pointer',
                            mt: 2,
                            borderRadius: 1,
                            p: 5
                        }}
                    >
                        <Typography variant="body2">
                            Drag & Drop your file here or
                        </Typography>
                        <Button variant="contained" component="label" sx={{ mt: 5 }}>
                            Browse File
                            <input type="file" hidden onChange={handleFileChange} accept="application/pdf" />
                        </Button>
                    </Box>
                    {error && (
                        <Typography variant="body2" color="error" sx={{ mt: 2 }}>
                            {error}
                        </Typography>
                    )}
                    {file && (
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            Selected file: {file.name}
                        </Typography>
                    )}
                </Box>

                <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2, ml: 'auto' }}
                    onClick={handleUpload}
                    disabled={!file || loading}
                >
                    Upload
                </Button>
            </Box>
        </Modal>
    )
}

export default UploadJDModal
