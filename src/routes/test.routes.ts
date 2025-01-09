import { Router } from "express";
import TestController from "../controllers/test.controller";

const testRouter: Router = Router();

testRouter.post("/recommend-tests", TestController.recommendTests);

export default testRouter;
