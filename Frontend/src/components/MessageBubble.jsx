import React from 'react';
import ReactMarkdown from 'react-markdown';

function MessageBubble({role, content}) {
  return (
    <div className={`flex w-full mb-4 animate-fade-in-up ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-[14px] leading-relaxed ${role === 'user' ? 'bg-indigo-600 text-white whitespace-pre-wrap' : 'bg-white/[0.05] text-slate-200 border border-white/[0.05]'}`}>
        {role === 'user' ? (
          content
        ) : (
          <div className="prose prose-invert prose-sm max-w-none text-slate-200">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  )
}

export default MessageBubble