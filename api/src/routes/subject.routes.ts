import express from 'express';
import SubjectController from '../controllers/SubjectController';

function SubjectRoutes() {
  this.router = express.Router();

  this.router.delete('/subject', SubjectController.delete);
  this.router.get('/subject', SubjectController.get);
  this.router.post('/subject', SubjectController.post);
}

export default new SubjectRoutes().router;