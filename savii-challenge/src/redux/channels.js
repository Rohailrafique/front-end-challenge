import { createSlice } from "@reduxjs/toolkit";

export const channelsSlice = createSlice({
  name: "channels",
  initialState: {
    channelsList: [
      {
        id: 1,
        name: "general",
        messages: [
          "test message for channel general",
          "general channel messages will appear here",
        ],
        pic: "https://i2-prod.mirror.co.uk/incoming/article5301135.ece/ALTERNATES/n615/Manchester-United-v-Arsenal-FA-Cup-Quarter-Final.jpg",
      },
      {
        id: 2,
        name: "extra",
        messages: [
          "extra messages to show here",
          "another message in extra channel",
        ],
        pic: "https://i.guim.co.uk/img/media/510b9464150930f014d7d942a005d334f9d3405e/0_346_5184_3110/master/5184.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=2abbb88ed71011f43789b28b2aa11221",
      },
    ],
    selectedChannel: {},
  },
  reducers: {
    addNewChannel: (state, action) => {
      state.channelsList.push(action.payload);
    },
    deleteChannels: (state, { payload }) => {
      state.channelsList.splice(payload, 1);
    },
    setSelectedChannel: (state, payload) => {
      state.selectedChannel = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewChannel, deleteChannels, setSelectedChannel } =
  channelsSlice.actions;

export default channelsSlice.reducer;
