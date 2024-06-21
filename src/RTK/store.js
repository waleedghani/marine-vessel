import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { getApi } from '../RTK/service';

export const store = configureStore({
  reducer: {
    [getApi.reducerPath]: getApi.reducer,
    // wishList: wishListSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getApi.middleware),
});

setupListeners(store.dispatch);
