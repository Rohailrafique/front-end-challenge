import { createSlice } from "@reduxjs/toolkit";

export const mockUserSlice = createSlice({
    name: "mockUsers",
    initialState:{
      usersList: [ 
        {id: 1, name: 'Cristiano', messages:["123", "45678"]},
        {id: 2, name: 'Lionel', messages:["123bjhbjhbjhbjhbjhbjhbjh", "hbjhbjhbjhbjhb"] },
        {id: 3, name: 'Bruno', messages:["bjhbsjbnskjbksjb", "hbjhbjhbjhbjhb"] },
    ]},
    reducers: { 
      deleteUsers: (state, {payload}) => {
        state.usersList.splice(payload, 1)       }
    }


})

export const { deleteUsers} = mockUserSlice.actions;

export default mockUserSlice.reducer;