import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";

export default class SingleRoom extends Component {
  // We need to get the slug parameter that has been passed
  // No where in our application we are passing directly the link to SingleRoom
  // For example, in FeaturedRooM, it only passes a link. It doesn't pass the prop
  // The prop is being passes by react router in app.js. It gives us access to the slug which is the info we want to find out which singroom page we want to display
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  // The contextType property on a class can be assigned a Context object created by React.createContext().
  // This lets you consume the nearest current value of that Context type using this.context. You can reference this in any of the lifecycle methods including the render function
  static contextType = RoomContext;

  // We are accessing the room with the function getRoom from the context
  componentDidMount() {}
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    // If the room is not in the context, theres no way we want find that room
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    return (
      <Hero hero="roomsHero">
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </Banner>
      </Hero>
    );
  }
}
