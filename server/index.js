import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

import modelRoutes from "./routes/replicateRoutes.js";
import databaseRoutes from "./routes/databaseRoutes.js";

const port = process.env.PORT || 3000;
const app = express();
const corsOptions={
origin:["https://snap-studio.vercel.app", "http://snap-studio.vercel.app"],
  methods:["GET", "POST", "DELETE", "PUT"],
  credentials:true,
  allowedHeaders:[ 'Content-Type',
    'Authorization',
    'Access-Control-Allow-Origin',
    'Access-Control-Allow-Methods',
    'Access-Control-Allow-Headers',]
}
//Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/models", modelRoutes);
app.use("/database", databaseRoutes);
app.get('/', (req, res)=>{
  res.status(200).json({

    status:200,
    message: "working"
  })
})

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
