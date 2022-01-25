import express from "express";
import cors from "cors"
import path from "path";
import bodyParser from "body-parser";
	
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Set static folder
app.use(express.static(path.join(__dirname, "public")));
const Port = process.env.Port || 5000;
app.listen(Port, () => console.log(`server started on port ${Port}`)); 

