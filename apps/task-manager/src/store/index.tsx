// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/ElementList.services'; 

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    // Otros reductores de tu aplicación, si los tienes
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const setupStore = () => {
  store.dispatch; 
};
