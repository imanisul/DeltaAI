import {getModel} from '../config/llm.models.js'

export const chatAgent = async (params) => {
    const llm = await getModel("chat");

    const systemPrompt = "You are DeltaAI, an AI Assistant"
    const response = await llm.invoke([
        {
            "role":"system",
            "content":systemPrompt
        },
        {
            "role": "human",
            "content":state.prompt
        }
    ]);


    return {
        ...state,
        aiResponse:response.content
    }
};