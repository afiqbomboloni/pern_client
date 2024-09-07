import unujaLogo from "../../assets/unuja-logo.png";
import learnSvg from "../../assets/learn.svg";


const Hero = () => {
  let user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <section class="beranda max-w-screen-xl mx-auto md:grid grid-cols-2 md:h-[76vh] mt-[6em] md:mt-0 md:z-0 z-10">
      <div class="flex flex-col justify-center">
        <h1 class="md:text-5xl text-[2em] font-semibold justify-center md:justify-start flex items-center text-center">
          <span>
            <img src={unujaLogo} class="md:w-16 w-10" alt="" />
          </span>
          Unuja Course
        </h1>
        <p class="text-center md:text-start text-md mt-5">
          Website Belajar Coding bahasa Indonesia terlengkap dan mudah dipahami,
          seperti Laravel, Vue, React, Tailwind CSS dan banyak lagi.
        </p>
        <div class="mt-5 flex items-center justify-center md:justify-start">
          <button
            type="button"
            class="gap-2 bg-transparent hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 hover:text-white text-[#2557D6] border-2 border-[#2557D6]"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M1 5h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 1 0 0-2H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2Zm18 4h-1.424a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2h10.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Zm0 6H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 0 0 0 2h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Z" />
            </svg>
            Lihat Kelas
          </button>
          {user?.name || user?.data.name 
          ? (
            ""
          ) : (
            <button
              type="button"
              class="gap-2 bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 text-white"
            >
              <svg
                class="w-5 h-5 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"
                />
              </svg>
              Masuk
            </button>
          )}
        </div>
      </div>
      <div class="flex items-center md:justify-end justify-center ">
        <img src={learnSvg} class="w-[20em] md:w-[30em]" alt="" />
      </div>
    </section>
  );
};

export default Hero;
