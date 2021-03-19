import React, { createContext, useContext, useReducer } from 'react'

//preparing Data Layer
export const StateContext = createContext();

//higher order component, wraps app with StateProvider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//pull data from datalayer bu UseStateValue
export const useStateValue = () => useContext(StateContext);