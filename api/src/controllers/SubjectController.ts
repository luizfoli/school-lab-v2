import { Request, Response } from 'express';

import Subject from '../models/Subject';

function SubjectController() {

  this.delete = async function (req: Request, res: Response) {

    const id = req.query.id;
    await Subject.deleteOne({ _id: id });

    return res.send({ msg: `Store ${id} was deleted` });
  }

  this.get = async function (req: Request, res: Response) {

    const id = req.query.id;

    if (id) {
      const subject = await Subject.find({ _id: id });
      return res.send({data: subject})
    }

    const subjects = await Subject.find();
    return res.send({data: subjects});
  }

  this.post = async function(req: Request, res: Response) {

    const { name } = req.body;
    await Subject.create({
      name
    });

    return res.send({msg: 'added'});
  }
}

export default new SubjectController();