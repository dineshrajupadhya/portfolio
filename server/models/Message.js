import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true
    },
    subject: {
      type: String,
      default: 'General Portfolio Inquiry',
      trim: true
    },
    message: {
      type: String,
      required: [true, 'Message text is required']
    },
    ipAddress: String
  },
  {
    timestamps: true
  }
);

export default mongoose.models.Message || mongoose.model('Message', messageSchema);
