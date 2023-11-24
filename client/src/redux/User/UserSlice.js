
// Import the CreateSlice function from the Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state of the user slice
const initialState = {
    currentUser: null, // The current user object
    error: null, // Any error that occurs during user actions
    loading: false, // Indicates if the user slice is in a loading state
};

// Create the user slice using the CreateSlice function
const userSlice = createSlice({
    name: "user", // The name of the slice
    initialState, // The initial state of the slice
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        }, 
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;