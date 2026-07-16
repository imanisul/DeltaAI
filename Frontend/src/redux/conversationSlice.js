
import { createSlice } from "@reduxjs/toolkit";


const conversationSlice = createSlice({
    name:"conversation",
    initialState:{
        conversations: [],
        selectedConversation:null
    },
    reducers:{
       setConversation:(state, action) => {
        state.conversations=action.payload
       },
       addConversation:(state, action) => {
        state.conversations.unshift(action.payload)
       },
       setSelectedConversation:(state, action) => {
        state.selectedConversation = action.payload
       },

       setConversationTitle:(state, action) => {
         const{ title, conversationId} = action.payload
         state.conversations = state.conversations.map((conv) => (
            conv._id == conversationId?(
                {...conv, title}
            ):conv
         ));
         if(state.selectedConversation?._id==conversationId){
                state.selectedConversation ={...state.selectedConversation, title}
         }
       }
    }
});

export const {setConversation, addConversation, setSelectedConversation, setConversationTitle}=conversationSlice.actions;

export default conversationSlice.reducer;