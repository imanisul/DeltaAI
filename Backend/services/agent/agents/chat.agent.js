import { AIMessage, HumanMessage, SystemMessage } from '@langchain/core/messages';
import {getModel} from '../config/llm.models.js'
import { getMemory } from '../config/memory.js';

export const chatAgent = async (state) => {
    const llm = await getModel("chat");

    const history = await getMemory(state.conversationId);


    const systemPrompt = "You are DeltaAI, a fast and helpful AI Assistant. Keep your responses concise, direct, and conversational. Never explicitly mention that you 'remember' something from previous conversation or that you have 'memory'. Just answer naturally directly using the context provided."
   

    const messages = [
        new SystemMessage(systemPrompt)
    ]

    history.forEach(msg => {
        if(msg.role=="user"){
            messages.push(new HumanMessage(msg.content || ""))
        } else{
             messages.push(new AIMessage(msg.content || ""))
        }
    });

    console.log(messages)

     const response = await llm.invoke(messages);


    return {
        ...state,
        aiResponse:response.content
    }
};