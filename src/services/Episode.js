import Api from "./Api";

export const getCourseEpisodes = async (course_id) => {
    try {
      const response = await Api.get(`/episode-courses?course_id=${course_id}`);
      return response.data || [];
    } catch (error) {
      console.error("Error fetching course episodes:", error);
      throw error;
    }
  }

// kode lainnya
export const createEpisode = async (data) => {
    try {
      const response = await Api.post("/episodes", data);
      return response.data;
    } catch (error) {
      console.error("Error creating episode:", error);
      throw error;
    }
  }

export const deleteEpisode = async (id) => {
    try {
      const response = await Api.delete(`/episodes/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting episode:", error);
      throw error;
    }
}

export const getEpisodeById = async (id) => {
  try {
    const response = await Api.get(`/episodes/${id}`)
    return response.data
  } catch (error) {
    console.error("Error get episode:", error);
      throw error;
  }
}


export const updateEpisode = async (id, data) => {
  try {
    const response = await Api.put(`/episodes/${id}`, data)
    console.log(response, "response")
    return response.data
  } catch (error) {
    console.error("Error update episode:", error);
      throw error;
  }
}

