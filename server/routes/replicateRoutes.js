import express from "express";

import {
  trainOstrisModel,
  runUserModel,
} from "../controllers/replicateController.js";
import upload from "../middlewares/uploadMiddleware.js";

const router = express.Router();

router.post("/train", upload.single("file"), trainOstrisModel);
router.post("/run", runUserModel);

export default router;
