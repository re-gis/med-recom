import { app } from "./app";
import { dotenv } from "./utils/dotenv";

dotenv();
const PORT: number = Number(process.env.PORT) || 5000;

app(PORT);
