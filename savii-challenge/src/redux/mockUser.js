import { createSlice } from "@reduxjs/toolkit";

export const mockUserSlice = createSlice({
  name: "mockUsers",
  initialState: {
    usersList: [
      { id: 1, name: "Cristiano", messages: ["test message for cristiano", "another test message from cristiano"] },
      {
        id: 2,
        name: "Lionel",
        messages: ["Test message for lionel", "another test message for the same user"],
      }
    ],
  },
  reducers: {
    deleteUsers: (state, { payload }) => {
      state.usersList.splice(payload, 1);
    },
  },
});

export const { deleteUsers } = mockUserSlice.actions;

export default mockUserSlice.reducer;
