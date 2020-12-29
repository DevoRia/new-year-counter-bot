const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export interface MessageStructure {
  _id?: string;
  date?: string;
  message_id?: number;
  text?: string;
  user?: string;
  group?: string;
}

const messageSchema = new mongoose.Schema({
  date: { type: Date },
  message_id: { type: Number },
  text: { type: String },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: 'Group'
  }
});

export const MessageModel = mongoose.model('Message', messageSchema);