import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  channelsList: [ 
    {id: 1, name: 'general', messages:["123", "45678"]},
    {id: 2, name: 'extra', messages:["123bjhbjhbjhbjhbjhbjhbjh", "hbjhbjhbjhbjhb"] }
]
}
export const channelsSlice = createSlice({
  name: "channels",
  initialState,
  reducers: {
    addNewChannel: (state, action) => {
     state.channelsList.push(action.payload) 
    },
    deleteChannels: (state, {payload}) => {
      console.log(payload)
      state.channelsList.splice(payload, 1)       }
  },
});

// Action creators are generated for each case reducer function
export const { addNewChannel, deleteChannels } = channelsSlice.actions;

export default channelsSlice.reducer;
