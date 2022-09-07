import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: [],
// }
export const channelsSlice = createSlice({
  name: "channels",
  initialState: {
    channelsList: []
  },
  reducers: {
    addNewChannel: (state, action) => {
      console.log(state.channels)
      console.log(action.payload)
     state.channelsList.push(action.payload)
    }
  },
});

// Action creators are generated for each case reducer function
export const { addNewChannel } = channelsSlice.actions;

export default channelsSlice.reducer;
