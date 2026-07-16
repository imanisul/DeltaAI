import React from 'react';
import api from '../../utils/axios.js';

async function sendMessage(payload) {
  
    try {
        const {data} = await api.post("/api/agent/chat", payload);
        return data;
    } catch (error) {
        console.error("SendMessage Error:", JSON.stringify(error?.response?.data || error, null, 2));
        return null;
    }

}

export default sendMessage