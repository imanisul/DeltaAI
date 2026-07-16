import { ChatGroq } from "@langchain/groq";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const groq = new ChatGroq({
    model: "llama-3.1-8b-instant",
    temperature: 0,
    maxTokens: undefined,
    maxRetries: 2,
    // other params...
});

const gemini = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash",
    temperature: 0,
    maxTokens: undefined,
    maxRetries: 2,
    // other params...
});

export const getModel = (agent) => {
    const modelWithFallback = gemini.withFallbacks({
        fallbacks: [groq]
    });

    switch (agent) {
        case "chat":
            return modelWithFallback;
        
        case "search":
            return modelWithFallback;
        
        case "coding":
            return modelWithFallback;
            
        default:
            return modelWithFallback;
    }
}