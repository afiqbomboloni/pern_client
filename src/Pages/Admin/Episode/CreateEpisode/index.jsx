import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import { createEpisode } from "../../../../services/Episode";
import toast, { Toaster } from "react-hot-toast";
import EpisodeForm from "../../../Components/EpisodeForm";

const CreateEpisode = ({ showModal, setShowModal, handleFetchEpisodes, course_id }) => {
  const [judul, setJudul] = useState("");
  const [link, setLink] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (showModal) {
      document
        .getElementById("create-episode-modal")
        .classList.remove("hidden");
    } else {
      document.getElementById("create-episode-modal").classList.add("hidden");
    }
  }, [showModal]);

  const clearForm = () => {
    setJudul("");
    setLink("");
    setStatus("");
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const data = {
        title: judul,
        link: link,
        status: status,
        course_id: course_id,
      };

      if (data.status !== "public" && data.status !== "private") {
        toast.error("Status harus diisi");
        return;
      }

      await createEpisode(data);
      toast.success("episode berhasil ditambahkan");
      setTimeout(() => {
        setShowModal(false);
      }, 2000);

      handleFetchEpisodes();

      clearForm();
    } catch (error) {
      console.error("error", error);
      toast.error("episode gagal ditambahkan");
    }
  };

  return (
    <div>
      <div
        id="create-episode-modal"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
      >
        <div class="relative p-4 w-full max-w-md max-h-full">
          <div class="relative bg-white rounded-lg shadow">
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <h3 class="text-lg font-semibold text-gray-900">
                Tambah Episode Baru
              </h3>
              <button
                onClick={() => {
                  setShowModal(false);
                  clearForm();
                }}
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-toggle="create-episode-modal"
              >
                <FontAwesomeIcon icon={faX} />
                <span class="sr-only" onClick={() => setShowModal(false)}>
                  Close modal
                </span>
              </button>
            </div>

            <form class="p-4 md:p-5" onSubmit={handleSubmit}>
              <EpisodeForm judul={judul} link={link} status={status} setJudul={setJudul} setLink={setLink} setStatus={setStatus} />
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

export default CreateEpisode;
