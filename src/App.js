import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch></Switch>
      {/* If the route is the home page, the component i want to show is Home
      The same logic applies to other routes */}
      {/* We need to add exact to path because with React Router DOM, it will only match the first path.
      For example, /rooms(rooms page) also contains / (home page). When we add excat, only when the path matchs exactly, 
      then it will render the path page*/}
      {/* We have multiple types of single-room (economy, presidential). We need to use the route parameters
      In order to set up the route parameters, we need to setup the /:[variable_name]. Later on, when we will be working on this single room component,
      we will need to access the [variable_name] variable and pull the specific informations about that specific page*/}
      {/* Finally, we can set up the switch component. To set up the Route for the Error component.
      In this case, we don't need a path*/}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
