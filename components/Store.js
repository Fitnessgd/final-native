import React, { createContext, useReducer } from "react";
import Reducer from "../functions/Reducer";
const initialState = {
    posts: [],
    error: null
};
export default ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}
export const Context = createContext(initialState);