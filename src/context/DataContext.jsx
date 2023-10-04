import axios from "axios";
import React, { createContext, useEffect, useReducer, useState } from "react";
import Loader from "../components/loader";
import { DataReducer, INITIAL_DATA_STATE } from "./dataReducer";

// Create context
export const DataContext = createContext();

// Context wrap
export default function DataContextWrap({ children }) {
   useEffect(() => {
      getData();
   }, []);
   const [loading, setLoading] = useState(true);

   const [state, dispatch] = useReducer(DataReducer, INITIAL_DATA_STATE);

   // Getting all data and passing it to the reducer
   // To serve all components
   const getData = async () => {
      try {
         const response = await axios.get(`${window.api}/data`);
         console.log(response.data.data);
         dispatch({ type: "DATA", payload: response.data.data });
         setLoading(false);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <DataContext.Provider value={{ state, dispatch, getData }}>
         {loading && <Loader />}
         {children}
      </DataContext.Provider>
   );
}
