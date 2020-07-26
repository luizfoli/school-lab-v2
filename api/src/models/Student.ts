import { Schema, model } from 'mongoose';
import Classroom from './Classroom';

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
  classroom: {
    type: Object,
    required: false
  }
},
  {
    timestamps: true
  }));