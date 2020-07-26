import express from 'express';
import helmet from 'helmet';

import StoreRoutes from './routes/store.routes';

function App() {

  this.app = express();
  this.app.use(helmet());
  this.app.use(express.json());

  this.app.use(StoreRoutes);  
};

export default new App().app;
