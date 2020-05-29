import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

// We will render the services only in home page
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "Information about our free cocktails",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Information about our endless hiking",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info: "Information about our free shuttle",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Information about our strongest beer",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        {/* In this div we display all the services stored in the services state. We use the map function to iterate through the array*/}
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
