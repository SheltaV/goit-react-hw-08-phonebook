import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterReducer";
import { persistedContactReducer } from "./contactReducer";
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { authReducer } from "./Auth/authSlice";

export const store = configureStore({
  reducer: {
        auth: authReducer,
        // contacts: contactReducer,
        contacts: persistedContactReducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)