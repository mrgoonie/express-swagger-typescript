import express from "express";
import PingController from "../controllers/ping.controller";

const router = express.Router();

const controller = new PingController();

export default router;

router.get("/ping", controller.getMessage.bind(controller));
