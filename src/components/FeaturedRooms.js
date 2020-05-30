import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";

export default class FeaturedRooms extends Component {
  // The contextType property on a class can be assigned a Context object created by React.createContext().
  // This let you consume the nearest current value of that Context type using this.context. You can reference this in any lifecycle methods including the render function
  static contextType = RoomContext;
  render() {
    //   The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables
    // Here, we are accessing the values from featuredRooms props and we rename it rooms from this.context(RoomContext)
    const { featuredRooms: rooms } = this.context;
    return (
      <div>
        <Loading />
      </div>
    );
  }
}
