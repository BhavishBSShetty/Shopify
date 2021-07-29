import React, { createContext, useContext, useReducer } from "react";

//prepare data layer
export const StateContext = createContext();

//wrap app and provides data layer to each req comp
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull info from data layer
export const useStateValue = () => useContext(StateContext);
