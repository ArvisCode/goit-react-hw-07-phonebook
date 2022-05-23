import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactApi';
import { contactsSlice } from './contactsSlise';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: contactsSlice,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
