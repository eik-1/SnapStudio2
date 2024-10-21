import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

import modelRoutes from "./routes/replicateRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const port = 3000;
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/models", modelRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
