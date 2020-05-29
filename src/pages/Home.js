import React from "react";
import Hero from "../components/Hero";

export default function Home() {
  // Here we call the hero component with defaultHero as hero props. That hero props will serve
  // as the className for the component which will have its own css styling
  return <Hero />;
}
