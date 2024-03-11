import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        title: "",
        country: "",
        city: ""
    }
};

export const searchJobsSlice = createSlice({
    name: "searchJobs",
    initialState,
    reducers:  {
        searchByJobs: (state, actions) => {

            const { nameJobChoice, countryChoice, cityChoice } = actions.payload

            state.value.title = nameJobChoice;
            state.value.country = countryChoice;
            state.value.city = cityChoice;
        }
    }
})

export const { searchByJobs } = searchJobsSlice.actions;
export default searchJobsSlice.reducer;
