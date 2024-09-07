import AdminNavbar from "../../Components/AdminNavbar";
import Table from "../../Components/Table";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { fetchCourse } from "../../../services/CourseAdmin";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import CreateCourse from "./CreateCourse";
import { deleteCourse } from "../../../services/CourseAdmin";
import toast, { Toaster } from "react-hot-toast";

const Course = () => {
    const [courses, setCourses] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const handleFetchCourse = async () => {
        try {
            const response = await fetchCourse();
            setCourses(response.data || []);
          
        } catch (error) {
            console.error("error", error);
        }
    } 

    const handleDeleteCourse = async (id) => {
        if (window.confirm("Are you sure want to delete this course?")) {
            try {
                const response = await deleteCourse(id);
                if (!response) {
                    throw new Error("Delete course failed");
                }
                toast.success('Delete course success')
                handleFetchCourse();
            } catch (error) {
                console.log("error", error);
                toast.error('Delete course failed')
            }
        }
    }
    const showModelCreate = () => {

        setShowModal(true);
    }

    useEffect(() => {
        handleFetchCourse();
    }, []);
    return (
        <div>
        <AdminNavbar activeLink="course" />
        <div className="max-w-screen-xl mx-auto">
            <h1 className="font-semibold text-2xl">Daftar Course</h1>
            <button type="button" onClick={showModelCreate} class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mt-4">
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
                Tambah Course</button>
            <Table courses={courses} handleFetchCourse={handleFetchCourse} handleDeleteCourse={handleDeleteCourse} />
        </div>
        <CreateCourse showModal={showModal} setShowModal={setShowModal} handleFetchCourse={handleFetchCourse} />
        <Toaster />
        </div>
    );
}

export default Course;