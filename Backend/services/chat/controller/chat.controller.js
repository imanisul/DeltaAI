import Conversation from '../models/conversion.model.js';
import Message from '../models/message.model.js';

export const createConversation = async (req, res) => {
    try {
        const userId = req.headers["x-user-id"];
        console.log("userId", userId);

        const conversation = await Conversation.create({
            userId : userId
        });

        res.status(200).json(conversation);


    } catch (error) {
         res.status(500).json({
            message:`Error in Creating Conversation ${error}`
         });

    }
};


export const getConversations = async (req, res) => {
    try {
        const userId = req.headers["x-user-id"];
        console.log("userId", userId);

        const conversations = await Conversation.find({
            userId : userId
        }).sort({updatedAt:-1});

        res.status(200).json(conversations);


    } catch (error) {
         res.status(500).json({
            message:`Error in Getting Conversation ${error}`
         });

    }
};

export const updateConversation = async (req, res) => {
    try {
        const {id, title} = req.body;


        const conversation = await Conversation.findByIdAndUpdate(id, {
            title
        });

        res.status(200).json(conversation);


    } catch (error) {
         res.status(500).json({
            message:`Error in Updating Conversation ${error}`
         });

    }
};

export const savedMessage = async (req, res) => {
    try {
        const {conversationId, role, content} = req.body;
        const message = await Message.create({
            conversionId: conversationId,
            content,
            role
        });
        return res.status(200).json(message);
    } catch (error) {
        return res.status(500).json({
            message: `Error Saving Message ${error}`
        })
    }
};

export const getMessages = async (req, res) => {
    try {
        const messages = await Message.find({
            conversionId: req.params.conversationId
        }).sort({createdAt:-1});
        return res.status(200).json(messages);
    } catch (error) {
        return res.status(500).json({
            message: `Error Finding Message ${error}`
        })
    }
};


