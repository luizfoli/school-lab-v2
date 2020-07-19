import { Request, Response } from "express";



const express = require('express');
const app = express();

const helmet = require('helmet');
const morgan = require('morgan');


app.use(helmet());
app.use(morgan('common'));

const PORT = process.env.PORT || 8080;

app.get('/', (req: Request, res: Response) => {
    return res.send({message: "api works fine!"})
});

app.listen(PORT, () => {
    console.log(`Auth Api is runing in port ${PORT}`);
})