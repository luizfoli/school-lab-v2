import { Request, Response } from 'express';

import Store from '../models/Store';

function StoreController() {

  this.delete = async function (req: Request, res: Response) {

    const id = req.query.id;
    await Store.deleteOne({ _id: id });

    return res.send({ msg: `Store ${id} was deleted` });
  }

  this.get = async function (req: Request, res: Response) {

    const id = req.query.id;

    if (id) {
      const store = await Store.find({ _id: id });
      return res.send({data: store})
    }

    const stores = await Store.find();
    return res.send({data: stores});
  }

  this.post = async function(req: Request, res: Response) {

    const { name } = req.body;
    await Store.create({
      name
    });

    return res.send({msg: 'added'});
  }
}

export default new StoreController();