import React from 'react'
import api from '../../utils/axios.js'

async function getMessages(id) {
    try {
        const {data} = await api.get(`/api/chat/get-messages/${id}`)
        console.log(data)
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export default getMessages