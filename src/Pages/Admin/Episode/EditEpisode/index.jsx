import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faX } from '@fortawesome/free-solid-svg-icons'
import {getEpisodeById, updateEpisode } from "../../../../services/Episode";
import toast, { Toaster } from "react-hot-toast";
import EpisodeForm from "../../../Components/EpisodeForm";


const EditEpisode = ({showModalEdit, setShowModalEdit, idEpisode, handleFetchEpisode}) => {
    const [episode, setEpisode] = useState({});
    const [judul, setJudul] = useState("");
    const [link, setLink] = useState("");
    const [status, setStatus] = useState("");
    const [course_id, setCourse_id] = useState("")
    

    const handleEditEpisode = async (event) => {
        event.preventDefault();

        try {
            const response = await updateEpisode(idEpisode, {
                title: judul,
                link: link,
                status: status,
                course_id: course_id,
            });

            console.log(judul, "responses")

            if (!response) {
                throw new Error("Edit course failed");
            }
            toast.success('Edit course success')

            setTimeout(() => {
                setShowModalEdit(false);
            }, 2000)
           
            handleFetchEpisode();
            
        } catch (error) {
            console.log("error", error);
            toast.error('Edit course failed')
        }
            
    }
    
    const fetchEpisodeById = async (idEpisode) => {
        try {
            const response = await getEpisodeById(idEpisode);
            setEpisode(response.data);
            setJudul(response.data.title);
            setLink(response.data.link);
            setStatus(response.data.status);
            setCourse_id(response.data.course_id);
            console.log(response.data, "response")
       
            return response;
        } catch (error) {
            console.error("error", error);
        }
    
    }
    useEffect(() => {
      console.log(idEpisode, "idEpisode")
      if(showModalEdit) {
          fetchEpisodeById(idEpisode);
          document.getElementById("edit-episode-modal").classList.remove("hidden");
      } else {
          document.getElementById("edit-episode-modal").classList.add("hidden");
      }
  }, [showModalEdit]);
  return (
    <div>
      <div
        id="edit-episode-modal"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
      >
        <div class="relative p-4 w-full max-w-md max-h-full">
          <div class="relative bg-white rounded-lg shadow">
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <h3 class="text-lg font-semibold text-gray-900">
                Edit Episode
              </h3>
              <button
              onClick={() => {setShowModalEdit(false)}}
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-toggle="edit-episode-modal"
              >
                <FontAwesomeIcon icon={faX} />
                <span class="sr-only" onClick={() => setShowModalEdit(false)}>Close modal</span>
              </button>
            </div>

            <form class="p-4 md:p-5" onSubmit={handleEditEpisode}>
              <EpisodeForm judul={judul} link={link} status={status} setJudul={setJudul} setLink={setLink} setStatus={setStatus} isEdit={true} />
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

export default EditEpisode;
