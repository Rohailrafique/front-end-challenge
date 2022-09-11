import { createSlice } from "@reduxjs/toolkit";

export const channelsSlice = createSlice({
  name: "channels",
  initialState: {
    channelsList: [
      { id: 1, name: 'general', messages: ["123", "45678"] },
      { id: 2, name: 'extra', messages: ["extra 1", "extra 2"] }
    ],
    selectedChannel: {}
  },
  reducers: {
    addNewChannel: (state, action) => {
      state.channelsList.push(action.payload)
    },
    deleteChannels: (state, { payload }) => {
      state.channelsList.splice(payload, 1)
    },
    setSelectedChannel: (state, payload) => {
      state.selectedChannel = payload
    }
  },
});


// Action creators are generated for each case reducer function
export const { addNewChannel, deleteChannels, setSelectedChannel} = channelsSlice.actions;

export default channelsSlice.reducer;
