import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getAllUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { getAllUsers } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
