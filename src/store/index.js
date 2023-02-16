import { configureStore } from "@reduxjs/toolkit";

import { mainSlice } from "./mainSlice";

export const store = configureStore({
    reducer: {
        main: mainSlice,
    },
})



// const store = {};

// const defaultState = {
//     todos: [],
//     count: 1
// }

// const reducer = (state = defaultState, action) => {

//     switch (action.type) {
//         case "ADD_TODO": return { ...state, todos: action.payload }
//         default: return { ...state }
//     }

// }

// const dispatcher = (payload) => action;

// const action = {
//     type: "ADD_TODO",
//     payload
// }