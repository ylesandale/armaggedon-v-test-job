import { combineReducers, configureStore } from "@reduxjs/toolkit";
import armaggedonSlice from "./appReducer";

const rootReducer = combineReducers({ app: armaggedonSlice });

export const store = configureStore({ reducer: rootReducer });
