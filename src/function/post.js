import axios from "axios";

export const post = async (query, data) => {
   try {
      console.log(data);
      const response = await axios.post(`${window.api}${query}`, data, {
         headers: {
            "auth-pass": getToken(),
         },
      });
      return response.data;
   } catch (error) {
      console.log(error);
      throw error;
   }
};
export const getToken = () => {
   const pass = sessionStorage.getItem("auth-pass");
   if (!pass) return (window.location.href = "/admin/login");

   return pass;
};
