import { useState } from "react";
import EditEpisode from "../Admin/Episode/EditEpisode";

const TableEpisodes = ({episodes, handleFetchEpisodes, handleDeleteEpisode}) => {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [idEpisode, setIdEpisode] = useState("");
  const showModalEditEpisode = (episodeId) => {
    setIdEpisode(episodeId);
    setShowModalEdit(true);
  
  }
    return (
      <div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg my-10">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 hidden">
                  Course id
                </th>
                <th scope="col" class="px-6 py-3">
                  Judul
                </th>
                <th scope="col" class="px-6 py-3">
                  Link
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
                
                <th scope="col" class="px-6 py-3">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {episodes?.map((episode, index) => (
                <tr key={index} class="odd:bg-white even:bg-gray-50 border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap hidden"
                  >
                    {episode.course_id}
                  </th>
                  <td class="px-6 py-4">{episode.title}</td>
                  <td class="px-6 py-4 text-blue-500 underline"><a href={episode.link}>{episode.link}</a></td>
                  
                  <td class="px-6 py-4">{episode.status}</td>
                  <td class="px-6 py-4">
                    <a class="font-medium text-blue-600 hover:underline cursor-pointer"
                    onClick={() => {showModalEditEpisode(episode.id)}}>
                      Edit
                    </a>
                    <a class="font-medium text-blue-600 hover:underline ml-4 cursor-pointer"
                    onClick={() => {handleDeleteEpisode(episode.id)}}>
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
                
             
            </tbody>
          </table>
        </div>
        <EditEpisode showModalEdit={showModalEdit}  setShowModalEdit={setShowModalEdit} idEpisode={idEpisode} handleFetchEpisode={handleFetchEpisodes} />
      </div>
    );
  };
  
  export default TableEpisodes;
  