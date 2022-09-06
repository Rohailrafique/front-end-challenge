import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./channels"

export default configureStore({
    reducer: {
        channels: counterReducer
    }
});
