import { Schema, model } from 'mongoose';
import Class from './Class';

export default model('student', new Schema({
  name: {
    type: String,
    required: true
  },
  birthdate: {
    type: Date,
    required: true
  },
  document: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true
  },
  class: {
    type: Class,
    required: true
  }
},
  {
    timestamps: true
  }));