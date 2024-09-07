import { useParams } from 'react-router-dom';
import TableEpisodes from '../../Components/TableEpisodes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import { getCourseEpisodes, deleteEpisode } from '../../../services/Episode';
import CreateEpisode from './CreateEpisode';
import toast, { Toaster } from "react-hot-toast";

const AdminEpisodePage = () => {
    const [episodes, setEpisodes] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const { id: course_id } = useParams();
    const handleFetchEpisodes = async () => {
        try {
            const episodes = await getCourseEpisodes(course_id);
            setEpisodes(episodes.data);
        } catch (error) {
            console.error("Error fetching episodes:", error);
        }
    }

    const showModelCreate = () => {

        setShowModal(true);
    }

    const handleDeleteEpisode = async (id) => {
        if (window.confirm("Are you sure want to delete this episode?")) {
            try {
                const response = await deleteEpisode(id);
                if (!response) {
                    throw new Error("Delete episode failed");
                }
                toast.success('Delete episode success')
                handleFetchEpisodes();
            } catch (error) {
                console.log("error", error);
                toast.error('Delete episode failed')
            }
        }
    }

    useEffect(() => {
        handleFetchEpisodes();
    }, []);

   
    return (
        <div className="max-w-screen-xl mx-auto mt-5">
            <h1 className="font-semibold text-2xl">Daftar Episode</h1>
            <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mt-4"
            onClick={showModelCreate}>
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
                Tambah Episode</button>
            <CreateEpisode showModal={showModal} setShowModal={setShowModal} handleFetchEpisodes={handleFetchEpisodes} course_id={course_id} />
            <TableEpisodes episodes={episodes} handleFetchEpisodes={handleFetchEpisodes} handleDeleteEpisode={handleDeleteEpisode} />
            <Toaster />
        </div>
    );
}

export default AdminEpisodePage;