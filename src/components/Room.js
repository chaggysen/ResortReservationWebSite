import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";

// Here we display the room component
export default function Room({ room }) {
  const { name, slug, images, price } = room;
  return (
    <article className="room">
      <div className="img-container">
        {/* Here if the first image doesn't load, the defaultImg will load */}
        <img src={images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        {/* In app.js the route for singleRoom is "/rooms/:slug" Each and every room will have an unique slug
        It will navigate to that singleRoom page*/}
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

// PropTypes exports a range of validators that can be used to make sure the data you receive is valid.
// In this example, we're using PropTypes.string. When an invalid value is provided for a prop, a warning will be shown in the Javascrip console.
// For performance reasons, propTypes is only checked in development mode.
Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number.isRequired,
  }),
};
