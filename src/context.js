import React, { Component } from "react";

// Context provides a way to pass data through the component tree without having to pass props down manually at evey level
// In a typical React application, data is passed top-dowm (parent to child) via props, but this can be cumbersome for certain types of props
// (e.g local preference, UI theme) that are required by many components within an application. Context provides a way to share values like these betwwen
// components without having to explicitly pass a prop through every level of the tree

// Creates a Context object. When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.
// The defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This can be helpful for testing components in isolation without wrapping them.
// This will just create a context object that doesnt do much in the RoomContext variable. We haven't provide any data yet
const RoomContext = React.createContext();

// Here we create a class component. Inside this component, we will have some state and the data inside the state is the data that we want to share betwween different components
class RoomProvider extends Component {
  // Here are the data that we want to share
  state = {
    greeting: "hello",
    name: "John",
  };

  // Now we have to provide the datas to the different components. When we create a context, we also have to create a provider which is a tag that surrounds which ever components that want to use that context.
  // So inside the return, we need to return the RoomContext Provider tag which is provided by the context API itself.
  // So everytime we create a context object, we are also creating a context.Provider
  // On the provider tag we also need to specify the value property which is going to take in whatever data we want to provide to the components that this wraps
  // Accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree
  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

// A react component that subscribes to context changes. This lets you subscribe to a context within a function component
const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
