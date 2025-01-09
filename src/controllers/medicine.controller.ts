import { Request, Response } from "express";
import MedicineService from "../services/medicine.service";

export default class MedicineController {
  static async recommendMedicines(req: Request, res: Response) {
    const { query } = req.body;
    try {
      const medicines = await MedicineService.fetchMedicines(query);
      res.json({ medicines });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error fetching medicines" });
    }
  }
}
