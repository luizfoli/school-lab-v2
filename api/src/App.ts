import express from 'express';
import Routes from './Routes';

import morgan from 'morgan';
import helmet from 'helmet';

function App() {

  this.express = express();
  
  this.express.use(morgan('common'));
  this.express.use(helmet());
  this.express.use(Routes);
};

export default new App().express;