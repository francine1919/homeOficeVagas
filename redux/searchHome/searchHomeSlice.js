import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        search: "",
        filter: {
            title: "",
            country: "",
            city: ""
        }
    }
};

export const searchHomeSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        newSearch: (state, actions) => {
            const { searchInput, title, country, city } = actions.payload;

            state.value.search = searchInput;
            state.value.filter.title = title;
            state.value.filter.country = country;
            state.value.filter.city = city;

        }
    }
})

export const { newSearch } = searchHomeSlice.actions;
export default searchHomeSlice.reducer;