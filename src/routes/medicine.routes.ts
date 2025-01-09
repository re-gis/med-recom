import { Router } from "express";
import MedicineController from "../controllers/medicine.controller";

const medicineRouter: Router = Router();

medicineRouter.post(
  "/recommend-medicines",
  MedicineController.recommendMedicines
);

export default medicineRouter;
