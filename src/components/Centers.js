import { Center } from "./Center";

export const Centers = (props) => {
  return <Center name="Test" available_capacity="100" />;
  //   const displayCenters = () => {
  //     let availableCenters = getAvailableCenters();
  //     console.log(availableCenters);
  //     if (availableCenters.length !== 0) {
  //       return submitOnce && centers.length !== 0
  //         ? centers.map((center, index) =>
  //             center.sessions.map((session) => <Center />)
  //           )
  //         : submitOnce && (
  //             <h3 className="m-0">
  //               No centers available right now satisfying the requirements, you'll
  //               be notified when slots are found...
  //             </h3>
  //           );
  //     }
  //   };

  //   const getAvailableCenters = () => {
  //     let availableCenters = [];
  //     centers.forEach((center) => {
  //       let available_sessions = center.sessions.filter(
  //         (session) => session.available_capacity !== 0
  //       );
  //       if (available_sessions.length !== 0) {
  //         center.sessions = available_sessions;
  //         availableCenters.push(center);
  //       }
  //     });
  //     return availableCenters;
  //   };
};
