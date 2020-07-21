import express from 'express';

function Routes() {
  this.router = express.Router();
  
  this.router.get('/', (req, res) => {
    return res.send({msg: "New architecture works really well!!"})
  })
}

export default new Routes().router;