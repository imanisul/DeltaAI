import redis from '../../../shared/redis/redis.js';
import { addMessage } from '../config/memory.js';
import {graph} from '../graph/graph.js';
import axios from 'axios';

export const agent = async (req, res) => {
    try {
        const {prompt, conversationId} = req.body;

        redis.del(`messages - ${conversationId}`)

        await addMessage(conversationId, "user", prompt)

        await axios.post(`${process.env.CHAT_SERVICE}/save-message`, {
            conversationId, role:"user", content:prompt
        });

        const result = await graph.invoke({
            prompt, conversationId
        });
        const response = result.aiResponse;

        await addMessage(conversationId, "assistant", response)
        

        await axios.post(`${process.env.CHAT_SERVICE}/save-message`, {
            conversationId, role:"assistant", content:response
        });

        return res.status(200).json(response);

    } catch (error) {
        console.error("Agent Error:", error?.response?.data || error);
        return res.status(500).json({
            message: `Agent error: ${error.message}`,
            details: error?.response?.data || error.stack
        });
    }
}