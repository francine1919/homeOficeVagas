import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: "",
    filter: {
        title: "",
        country: "",
        city: ""
    }
};

export const searchHomeSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        newSearch: (state, action) => {
            const { searchEntry, filter } = action.payload
            
            state.search = searchEntry;
            state.filter.title = filter.title;
            state.filter.country = filter.country;
            state.filter.city = filter.city;
        }
    }
})

export const { newSearch } = searchHomeSlice.actions;
export default searchHomeSlice.reducer;