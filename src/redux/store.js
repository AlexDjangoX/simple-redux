import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import { userApi } from './services/userApi';
import { jobApi } from './services/jobApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    counterReducer,
    [userApi.reducerPath]: userApi.reducer,
    [jobApi.reducerPath]: jobApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(userApi.middleware, jobApi.middleware),
});

setupListeners(store.dispatch);
