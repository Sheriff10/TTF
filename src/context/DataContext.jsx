import axios from "axios";
import React, { createContext, useEffect, useReducer } from "react";
import { DataReducer, INITIAL_DATA_STATE } from "./dataReducer";

// Create context
export const DataContext = createContext();

// Context wrap
export default function DataContextWrap({ children }) {
   useEffect(() => {
      getData();
   }, []);

   const [state, dispatch] = useReducer(DataReducer, INITIAL_DATA_STATE);

   // Getting all data and passing it to the reducer
   // To serve all components
   const getData = async () => {
      try {
         const response = await axios.get(`${window.api}/data`);
         console.log(response.data.data);
         dispatch({ type: "DATA", payload: response.data.data });
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <DataContext.Provider value={{ state, dispatch, getData }}>
         {children}
      </DataContext.Provider>
   );
}
