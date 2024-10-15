import express from "express";

import {
  trainOstrisModel,
  runUserModel,
} from "../controllers/replicateController";

const router = express.Router();

router.post("/train", trainOstrisModel);
router.post("/run", runUserModel);

export default router;
