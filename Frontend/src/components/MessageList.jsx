import React from 'react';

import {useSelector} from 'react-redux';
import MessageBubble from './MessageBubble.jsx';

function MessageList() {

  const {selectedConversation} = useSelector(state=>state.conversation);
   const {messages, isLoading} = useSelector(state=>state.messages);


  return (
    <div className='flex-1 overflow-y-auto px-6 py-6 space-y-5 [scrollbar-width:none] [&::webkit-scrollbar]:hidden'>

      {!messages?.length || !selectedConversation ? (
        <div className='h-full flex flex-col items-center justify-center gap-4 text-center'>
            <div className='flex flex-col gap-1.5'>
                <h1 className='text-[20px] font-semibold text-slate-200 tracking-tight'>DeltaAI</h1>
                <p className='text-[15px] font-semibold text-slate-200 tracking-tight'>How Can I Help You ?</p>
                <p className='text-[13px] text-slate-600 max-w-[260px] leading-relaxed'>Ask me to write code, explain concepts, brainstorm ideas, or answer any question.</p>
            </div>
            <div className='flex flex-wrap justify-center gap-2 mt-1'>
              {["Explain Microservices", "Create a Clone of Youtube", "Generate a Image of Monkey Dancing"].map((s, index)=>(
                <button key={index} className='text-[12px] text-slate-400 bg-white/[0.04] border border-white/[0.07] px-3
                py-1.5 rounded-lg hover:bg-white/[0.08] hover:text-slate-200 transition-colors duration-150 cursor-pointer'>
                  {s}
                </button>
              ))}
            </div>
        </div>
      ):
          <div>
              {messages?.map((msg, i) => (
                  <div key={i}>
                    <MessageBubble role={msg?.role} content={msg?.content}/>
                  </div>
              ))}
              {isLoading && (
                  <div className="flex w-full mb-4 justify-start animate-fade-in-up">
                      <div className="max-w-[80%] rounded-2xl px-4 py-3 text-[14px] bg-white/[0.05] text-slate-200 border border-white/[0.05]">
                          <div className="flex space-x-1.5 items-center h-5">
                              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '-0.3s'}}></div>
                              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '-0.15s'}}></div>
                              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                          </div>
                      </div>
                  </div>
              )}
          </div>
      }
        
    </div>
  )
}

export default MessageList