import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getAllPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { getAllPosts } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
