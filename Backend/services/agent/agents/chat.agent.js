import {getModel} from '../config/llm.models.js'

export const chatAgent = async (state) => {
    const llm = await getModel("chat");

    const systemPrompt = "You are DeltaAI, an AI Assistant"
    const response = await llm.invoke([
        ["system", systemPrompt],
        ["human", state.prompt]
    ]);


    return {
        ...state,
        aiResponse:response.content
    }
};