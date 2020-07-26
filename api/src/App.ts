import express from 'express';
import helmet from 'helmet';

import SubjectRoutes from './routes/subject.routes';
import StudentRoutes from './routes/student.routes';

function App() {

  this.app = express();
  configureMiddlewares(this.app);
  configureRoutes(this.app);

  /**
   * Method to configure all middlewares from system.
   * @param app 
   */

  function configureMiddlewares(app) {
    app.use(helmet());
    app.use(express.json());
  }

  /**
   * Method to configure all routes from system.
   * @param app 
   */

  function configureRoutes(app) {
    app.use(SubjectRoutes);  
    app.use(StudentRoutes);
  }
};

export default new App().app;
