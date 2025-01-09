import express, { Application } from "express";
import cors from "cors";
import bodyparser from "body-parser";
import { logger } from "./utils/logger";
import testRouter from "./routes/test.routes";
import medicineRouter from "./routes/medicine.routes";

export const app = (PORT: number) => {
  try {
    const app: Application = express();

    app.use(
      cors({
        origin: "*",
      })
    );
    app.use(bodyparser.json());

    app.use("/api/v1/tests", testRouter);
    app.use("/api/v1/medicines", medicineRouter);

    app.listen(PORT, () => console.log(`App listening port ${PORT}...`));
  } catch (e) {
    logger((e as Error).message, "APP");
    throw e;
  }
};
