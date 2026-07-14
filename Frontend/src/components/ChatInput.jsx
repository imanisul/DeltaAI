import React from 'react'

function ChatInput() {
  return (
    <div className='w-full overflow-hidden px-3 md:px-5 py-4 border-t border-white/[0.06] bg-[#0d0f14]'>
      <div className='flex flex-col gap-2 bg-white/[0.03] border border-white/[0.07]
      rounded-2xl px-4 pt-3.5 pb-3'>

        <textarea
        placeholder='What are you looking for?'
        className='w-full bg-transparent outline-none text-[14px] text-slate-200 placeholder:text-slate-600
        leading-relaxed [scrollbar-width:none] [&::-webkit-scrollbar]:hidden disabled:opacity-50' rows={3}
        />

        <div></div>

      </div>
    </div>
  )
}

export default ChatInput