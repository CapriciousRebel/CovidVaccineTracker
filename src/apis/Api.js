import axios from "axios";
import { getCurrentDate } from "../utils/utils";

export const getCenterByPincode = async (pincode) => {
  let url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${getCurrentDate()}`;
  return axios.get(url, {
    // headers: {
    //   "User-Agent":
    //     "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Mobile Safari/537.36",
    // },
  });
};
