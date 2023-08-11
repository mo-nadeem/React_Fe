import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import HomeReducer from "./reducer/HomeReducer";


const persistConfig = {
  key: "root",
  storage: storage,
};

export const rootReducers = combineReducers({
  data: HomeReducer,

});

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(thunk),
});

export default store;