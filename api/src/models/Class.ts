import { Schema, model } from 'mongoose';

export default model('class', new Schema({
  name: {
    type: String,
    required: true
  },
},
  {
    timestamps: true
  }));