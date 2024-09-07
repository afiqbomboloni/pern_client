import Api from "./Api";

export const fetchCourse = async () => {
    try {
      const response = await Api.get("/courses");
      return response.data || [];
    } catch (error) {
      console.error("Error fetching courses:", error);
      throw error;
    }
  }

// Kode lainnya
export const createCourse = async (data) => {
    try {
      
      const response = await Api.post("/courses", data);
      return response.data || [];
    } catch (error) {
      console.error("Error creating course:", error);
      throw error;
    }
}

// kode lainnya
export const getCourseById = async (id) => {
    try {
      const response = await Api.get(`/courses/${id}`);
      return response.data || [];
    } catch (error) {
      console.error("Error fetching course by id:", error);
      throw error;
    }
}

export const updateCourse = async (id, data) => {
    try {
      const response = await Api.put(`/courses/${id}`, data);
      return response.data || [];
    } catch (error) {
      console.error("Error updating course:", error);
      throw error;
    }
}

// kode lainnya
export const deleteCourse = async (id) => {
    try {
      const response = await Api.delete(`/courses/${id}`);
      return response.data || [];
    } catch (error) {
      console.error("Error deleting course:", error);
      throw error;
    }
}
