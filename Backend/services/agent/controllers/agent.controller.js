import {graph} from '../graph/graph.js';
import axios from 'axios';

export const agent = async (req, res) => {
    try {
        const {prompt, conversationId} = req.body;
        await axios.post(`${process.env.CHAT_SERVICE}/save-message`, {
            conversationId, role:"user", content:prompt
        });

        const result = await graph.invoke({
            prompt, conversationId
        });
        const response = result.aiResponse;

        await axios.post(`${process.env.CHAT_SERVICE}/save-message`, {
            conversationId, role:"assistant", content:response
        });

        return res.status(200).json(response);

    } catch (error) {
        return res.status(500).json({
            message:`Agent error ${error}`
        });
    }
}