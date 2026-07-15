
import { createSlice } from "@reduxjs/toolkit";


const messageSlice = createSlice({
    name:"message",
    initialState:{
        messages: [],
        isLoading: false,
    },
    reducers:{
       setMessages:(state, action) => {
        state.messages=action.payload
       },
       addMessage:(state, action) => {
        state.messages.push(action.payload)
       },
       setIsLoading:(state, action) => {
        state.isLoading = action.payload;
       }
    }
});

export const {setMessages, addMessage, setIsLoading}=messageSlice.actions;

export default messageSlice.reducer;