import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './reducers/uiSlice';
import authReducer from './reducers/authSlice';
import logger from 'redux-logger';

// Combine middleware into an array
const middleware = [logger]; 

const store = configureStore({
  reducer: {
    ui: uiReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
});

export default store;