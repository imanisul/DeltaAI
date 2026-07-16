import React, { useState } from 'react';

import {Mic, Paperclip, Send} from 'lucide-react';
import sendMessage from '../features/sendMessage';
import { useDispatch, useSelector } from 'react-redux';
import { setMessages, addMessage, setIsLoading } from '../redux/messageSlice.js';
import getMessages from '../features/getMessages.js';
import { createConversation } from '../features/createConversion.js';
import { addConversation, setConversation, setConversationTitle, setSelectedConversation } from '../redux/conversationSlice.js';
import { updateConversation } from '../features/updateConversation.js';

function ChatInput() {

  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { selectedConversation } = useSelector(
    (state) => state.conversation
  );
  const handleSendMessage = async () => {
      let conversation = selectedConversation
    if(!conversation){
      
      const conv = await createConversation();
      dispatch(setSelectedConversation(conv));
      dispatch(addConversation(conv))
       conversation = conv
    };

    if(conversation.title == "New Chat"){
       await updateConversation({id:conversation?._id,title:value.trim()});

       dispatch(setConversationTitle({conversationId: conversation?._id, title:value.slice(0,40)}))
    }


    const promptText = value.trim();
    if (!promptText) return;

    const payload = {
      prompt: promptText,
      conversationId:conversation?._id
    }
    
    dispatch(addMessage({
        _id: Date.now().toString(),
        role: 'user',
        content: promptText
    }));

    setValue("");
    dispatch(setIsLoading(true));
    const data = await sendMessage(payload);
    console.log(data)

    if (conversation?._id) {
        const fetchedMessages = await getMessages(conversation._id);
        dispatch(setMessages(fetchedMessages));
    }
    dispatch(setIsLoading(false));
  }

  return (
    <div className='w-full overflow-hidden px-3 md:px-5 py-4 border-t border-white/[0.06] bg-[#0d0f14]'>
      <div className='flex flex-col gap-2 bg-white/[0.03] border border-white/[0.07]
      rounded-2xl px-4 pt-3.5 pb-3'>

        <textarea
        onChange={(e)=>setValue(e.target.value)}
        value={value}
        placeholder='What are you looking for?'
        className='w-full bg-transparent outline-none text-[14px] text-slate-200 placeholder:text-slate-600
        leading-relaxed [scrollbar-width:none] [&::-webkit-scrollbar]:hidden disabled:opacity-50' rows={3}
        />

        <div className='flex items-center justify-between'>

          <div className='flex items-center gap-1'>
              <button className='flex items-center justify-center w-8 h-8 rounded-lg text-slate-600
              hover:text-slate-400 hover:bg-white/[0.05] border border-transparent hover:border-white/[0.06]
              transition-all duration-150 bg-transparent cursor-pointer'>
                <Paperclip size={16}/>
              </button>
              <button className='flex items-center justify-center w-8 h-8 rounded-lg text-slate-600
              hover:text-slate-400 hover:bg-white/[0.05] border border-transparent hover:border-white/[0.06]
              transition-all duration-150 bg-transparent cursor-pointer'>
                <Mic size={16}/>
              </button>
          </div>

          <button 
          disabled={!value}
          onClick={handleSendMessage}
          className={`flex items-center justify-center w-8 h-8 rounded-lg border-none cursor-pointer 
          transition-all duration-150 ${value.trim() ? "bg-linear-to-br from-indigo-500 to-violet-700 hover:opacity-90 text-white":
            "bg-white/[0.05] text-slate-600 cursor-not-allowed"}`}>
            <Send size={16}/>
          </button>

        </div>

      </div>
    </div>
  )
}

export default ChatInput