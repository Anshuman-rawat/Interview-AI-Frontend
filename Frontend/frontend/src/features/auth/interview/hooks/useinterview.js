import { useContext } from "react"
import { getAllInterviewReports, generateInterviewReport, getInterviewReportById  } from "../../services/interview.api.js"
import { InterviewContext } from "../interview.context.jsx"

export const useInterview = () => {
    const context = useContext(InterviewContext)
    if (!context) {
        throw new Error("useInterview must be used within an InterviewProvider")
    }
    const { loading, setLoading, report, setReport, reports, setReports } = context

    const generateReport = async ({ resumeFile, jobDescription, selfDescription }) => {
        setLoading(true)
        try {
            const response = await generateInterviewReport({ resumeFile, jobDescription, selfDescription })
            setReport(response.interviewReport)
            return response.interviewReport
        } catch (err) {
            console.log("Failed to generate report:", err)
        } finally {
            setLoading(false)
        }
    }

    const getReportById = async (interviewId) => {
        setLoading(true)
        try {
            const response = await getInterviewReportById(interviewId)
            setReport(response.interviewReport)
            return response.interviewReport
        } catch (err) {
            console.log("Failed to fetch report:", err)
        } finally {
            setLoading(false)
        }
    }

    const getReports = async () => {
        setLoading(true)
        try {
            const response = await getAllInterviewReports()
            setReports(response.interviewReports)
            return response.interviewReports
        } catch (err) {
            console.log("Failed to fetch reports:", err)
        } finally {
            setLoading(false)
        }
    }

    return { loading, report, reports, generateReport, getReportById, getReports }
}