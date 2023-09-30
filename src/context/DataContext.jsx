import React, { createContext, useReducer } from "react";
import { DataReducer, INITIAL_DATA_STATE } from "./dataReducer";

// Create context
const DataContext = createContext();

// Context wrap
export default function DataContextWrap({ children }) {
   // Getting all data and passing it to the reducer
   // To serve all components

   const [state, dispatch] = useReducer(DataReducer, INITIAL_DATA_STATE);
   return (
      <DataContext.Provider value={{ state, dispatch }}>
         {children}
      </DataContext.Provider>
   );
}
