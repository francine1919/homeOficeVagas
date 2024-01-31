import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const welcomeEmailSlice = createSlice({
  name: 'welcomeEmail',
  initialState,
  reducers: {
    registerEmail: (state, action) => {
        const email = action.payload;
        state.value.push(email)
    },
  },
})

// Action creators are generated for each case reducer function
export const { registerEmail } = welcomeEmailSlice.actions

export default welcomeEmailSlice.reducer