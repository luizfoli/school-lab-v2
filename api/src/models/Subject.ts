import { Schema, model } from 'mongoose';

export default model('subject', new Schema({
  name: {
    type: String,
    required: true
  },
},
  {
    timestamps: true
  }));