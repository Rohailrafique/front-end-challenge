import { configureStore } from "@reduxjs/toolkit";
import channelsReducer from "./channels";
import mockUsersReducer from "./mockUser";

export default configureStore({
  reducer: {
    channels: channelsReducer,
    users: mockUsersReducer,
  },
});
