import { Link, useNavigate } from "react-router-dom";
import { checkStatusTransaction } from "../../services/Transaction";
import { useEffect, useState } from "react";
const HeroDetail = ({ course, totalEpisodes }) => {
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  let getUser = JSON.parse(sessionStorage.getItem("user"));
  const handleDaftarKelas = () => {
    
    let cart = {
      name: getUser.name || getUser.data.name,
      email: getUser.email || getUser.data.email,
      price: course.price,
      user_id: getUser.id || getUser.data.id,
      course_id: course.id,
    };
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate(`/course/${course.id}/transaction`);
  };
  const handleCheckTransaction = async () => {
    let checkTransaction = await checkStatusTransaction(getUser.id, course.id);
    if (checkTransaction) {
      setStatus(checkTransaction.message);
    }
  };

  useEffect(() => {
    handleCheckTransaction();
    if(course) {
      setLoading(false);
    }
  }, [course]);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section class="beranda grid md:grid-cols-3 max-w-screen-xl mx-auto pt-32 pb-10 text-center md:text-start">
      <div class="md:col-span-1 flex md:justify-end justify-center items-center md:hidden block">
        <img class="md:w-[70%] w-full" src={course.image} alt="" />
      </div>
      <div class="md:col-span-2">
        <div class="flex flex-row gap-4 text-xs md:justify-start justify-center mt-4">
          <div class="text-slate-400 flex items-center gap-2">
            <svg
              class="w-6 h-6 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M9 8h10M9 12h10M9 16h10M5 8h0m0 4h0m0 4h0"
              />
            </svg>
            {totalEpisodes} Episodes
          </div>
        </div>
        <div class="mt-8 px-2 md:px-0">
          <h1 class=" text-3xl font-600">{course.title}</h1>
          <p class="mt-8">{course.description}</p>
        </div>
        <div class="mt-8 text-5xl font-bold">
          {course.price
            ? `Rp ${new Intl.NumberFormat("id-ID").format(course.price)}`
            : "-"}
        </div>
        <div class="mt-8">
        {status === "PAID" ? 
        (

          <Link
            type="button"
            to={`/course/${course.id}/episode/1`}
            class="gap-2 bg-[#2557D6]/90  focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm md:px-6 md:py-2.5 px-8 py-6 w-[90%] md:w-[30%] items-center justify-center flex text-center inline-flex items-center me-2 mb-2  hover:scale-110 hover:duration-200 text-white "
          >
           
            <span class="text-2xl">
              Lanjutkan Kelas
            </span>
          </Link>
        ) : 
        (
          
          <button
            type="button"
            onClick={handleDaftarKelas}
            class="gap-2 bg-[#2557D6]/90  focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm md:px-6 md:py-2.5 px-8 py-6 w-[90%] md:w-[30%] items-center justify-center flex text-center inline-flex items-center me-2 mb-2  hover:scale-110 hover:duration-200 text-white "
          >
            <svg
              class="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 10 16"
            >
              <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
            </svg>
            <span class="text-2xl">
              Daftar Kelas
            </span>
          </button>
        )}
        </div>
      </div>
      <div class="md:col-span-1 md:flex md:justify-end justify-center items-center md:items-end hidden">
        <img class="md:w-[70%] w-full" src={course.image} alt="" />
      </div>
    </section>
  );
};

export default HeroDetail;
