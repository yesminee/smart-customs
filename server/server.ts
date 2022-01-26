const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
import dotenv from "dotenv";
dotenv.config();
// create our app w/ express
const app = express();
const http = require('http').createServer(app);
import authRouter from './models/users/user.controller';


//cors middlware
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/api/v1/auth', authRouter);

//DB configuration
import  db from './config/keys';
//Connect to Mongo

mongoose.connect(db.mongoUrl,{useNewUrlParser:true})
.then(()=>{
    console.log("MongoDB Connected Great ");
})
.catch(err=>console.log(err));


//Port
const PORT = process.env.PORT ||5000;

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));