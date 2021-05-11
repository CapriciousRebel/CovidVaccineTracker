import axios from "axios";


export const getCenterByPincode = (pincode) =>{

  let url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=400058&date=11-05-2021`;
      axios
        .get(url, {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Mobile Safari/537.36",
          },
        })
        .then((res) => {
          let data = res.data;
          console.log(data);
          // for (c in data.centers) {
          //   for (s in data.centers[c].sessions) {
          //     if (data.centers[c].sessions[s].available_capacity > 0) {
          //       console.log(
          //         "Try Booking for",
          //         data.centers[c].pincode,
          //         data.centers[c].name,
          //         data.centers[c].sessions[s].available_capacity
          //       );
          //       if (process.argv.every((el) => el !== "mute-sound")) {
          //         player.play("./beep.mp3");
          //       }
          //     }
          //   }
          // }
        })
        .catch((err) => console.log(err.response));
}