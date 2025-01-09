import { Request, Response } from "express";
import TestService from "../services/test.service";

export default class TestController {
  static async recommendTests(req: Request, res: Response) {
    const { query } = req.body;
    try {
      const tests = await TestService.fetchTestsFromFHIR(query);
      res.json({ tests });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error fetching tests and procedures" });
    }
  }
}
