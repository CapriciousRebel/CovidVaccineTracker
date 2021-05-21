import axios from "axios";
import { getCurrentDate } from "../utils/utils";

export const getCenterByPincode = async (pincode) => {
  let url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${getCurrentDate()}`;
  return axios.get(url);
};
