// store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './favorite';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { createLogger } from 'redux-logger';

const logger = createLogger();

const persistConfig = {
  key: 'root',
  storage,
};

/**
 * Combine all the reducers into one root reducer
 *  */
const reducer = combineReducers({
  [favoriteReducer.name]: favoriteReducer.reducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
