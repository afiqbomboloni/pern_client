import { useEffect, useState } from "react";
import EditCourse from "../Admin/Course/EditCourse";
import {useNavigate} from "react-router-dom";

const Table = ({ courses, handleFetchCourse, handleDeleteCourse }) => {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [idCourse, setIdCourse] = useState();
  const navigate = useNavigate();
  const showModalEditCourse = (courseId) => {
    setIdCourse(courseId);
    setShowModalEdit(true);
  
  }
  useEffect(() => {
    handleFetchCourse();
  }, []);
  return (
    <div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg my-10">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
            <th scope="col" class="px-6 py-3">
                Sampul
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Judul
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Deskripsi
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Harga
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Mentor
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index} class="odd:bg-white even:bg-gray-50 border-b">
                 <td class="px-6 py-4"><img src={course.image} width={48} alt="" /></td>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
                >
                  {course.title}
                </th>
                <td class="px-6 py-4 text-center">{course.description}</td>
                <td class="px-6 py-4 text-center">{course.price ? `Rp ${new Intl.NumberFormat('id-ID').format(course.price)}` : "-"}</td>
                <td class="px-6 py-4 text-center">{course.mentor}</td>
                <td class="px-6 py-4 text-center">
                <a onClick={() => navigate(`/admin/courses/${course.id}/episodes`)} class="font-medium text-blue-600 hover:underline cursor-pointer mr-4">
                   Episode
                  </a>
                  <a onClick={() => showModalEditCourse(course.id)} class="font-medium text-blue-600 hover:underline cursor-pointer">
                    Edit
                  </a>
                  <a
                    onClick={() => {handleDeleteCourse(course.id)}}
                    class="font-medium text-blue-600 hover:underline ml-4 cursor-pointer"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <EditCourse showModalEdit={showModalEdit} idCourse={idCourse} setShowModalEdit={setShowModalEdit} handleFetchCourse={handleFetchCourse} />
    </div>
  );
};

export default Table;
