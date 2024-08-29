"use client"
import { createContext, useContext, useReducer } from "react";
import { opportunityImageInit, opportunityImageInitialState, opportunityImageReducer } from "@/reducers/OpportunityImageReducer";


export const MainContext = createContext();


export default function MainContextProvider({ children }) {
    const [opportunityImageState, opportunityImageDispatch] = useReducer(opportunityImageReducer, opportunityImageInitialState, opportunityImageInit);


    return (
        <MainContext.Provider value={{ 
            opportunityImageState, opportunityImageDispatch
        }}>
        { children }
        </MainContext.Provider>
      )
}


export const MainContextState = () => {
    return useContext(MainContext)
  }
 
