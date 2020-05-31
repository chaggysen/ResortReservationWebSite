import React from "react";
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomsList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

// Here, we export RoomContainer component with withRoomConsumer function that passes the data of RoomConsumer to RoomContainer
export default withRoomConsumer(RoomContainer);

// import React from "react";
// import RoomsFilter from "./RoomFilter";
// import RoomsList from "./RoomsList";
// import { RoomConsumer } from "../context";
// import Loading from "./Loading";

// // ContexT.Consumer is a React component that subscribes to context changes. This lets you subsribe to a context within a function component.
// // Requires a function as a child. The function receives the current context value and returns a React node. The valueargument passed to the function will be
// // equal to the value prop of the closest Provider for this context above in the tree. If there is no Provider for this context above, the value argument will be equal to the
// // defaultValue that was passed to createContext()

// export default function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             Hello from Room container
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
