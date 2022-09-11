import { createSlice } from "@reduxjs/toolkit";

export const mockUserSlice = createSlice({
    name: "mockUser",
    initialState:{
      avatar: "",
      name: "sample user",
      messages:["this is test message number one.", "this is test message number two.", "another test message"]
    },
    reducers: { }


})

// export const { addNewChannel, deleteChannels } = channelsSlice.actions;

export default mockUserSlice.reducer;