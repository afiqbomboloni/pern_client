import EpisodeCourse from "../Components/EpisodeCourse"
import Footer from "../Components/Footer"
import HeroDetail from "../Components/HeroDetail"
import HomeNavbar from "../Components/HomeNavbar"
import { useParams } from "react-router-dom"
import { getCourseById } from "../../services/CourseAdmin"
import { getCourseEpisodes } from "../../services/Episode"
import { useEffect, useState } from "react"

const CourseDetailUser = () => {
    const { id } = useParams()
    const [course, setCourse] = useState({})
    const [episodes, setEpisodes] = useState([])
    const [totalEpisodes, setTotalEpisodes] = useState(0)
    const [loading, setLoading] = useState(true)
    let getUser = JSON.parse(sessionStorage.getItem("user"));
    const handleFetchCourse = async () => {
        try {
            const response = await getCourseById(id)
            setCourse(response.data)
            
            setLoading(false)
        } catch (error) {
            console.error("error fetch data", error);
        }
    
    }

    const handleFetchEpisode = async () => {
        try {
            const response = await getCourseEpisodes(id)
            setEpisodes(response.data)
            setTotalEpisodes(response.total)
            setLoading(false)
        } catch (error) {
            console.error("error fetch data", error);
        }
    
    }

    useEffect(() => {
        handleFetchCourse()
        handleFetchEpisode()
    }, [])
    return (
        <div>
            <HomeNavbar linkActive="course" />
            <HeroDetail course={course} totalEpisodes={totalEpisodes} />
            <EpisodeCourse episodes={episodes} courses={course} user={getUser} />
            <Footer />
        </div>
    )
}

export default CourseDetailUser