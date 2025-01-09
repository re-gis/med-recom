import axios from "axios";
import { dotenv } from "../utils/dotenv";
import { EDITION, SNOMED_CT_API_URL, VERSION } from "../constants/constant";

dotenv();

export default class TestService {
  static async fetchTests(query: string) {
    const username = "dregis";
    const password = "0786430853Dmc!";
    const credentials = Buffer.from(`${username}:${password}`).toString(
      "base64"
    );
    const url = `https://loinc.regenstrief.org/searchapi/loincs?query=${query}`; 
    try {
      const response = await axios.get(url, {
        headers: {
          "Authorization": `Basic ${credentials}`,
          "Accept":"application/json"
        }
      });
      return response.data; 
    } catch (error) {
      console.error("Error fetching FHIR data", error);
      throw error; 
    }
  }
}
