import express from 'express';
import { submitContact, getMessages } from '../controllers/contactController.js';

const router = express.Router();

router.post('/', submitContact);
router.get('/', getMessages);

export default router;
