import {Router} from 'express';
import { createConversation, getConversations, getMessages, savedMessage, updateConversation} from '../controller/chat.controller.js';

const router = Router();

router.get('/create-conversation', createConversation);
router.get('/get-conversations', getConversations);
router.post('/update-conversation', updateConversation);
router.post('/save-message', savedMessage);
router.get('/get-messages/:conversationId', getMessages);


export default router;