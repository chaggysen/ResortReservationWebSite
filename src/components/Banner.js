import React from "react";

// Here we all children as one props because we want to optionally add a button on the banner

export default function Banner({ children, title, subtitle }) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      {/* The children will be the optional button */}
      {children}
    </div>
  );
}
