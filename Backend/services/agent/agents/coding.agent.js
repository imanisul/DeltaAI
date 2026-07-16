import { AIMessage, HumanMessage, SystemMessage } from '@langchain/core/messages';
import { getModel } from '../config/llm.models.js';
import { getMemory } from '../config/memory.js';

export const codingAgent = async (state) => {
    const llm = await getModel("coding");
    const history = await getMemory(state.conversationId);

    const systemPrompt = "You are DeltaAI, an expert software engineer. Provide clear, concise, and accurate code and explanations."
   
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