import {useNavigate} from 'react-router-dom'
import ListNavbar from './Atoms/ListNavbar';

const HomeNavbar = ({ linkActive }) => {
  let user = JSON.parse(sessionStorage.getItem('user'))
 
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <div>
      <section class="navbar">
        <nav class="bg-white border-gray-200 fixed w-full top-0 z-10">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="https://flowbite.com/"
              class="flex items-center space-x-3 rtl:space-x-reverse"
            >
             
              <span class="self-center text-2xl font-semibold whitespace-nowrap">
                Unuja Course
              </span>
            </a>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
             {
              user?.name || user?.data.name
              ?
              (
                <>
                <span className="mr-4 mt-2">{user.name || user.data.name}</span>
                <button
                type="button"
                class="md:block hidden text-black bg-white hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2 text-center border-2 border-blue-500"
                onClick={handleLogout}
              >
                Logout
              </button>
                </>
              )
              :
              (
                <>
                 <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center  md:block hidden mr-3"
                onClick={() => navigate('/login')}
              >
                Login
              </button>
              <button
                type="button"
                class="md:block hidden text-black bg-white hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2 text-center border-2 border-blue-500"
                onClick={() => navigate('/register')}
              >
                Register
              </button>
                </>
              )
             }
              <button
                data-collapse-toggle="navbar-cta"
                type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                aria-controls="navbar-cta"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <ListNavbar linkActive={linkActive} user={user} handleLogout={handleLogout} />
          </div>
        </nav>
      </section>
    </div>
  );
};

export default HomeNavbar;
