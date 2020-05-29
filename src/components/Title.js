import React from "react";

// We will use the tilte component in multiple parts of the webpage
export default function Title({ title }) {
  return (
    <div className="section-title">
      <h4>{title}</h4>
      {/* This div will be the underline */}
      <div></div>
    </div>
  );
}
