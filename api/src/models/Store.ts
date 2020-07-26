import { Schema, model } from 'mongoose';

export default model('store', new Schema({
  name: {
    type: String,
    required: true
  },
},
  {
    timestamps: true
  }));