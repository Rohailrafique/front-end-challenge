import { createSlice } from "@reduxjs/toolkit";

export const channelsSlice = createSlice({
  name: "channels",
  initialState: {
    channelsList: [ 
      {id: 1, name: 'general', messages:["Welcome to Slack", "This is a test message"]},
      {id: 2, name: 'extra', messages:["mocking a message", "mocking a message"] }
  ],
  selectedSidebarOption: {},
  },
  reducers: {
    addNewChannel: (state, {payload}) => {
     state.channelsList.push(payload) 
    },
    deleteChannels: (state, {payload}) => {
      state.channelsList.splice(payload, 1)}
  },
    setSelectedSidebarOption: (state, payload) => {
      state.selectedSidebarOption = payload
    }
});


// Action creators are generated for each case reducer function
export const { addNewChannel, deleteChannels, setSelectedSidebarOption} = channelsSlice.actions;

export default channelsSlice.reducer;
