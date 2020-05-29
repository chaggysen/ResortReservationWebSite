import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Home() {
  // Here we call the hero component with defaultHero as hero props. That hero props will serve
  // as the className for the component which will have its own css styling

  // The banner is the children of hero and the link is the children of banner
  return (
    <Hero>
      <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
        {/* The link links to /rooms page */}
        <Link to="/rooms" className="btn-primary">
          our rooms
        </Link>
      </Banner>
    </Hero>
  );
}
