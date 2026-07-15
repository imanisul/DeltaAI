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
    switch (agent) {
        case "chat":
            return gemini;
        
        case "search":
            return gemini;
        
        case "coding":
            return gemini;
            
    
        default:
            return gemini;
    }
}