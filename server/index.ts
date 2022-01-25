import express from "express";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";
import apiRouter from "./api/api.router";

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", apiRouter);

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

const port = process.env.port || 5000;
app.listen(port, () => console.log(`server started on port ${port}`));
