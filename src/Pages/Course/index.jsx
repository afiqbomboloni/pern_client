import HomeNavbar from "../Components/HomeNavbar"
import SearchCourse from "../Components/SearchCourse"
import ListCourseSearch from "../Components/ListCourseSearch"
import Footer from "../Components/Footer"
import { fetchCourse } from "../../services/CourseAdmin"
import { useEffect, useState } from "react"

const CourseList = () => {
    const [courses, setCourses] = useState([])

    const handleFetchCourses = async () => {
        try {
            const response = await fetchCourse()
            setCourses(response.data)

        } catch (error) {
            console.error("error fetch data", error);
        }
    }

    useEffect(() => {
        handleFetchCourses()
    }, [])
    return (
        <div>
        <HomeNavbar linkActive="course" />
        <ListCourseSearch courses={courses} />
        <Footer />
        </div>
    )
}

export default CourseList