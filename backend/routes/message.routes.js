import express from "express";
import  protectRoute  from "../middleware/protectRoute.js";
import { getMessage, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.post("/:id",protectRoute,getMessage)
router.post("/send/:id",protectRoute,sendMessage)

export default router;