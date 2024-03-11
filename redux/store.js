import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../redux/count/countSlice';
import welcomeEmailSlice from '../redux/welcomeEmail/welcomeEmailSlice';
import dataMainSlice from './dataMain/dataMainSlice';
import searchHomeSlice from './searchHome/searchHomeSlice';
import searchJobsSlice from '../redux/searchJobs/searchJobsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    email: welcomeEmailSlice,
    data: dataMainSlice,
    search: searchHomeSlice,
    searchJobs: searchJobsSlice
  },
})