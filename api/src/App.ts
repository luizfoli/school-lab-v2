import express from 'express';
import helmet from 'helmet';

import SubjectRoutes from './routes/subject.routes';

function App() {

  this.app = express();
  this.app.use(helmet());
  this.app.use(express.json());

  this.app.use(SubjectRoutes);  
};

export default new App().app;
