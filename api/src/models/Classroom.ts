import { Schema, model } from 'mongoose';

export default model('classroom', new Schema({
  name: {
    type: String,
    required: true
  },
},
  {
    timestamps: true
  }));