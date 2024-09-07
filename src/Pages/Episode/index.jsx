import { useEffect } from "react";
import HomeNavbar from "../Components/HomeNavbar";
import ListEpisode from "../Components/ListEpisode";
import { getCourseEpisodes } from "../../services/Episode";
import { checkStatusTransaction } from "../../services/Transaction";
import { getCourseById } from "../../services/CourseAdmin";
import { useState } from "react";
import { useParams } from "react-router-dom";

const EpisodePage = () => {
  const [episodes, setEpisodes] = useState([]);
  let getUser = JSON.parse(sessionStorage.getItem("user"));
  const [status, setStatus] = useState("");
  const [course, setCourse] = useState({});
  const { id } = useParams();
  const { episodeId } = useParams();
  const handleFetchEpisode = async () => {
    try {
      const response = await getCourseEpisodes(id);
      setEpisodes(response);
    } catch (error) {
      console.error("error fetch data", error);
    }
  };

  
  const handleFetchCourse = async () => {
    try {
      const response = await getCourseById(id);
      setCourse(response.data);
    } catch (error) {
      console.error("error fetch data", error);
    }
  };

  
  const getLinkYoutube = () => {
    const episode = episodes.data?.find((ep) => ep.id == episodeId);
    if (episode) {
      const url = new URL(episode.link);
      return url.pathname.split("/")[2] + url.search;
    }
    return "";
  };

  const handleCheckTransaction = async () => {
    let checkTransaction = await checkStatusTransaction(getUser.id, id);
    if (checkTransaction) {
      setStatus(checkTransaction.message);
    }
  };

  useEffect(() => {
    handleFetchEpisode();
    handleFetchCourse()
    handleCheckTransaction();
  }, []);
  return (
    <div>
      <HomeNavbar linkActive="course" />
      <ListEpisode episodes={episodes} getLinkYoutube={getLinkYoutube()} episodeId={episodeId} courseId={id} courseTitle={course.title} status={status} />
    </div>
  );
};

export default EpisodePage;
