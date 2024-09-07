import { useEffect, useState } from "react";
import { fetchCourse } from "../../services/CourseAdmin";
import ListClass from "./Atoms/ListClass";
const ListClassHome = () => {
  const [courses, setCourses] = useState([]);
  const handlegetCourses = async () => {
    try {
      const data = await fetchCourse();
      console.log(data.data)
      setCourses(data.data);
    } catch (error) {
      console.error("error fetch data", error);
    }
  };

  useEffect(() => {
    handlegetCourses();
  }, []);
  return (
    <section class="max-w-screen-xl mx-auto">
      <div class="mt-10">
        <h1 class="text-3xl font-semibold text-center">Kelas Populer</h1>
        <p class="text-center mt-2">
          Kelas yang paling banyak diikuti oleh pengguna
        </p>
      </div>
      <ListClass courses={courses} />
      <div class="mt-10 flex items-center justify-center">
        <button
          type="button"
          class="gap-2 bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 text-white"
        >
          Lihat Semua Kelas
          <svg
            class="w-6 h-6 text-gray-800 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ListClassHome;
