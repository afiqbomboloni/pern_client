import Api from "./Api";

export const loginUser = async (email, password) => {
    try {
      console.log("email", email)
      const response = await Api.post("/auth/login", {
        email: email,
        password: password,
      });
  
      return response.data || null;
    } catch (error) {
      console.error("Error logging in user:", error);
      throw error;
    }
  };


export const registerUser = async (name, email, password) => {
    try {
      const response = await Api.post("/auth/register", {
        name: name,
        email: email,
        password: password,
      });
  
      return response.data || null;
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
}