import express from 'express';
import StudentController from '../controllers/StudentController';

function StudentRoutes() {
  this.router = express.Router();

  this.router.delete('/student', StudentController.delete);
  this.router.get('/student', StudentController.get);
  this.router.post('/student', StudentController.post);
}

export default new StudentRoutes().router;