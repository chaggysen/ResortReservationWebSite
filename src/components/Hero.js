import React from "react";

// You can use children prop on components that represent generic boxes and that don't know their children ahead of time
// We need hero props because we want to add it as a className in our header.
// Each and everytime we are rendering the hero component, we will have an option of changing the className

// Some components don't know their children ahead of time. This is especially common for components like Sidebar or Dialog that represent generic boxes
// We recommand that such components use the special children prop to pass children elements directly into their output
// Basically, it is used to display whatever you include between the opening and the closing tags when invoking a component
// The children here is the optional banner
export default function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}
// Here we setup the default hero props for the hero component which will be "defaultHero"
// If on a different page (rooms page, I want to render a different image, I would pass the className created for the rooms page.
// If im not passing anything(error page), it will render the defaultHero className
Hero.defaultProps = {
  hero: "defaultHero",
};
