import axios from "axios";
import { dotenv } from "../utils/dotenv";
import { FDA_API_URL } from "../constants/constant";

dotenv();

export default class MedicineService {
  static fetchMedicines = async (query: string, page: number = 1) => {
    const limit = 1000; 
    const skip = (page - 1) * limit;  

    try {
      const response = await axios.get(String(FDA_API_URL), {
        params: {
          search: query,
          limit,
          skip,
        },
      });

      console.log(response.data.results.length)
      return {
        medicines: response.data.results,
        total: response.data.results.length,
      };
    } catch (error) {
      console.error("Error fetching medicines:", error);
      return { medicines: [], total: 0 };
    }
  };
}
