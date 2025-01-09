import axios from "axios";
import { dotenv } from "../utils/dotenv";
import {
  LOINC_API_PASS,
  LOINC_API_URL,
  LOINC_API_USERNAME,
} from "../constants/constant";

dotenv();

export default class TestService {
  static async fetchTests(query: string) {
    const credentials = Buffer.from(
      `${String(LOINC_API_USERNAME)}:${String(LOINC_API_PASS)}`
    ).toString("base64");
    const url = `${String(LOINC_API_URL)}?query=${query}`;
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Basic ${credentials}`,
          Accept: "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching FHIR data", error);
      throw error;
    }
  }
}
