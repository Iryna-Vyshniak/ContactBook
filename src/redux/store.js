// import { configureStore } from '@reduxjs/toolkit';

// import contactsReducer from './contacts/contacts-slice';
// import filterReducer from './filter/filter-slice';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });

import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { rootReducer } from './root-reducer';

// об'єкт налаштувань, в якому записані, які дані зберігати в Local Storage
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
  // blacklist: ["filter"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// дані з локал сторіджа потрапляли відразу в redux під час завантаження
export const persistor = persistStore(store);
