import { useNavigate } from "react-router-dom"
const ListNavbar = ({linkActive, user, handleLogout}) => {
  console.log(user)
    const navigate = useNavigate()
    return (
        <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-cta"
      >
        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
          <li>
            <a
              href="#"
              class={
                linkActive === "home"
                  ? "block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700"
                  : "block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
              }
              aria-current="page"
              onClick={() => navigate('/')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              class={
                linkActive === "course"
                  ? "block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700"
                  : "block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
              }
              onClick={() => navigate('/course')}
            >
              Course
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 "
            >
              Dashboard
            </a>
          </li>
          <li>
          <a
              href="#"
              class={
                linkActive === "transaction"
                  ? "block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700"
                  : "block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
              }
              onClick={() => navigate('/transaction')}
            >
              Transaction
            </a>
          </li>
          {user?.name || user?.data.name
          ? (
            <>
            
            <button
                type="button"
                class="block md:hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center "
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )
            
            
           : (
            <>
              <button
                type="button"
                class="block md:hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center "
                onClick={() => navigate('/login')}
              >
                Login
              </button>
              <button
                type="button"
                class="block md:hidden text-black bg-transparent hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2 text-center "
                onClick={() => navigate('/register')}
              >
                Register
              </button>
            </>
          )}
        </ul>
      </div>
    )
}

export default ListNavbar;