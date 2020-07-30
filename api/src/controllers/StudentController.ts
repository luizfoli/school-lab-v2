import { Request, Response } from 'express';

import Student from '../models/Student';

function StudentController() {

  this.delete = async function (req: Request, res: Response) {

    const id = req.query.id;
    await Student.deleteOne({ _id: id });

    return res.send({ msg: `student ${id} was deleted` });
  }

  this.get = async function (req: Request, res: Response) {

    const id = req.query.id;

    if (id) {
      const student = await Student.find({ _id: id });
      return res.send({data: student})
    }

    const stores = await Student.find();
    return res.send({data: stores});
  }

  this.post = async function(req: Request, res: Response) {

    const {
      name,
      birthdate,
      document,
      sex,
      classroom } = req.body;

    await Student.create({
      name,
      birthdate,
      document,
      sex,
      classroom
    });

    return res.send({msg: 'added'});
  }

  this.put = async function (req: Request, res: Response) {

    const {
      id,
      name,
      birthdate,
      document,
      sex,
      classroom
    } = req.body;

    const student = await Student.findById(id); 
  }
}

export default new StudentController();