const mongoose = require('mongoose');

export interface GroupStructure {
  _id?: string;
  id?: number;
  title?: string;
}

const groupSchema = new mongoose.Schema({
  title: { type: String },
  id: { type: Number },
}, {
  timestamps: true,
});

export const GroupModel = mongoose.model('Group', groupSchema);