import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

export default class FeaturedRooms extends Component {
  // The contextType property on a class can be assigned a Context object created by React.createContext().
  // This let you consume the nearest current value of that Context type using this.context. You can reference this in any lifecycle methods including the render function
  static contextType = RoomContext;
  render() {
    // The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables
    // Here, we are accessing the values from featuredRooms props and we rename it rooms from this.context(RoomContext)
    // We also have access to loading prop
    let { loading, featuredRooms: rooms } = this.context;

    // Here we display the room component. Only featured rooms here
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {/* Here, if loading is true, we display the loading component. Else, we display the room component */}
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
