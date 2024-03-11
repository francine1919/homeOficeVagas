import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
};

const dataMainSlice = createSlice({
    name: "dataMainSlice",
    initialState,
    reducers: {
        dataJobs: (state, actions) => {
            state.value = actions.payload
        }
    }
})

export const { dataJobs } = dataMainSlice.actions;
export default dataMainSlice.reducer;