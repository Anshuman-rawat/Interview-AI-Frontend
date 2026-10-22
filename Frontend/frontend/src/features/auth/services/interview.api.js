import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})

/**
 * @description Generates an interview report based on the provided resume, job description, and self-description.
 */

export const generateInterviewReport = async ({ resumeFile, jobDescription, selfDescription }) => {
    const formData = new FormData()
    formData.append("resume", resumeFile)
    formData.append("jobDescription", jobDescription)
    formData.append("selfDescription", selfDescription)

    const response = await api.post("/api/interview/", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
    return response.data
}
/**
* @description Retrieves the interview report for a specific interview ID.
 */
export const getInterviewReportById = async (interviewID) => {
    const response = await api.get(`/api/interview/${interviewID}`)
    return response.data
}
/**
 * @description Retrieves all interview reports for the authenticated user.
 */
export const getAllInterviewReports = async () => {
    const response = await api.get("/api/interview/")
    return response.data
}