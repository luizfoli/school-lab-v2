import express from 'express';
import StoreController from '../controllers/StoreController';

function StoreRoutes() {
  this.router = express.Router();

  this.router.delete('/store', StoreController.delete);
  this.router.get('/store', StoreController.get);
  this.router.post('/store', StoreController.post);
}

export default new StoreRoutes().router;