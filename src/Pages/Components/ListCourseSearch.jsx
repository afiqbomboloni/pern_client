import { Link, useNavigate } from "react-router-dom"

const ListCourseSearch = ({courses}) => {
  const navigate = useNavigate()
    return (
        <section class="max-w-screen-xl mx-auto">
        <div class="flex flex-wrap justify-center md:justify-start md:gap-10">
          {
            courses.map((course, index) => (
              <div key={index} class="w-full md:w-1/3 max-w-sm bg-white border border-gray-200 rounded-lg shadow mt-10">
              <a href="#">
                <img class="p-8 rounded-t-lg" src={course.image} alt="product image" />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900">{course.title}</h5>
                </a>
                <p class="text-sm font-light">by <span>{course.mentor}</span></p>
                
                <div class="flex items-center justify-between">
                  <span class="text-3xl font-bold text-gray-900">{course.price ? `Rp ${new Intl.NumberFormat('id-ID').format(course.price)}` : "-"}</span>
                  <Link to={'/course/' + course.id}
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Detail Kelas</Link>
                </div>
              </div>
            </div>
            )
            )
          }
          </div>
    </section>
    )
}

export default ListCourseSearch