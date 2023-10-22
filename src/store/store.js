import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./posts.slice";
import { usersReducer } from "./user.slice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
  devTools: true,
});
