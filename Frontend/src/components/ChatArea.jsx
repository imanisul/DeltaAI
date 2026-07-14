import React, { useEffect } from 'react'
import Nav from './Nav.jsx';
import MessageList from './MessageList.jsx';
import ChatInput from './ChatInput.jsx';
import { useDispatch, useSelector } from 'react-redux';
import getMessages from '../features/getMessages.js';
import { setMessages } from '../redux/messageSlice.js';

function ChatArea() {
  
   const { selectedConversation } = useSelector(
    (state) => state.conversation
  );
  const dispatch = useDispatch()

  useEffect(()=> {
    const getMesg = async () => {
      if(selectedConversation){
      const {data} =  getMessages(selectedConversation?._id)

      dispatch(setMessages(data))
      }

    }

     getMesg()
  }, [selectedConversation])

  return (
    <div className='flex-1 flex flex-col'>
      <Nav/>
      <MessageList/>
      <ChatInput/>
      </div>
  )
}

export default ChatArea;