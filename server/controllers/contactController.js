import Message from '../models/Message.js';

// In-memory fallback if MongoDB Atlas is not yet connected
const inMemoryMessages = [];

export const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please provide name, email, and message.' });
    }

    const newMessageData = {
      name,
      email,
      subject: subject || 'Portfolio Inquiry',
      message,
      createdAt: new Date()
    };

    try {
      // If MongoDB is connected, save to DB
      const saved = await Message.create(newMessageData);
      return res.status(201).json({
        success: true,
        message: 'Thank you! Your message was saved to the database successfully.',
        data: saved
      });
    } catch (dbErr) {
      // Fallback: save to memory
      inMemoryMessages.push(newMessageData);
      console.log('Saved message to memory cache:', newMessageData);
      return res.status(201).json({
        success: true,
        message: 'Thank you! Your message was received successfully.',
        data: newMessageData
      });
    }
  } catch (err) {
    console.error('Contact submit error:', err);
    res.status(500).json({ error: 'Failed to process message.' });
  }
};

export const getMessages = async (req, res) => {
  try {
    try {
      const messages = await Message.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: messages.length, data: messages });
    } catch (e) {
      return res.json({ success: true, count: inMemoryMessages.length, data: inMemoryMessages });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve messages.' });
  }
};
