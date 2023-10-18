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
    persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from "./Auth/authSlice";

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
}

export const store = configureStore({
  reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: persistedContactReducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    })
})


export const persistor = persistStore(store)