import { Link } from "react-router-dom";
import iconLock from '../../assets/icon-lock.svg'
import iconLocked from '../../assets/icon-locked.svg'
import toast, { Toaster } from "react-hot-toast";

const ListEpisode = ({ episodes, getLinkYoutube, episodeId, courseId, courseTitle, status }) => {
  return (
    <section class="md:py-12 h-[100vh] md:pt-[10em] pt-[6em] text-center md:text-start">
      <div class="md:grid md:grid-cols-3 max-w-screen-xl mx-auto ">
        <div class="aspect-w-16 aspect-h-8 md:aspect-w-12 md:aspect-h-8 border rounded-lg md:col-span-2 px-2 md:px-0">
          <iframe
            class="md:w-[100%] md:h-[500px] w-[100%] h-[300px]"
            src={`https://www.youtube.com/embed/${getLinkYoutube}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div class="md:col-span-1 md:ml-6 px-2 md:px-0 mt-4 md:mt-0">
          <h1 class="text-xl font-semibold">{courseTitle}</h1>
          <div class="flex flex-row gap-4 text-xs md:justify-start justify-center mt-4 pb-4">
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
              {episodes.total} Episodes
            </div>
          </div>
          <div class="episode-list overflow-y-auto h-[400px] px-2">
            <ul class="mt-2">
              {episodes.data?.map((episode, index) => (
                <li
                key={index}
                class={`p-2 items-center gap-4 rounded-lg py-4 cursor-pointer ${episodeId == episode.id ? 'bg-indigo-200' : 'bg-white'}`}
                  onclick="this.classList.toggle('bg-blue-300')"
                >
                  <div class="flex items-center gap-2 flex justify-between">
                    {episode.status === 'private' && status === 'UNPAID' ? (
                      <div
                        class="flex flex-row items-center hover:scale-110 hover:duration-200 cursor-pointer"
                        onClick={() => toast.error('Episode ini berbayar')}
                      >
                        {episode.title}
                      </div>
                    ) : (
                      <Link
                        class={`${episodeId == episode.id ? 'font-bold' : 'font-normal'} flex flex-row items-center hover:scale-110 hover:duration-200`}
                        to={`/course/${courseId}/episode/${episode.id}`}
                      >
                        {episode.title}
                      </Link>
                    
                    )}
                   
                    <div class="">
                      {
                        episode.status === 'public' || status === 'PAID' ?
                        (
                          <img src={iconLock} alt="" />
                        )
                        :
                        (
                          <img src={iconLocked} alt="" />
                        )
                      }
                      
                    </div>
                  </div>
                </li>
              ))}

            </ul>
          </div>
        </div>
        <Toaster />
      </div>
    </section>
  );
};

export default ListEpisode;
