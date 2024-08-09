import axios from "axios";

const url = import.meta.env.VITE_API_URL;
const token = import.meta.env.VITE_AUTH_TOKEN;

const getCsrfToken = async () => {
    const response = await axios.get(`${url}api/csrf-token/`, { withCredentials: true })
    const csrfToken = response.data.csrfToken
    // localStorage.setItem('csrfToken', csrfToken)
    return csrfToken
}

// API requests for Project Loading please refer to API documentation

const api = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
    timeout: 50000,
});

api.interceptors.request.use(
    async (config) => {
        const csrfToken = await getCsrfToken()
        config.headers['X-CSRFToken'] = csrfToken
        return config
    },
    (error) => {
        console.log("api error: ", error);
        return Promise.reject(error);
    }
);

// Users
export const createUser = async (user) => api.post(`api/users/`, user);
export const getUser = async (userId) => api.get(`api/users/${userId}/`);
export const updateUser = async (userId, user) => api.put(`api/users/${userId}/update/`, user);
export const deleteUser = async (userId) => api.delete(`api/users/${userId}/delete/`);
export const getUsers = async () => api.get(`api/users/list/`);

// JobPDFs
export const createJobPDF = async (jobPDF) => api.post(`api/jobpdfs/`, jobPDF, {headers: {'Content-Type': 'multipart/form-data'}});
export const getJobPDF = async (jobpdfId) => api.get(`api/jobpdfs/${jobpdfId}/`);
export const getUserJobPDF = async (user_id) => api.get(`api/userjobpdfs/${user_id}/`);
export const updateJobPDF = async (jobpdfId, jobPDF) => api.put(`api/jobpdfs/${jobpdfId}/update/`, jobPDF);
export const deleteJobPDF = async (jobpdfId) => api.delete(`api/jobpdfs/${jobpdfId}/delete/`);
export const getJobPDFs = async () => api.get(`api/jobpdfs/list/`);

// ResumePDFs
export const createResumePDF = async (resumePDF) => api.post(`api/resumepdfs/`, resumePDF,  {headers: {'Content-Type': 'multipart/form-data'}});
export const getResumePDF = async (resumepdfId) => api.get(`api/resumepdfs/${resumepdfId}/`);
export const updateResumePDF = async (resumepdfId, resumePDF) => api.put(`api/resumepdfs/${resumepdfId}/update/`, resumePDF);
export const deleteResumePDF = async (resumepdfId) => api.delete(`api/resumepdfs/${resumepdfId}/delete/`);
export const getResumePDFs = async () => api.get(`api/resumepdfs/list/`);

// CandidatePreferences
export const createCandidatePreference = async (preference) => api.post(`api/preferences/`, preference);
export const getCandidatePreference = async (preferenceId) => api.get(`api/preferences/${preferenceId}/`);
export const updateCandidatePreference = async (preferenceId, preference) => api.put(`api/preferences/${preferenceId}/update/`, preference);
export const deleteCandidatePreference = async (preferenceId) => api.delete(`api/preferences/${preferenceId}/delete/`);
export const getCandidatePreferences = async () => api.get(`api/preferences/list/`);

// JobPostings
export const createJobPosting = async (jobPosting) => api.post(`api/jobpostings/`, jobPosting, {headers: {'Content-Type': 'multipart/form-data'}});
export const getJobPosting = async (jobPostingId) => api.get(`api/jobpostings/${jobPostingId}/`);
export const updateJobPosting = async (jobPostingId, jobPosting) => api.put(`api/jobpostings/${jobPostingId}/update/`, jobPosting);
export const deleteJobPosting = async (jobPostingId) => api.delete(`api/jobpostings/${jobPostingId}/delete/`);
export const getJobPostings = async () => api.get(`api/jobpostings/list/`);

// Applications
export const createApplication = async (application) => api.post(`api/applications/`, application);
export const getApplication = async (applicationId) => api.get(`api/applications/${applicationId}/`);
export const updateApplication = async (applicationId, application) => api.put(`api/applications/${applicationId}/update/`, application);
export const deleteApplication = async (applicationId) => api.delete(`api/applications/${applicationId}/delete/`);
export const getApplications = async () => api.get(`api/applications/list/`);

// Messages
export const createMessage = async (message) => api.post(`api/messages/`, message);
export const getMessage = async (messageId) => api.get(`api/messages/${messageId}/`);
export const updateMessage = async (messageId, message) => api.put(`api/messages/${messageId}/update/`, message);
export const deleteMessage = async (messageId) => api.delete(`api/messages/${messageId}/delete/`);
export const getMessages = async () => api.get(`api/messages/list/`);


// Search
export const searchPreferences = async (search) => api.post(`api/search_preferences/`, search);

// Inference
export const getInference = async (data) => api.post(`api/get_inference/`, data);

