import { AIMessage, HumanMessage, SystemMessage } from '@langchain/core/messages';
import { getModel } from '../config/llm.models.js';
import { getMemory } from '../config/memory.js';

export const searchAgent = async (state) => {
    const llm = await getModel("search");
    const history = await getMemory(state.conversationId);

    const systemPrompt = "You are DeltaAI, a search and research assistant. Provide concise, factual, and up-to-date information."
   
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

    const response = await llm.invoke(messages);

    return {
        ...state,
        aiResponse: response.content
    }
};