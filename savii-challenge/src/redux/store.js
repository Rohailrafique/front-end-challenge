


import { configureStore } from "@reduxjs/toolkit";
import channelsReducer from "./channels";
import mockUserReducer from "./mockUser"

export default configureStore({
  reducer: {
    channels: channelsReducer,
    user: mockUserReducer,
  },
});
