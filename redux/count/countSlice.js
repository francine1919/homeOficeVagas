import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    getJobs: (state, actions) => {
      try {
        

      } catch (error) {
        
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer