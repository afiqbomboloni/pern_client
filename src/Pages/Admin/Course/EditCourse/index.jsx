import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faX } from '@fortawesome/free-solid-svg-icons'
import {getCourseById, updateCourse } from "../../../../services/CourseAdmin";
import toast, { Toaster } from "react-hot-toast";
import { handleImageEdit } from "../../../../helpers/image-upload";
import CourseForm from "../../../Components/CourseForm";

const EditCourse = ({showModalEdit, setShowModalEdit, idCourse, handleFetchCourse}) => {
    const [course, setCourse] = useState({});
    const [judul, setJudul] = useState("");
    const [harga, setHarga] = useState("");
    const [mentor, setMentor] = useState("");
    const [description, setDescription] = useState("");
    const [imageUpload, setImageUpload] = useState(null);
    const [currentImage, setCurrentImage] = useState("")

    const handleEditCourse = async (event) => {
        event.preventDefault();
        const imageUrl = await handleImageEdit(currentImage, imageUpload);
        try {
            const response = await updateCourse(idCourse, {
                title: judul,
                price: harga,
                mentor: mentor,
                description: description,
                image: imageUrl,
            });

            if (!response) {
                throw new Error("Edit course failed");
            }
            toast.success('Edit course success')

            setTimeout(() => {
                setShowModalEdit(false);
            }, 2000)
           
            handleFetchCourse();
            
        } catch (error) {
            console.log("error", error);
            toast.error('Edit course failed')
        }
            
    }
    
    const fetchCourseById = async (id) => {
        try {
            const response = await getCourseById(id);
            setCourse(response.data);
            setJudul(response.data.title);
            setHarga(response.data.price);
            setMentor(response.data.mentor);
            setDescription(response.data.description);
            setCurrentImage(response.data.image);
            return response;
        } catch (error) {
            console.error("error", error);
        }
    
    }
    useEffect(() => {
        
        fetchCourseById(idCourse);
        if(showModalEdit) {
            document.getElementById("edit-course-modal").classList.remove("hidden");
        } else {
            document.getElementById("edit-course-modal").classList.add("hidden");
        }

        
    }, [showModalEdit]);
  return (
    <div>
      <div
        id="edit-course-modal"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
      >
        <div class="relative p-4 w-full max-w-md max-h-full">
          <div class="relative bg-white rounded-lg shadow">
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <h3 class="text-lg font-semibold text-gray-900">
                Edit Course
              </h3>
              <button
              onClick={() => {setShowModalEdit(false)}}
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-toggle="create-course-modal"
              >
                <FontAwesomeIcon icon={faX} />
                <span class="sr-only" onClick={() => setShowModalEdit(false)}>Close modal</span>
              </button>
            </div>

            <form class="p-4 md:p-5" onSubmit={handleEditCourse}>
               <CourseForm judul={judul} setJudul={setJudul} harga={harga} setHarga={setHarga} description={description}
              mentor={mentor} setDescription={setDescription} setMentor={setMentor} setImageUpload={setImageUpload} />
              <button
                type="submit"
                class="text-white inline-flex items-center bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                <FontAwesomeIcon icon={faPlus} className="mr-2" />
                Simpan
              </button>
            </form>
            <Toaster />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCourse;
