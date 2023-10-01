import axios from "axios";

export const post = async (query, data) => {
   try {
    console.log(data)
      const response = await axios.post(`${window.api}${query}`, data);
      return response.data
   } catch (error) {
      console.log(error);
      throw error
   }
};
