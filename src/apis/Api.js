import axios from "axios";
import { getCurrentDate } from "../utils/GetCurrentDate.js";

export const getCenterByPincode = (pincode) => {
  let url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${getCurrentDate()}`;
  axios
    .get(url)
    .then((res) => {
      let centers = res.data;
      console.log(centers);
      return centers;
    })
    .catch((err) => console.log(err.response));
};
