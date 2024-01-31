import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../redux/count/countSlice';
import welcomeEmailSlice from '../redux/welcomeEmail/welcomeEmailSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    email: welcomeEmailSlice
  },
})