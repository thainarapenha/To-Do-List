import { configureStore } from "@reduxjs/toolkit";
import projectRedux from "./projectSlicer";

export const store = configureStore({
  reducer: {
    project: projectRedux,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;