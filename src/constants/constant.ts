import { dotenv } from "../utils/dotenv";

dotenv();

export const FDA_API_KEY = process.env.FDA_API_KEY;
export const RXNORM_API_URL = process.env.RXNORM_API_URL;
export const SNOMED_CT_API_URL = process.env.SNOMED_CT_API_URL;
export const OPENAI_API_KEY = null;
export const GOOGLE_MAPS_API_KEY = null;
export const FDA_API_URL = process.env.FDA_API_URL;
export const EDITION = process.env.EDITION
export const VERSION = process.env.VERSION;