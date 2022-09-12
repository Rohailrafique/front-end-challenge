import { createSlice } from "@reduxjs/toolkit";

export const mockUserSlice = createSlice({
  name: "mockUsers",
  initialState: {
    usersList: [
      {
        id: 1,
        name: "Cristiano",
        messages: [
          "test message for cristiano",
          "another test message from cristiano",
        ],
        pic: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/1395411.jpg"
      },
      {
        id: 2,
        name: "Lionel",
        messages: [
          "Test message for lionel",
          "another test message for the same user",
        ],
        pic: "https://pbs.twimg.com/media/EgZ2McaWkAA7CXv.jpg"
      },
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
