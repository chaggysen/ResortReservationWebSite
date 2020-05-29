import React from "react";
import Hero from "../components/Hero";

const Rooms = () => {
  // Here we don't want to use the default className. So we need to pass down the hero props we want
  // This will overwrite the default one we setup
  return <Hero hero="roomsHero" />;
};

export default Rooms;
