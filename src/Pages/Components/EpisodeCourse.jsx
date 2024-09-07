import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { checkStatusTransaction } from "../../services/Transaction";
import { useEffect, useState } from "react";

const EpisodeCourse = ({ episodes, courses, user }) => {
  const [status, setStatus] = useState("");
  const [isLoading, setLoading] = useState(true);
  const handleCheckTransaction = async () => {
    let checkTransaction = await checkStatusTransaction(user.id, courses.id);
    if (checkTransaction) {
      setStatus(checkTransaction.message);
    }
  };

  useEffect(() => {
    handleCheckTransaction();
    if(courses) {
      setLoading(false);
    }
  }, [courses]);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section class="episode bg-[#eaeaea]">
      <div class="max-w-screen-xl mx-auto py-10 px-4">
        <h2 class="text-2xl font-semibold text-center md:text-start">
          Daftar Episode
        </h2>
        <div class="episode-list">
          <ul class="mt-2">
            {episodes.map((episode, index) => (
              <li
                key={index}
                class="items-center gap-4 border-b border-slate-400 py-4"
              >
                <div class="flex items-center gap-2 flex justify-between">
                  {episode.status === "private" && status === 'UNPAID' ? (
                    <div
                      class="flex flex-row items-center hover:scale-110 hover:duration-200 cursor-pointer"
                      onClick={() => toast.error("Episode ini berbayar")}
                    >
                      <svg
                        class="w-4 h-4 text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m2.707 14.293 5.586-5.586a1 1 0 0 0 0-1.414L2.707 1.707A1 1 0 0 0 1 2.414v11.172a1 1 0 0 0 1.707.707Z"
                        />
                      </svg>
                      {episode.title}
                    </div>
                  ) : (
                    <Link
                      class="flex flex-row items-center hover:scale-110 hover:duration-200"
                      to={`episode/${episode.id}`}
                    >
                      <svg
                        class="w-4 h-4 text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m2.707 14.293 5.586-5.586a1 1 0 0 0 0-1.414L2.707 1.707A1 1 0 0 0 1 2.414v11.172a1 1 0 0 0 1.707.707Z"
                        />
                      </svg>
                      {episode.title}
                    </Link>
                  )}

                  <div class="">
                    {episode.status === "public" || status === 'PAID' ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-lock-open w-5 h-5"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 11m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
                        <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        <path d="M8 11v-5a4 4 0 0 1 8 0" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-lock-open w-5 h-5 text-red-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
                        <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                        <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
                      </svg>
                    )}
                  </div>
                </div>
              </li>
            ))}

            <Toaster />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EpisodeCourse;
