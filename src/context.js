import React, { Component } from "react";
import items from "./data";

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
    // The rooms property will store all the infos about our room
    rooms: [],
    // The sortedRooms property will be used when we want to sort the rooms
    sortedRooms: [],
    featuredRooms: [],
    // The loading property will be used when be fetch data from Contentful DMS
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  // componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here.
  // If you need to load data from a remote endpoint, this is a good place to instantiate the network request
  componentDidMount() {
    // this.getData
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));
    // When we first mount our application, we set the sortedRooms to all the rooms first
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      maxPrice: maxPrice,
      maxSize: maxSize,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };

      return room;
    });
    return tempItems;
  }

  getRoom = (slug) => {
    // We copy the rooms
    let tempRooms = [...this.state.rooms];
    // Iterate the rooms array and find the room that have the corresponding slug
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };
  // This function will grab everything that control input will give us, and we will fix the values of the properties in the state.
  // Handle change will change the values in the state
  handleChange = (event) => {
    const target = event.target;
    const value = event.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;

    // After changing the state, we need to filter room to display the corresponding rooms
    this.setState(
      {
        [name]: value,
      },
      this.filterRoom
    );
  };

  // This function will not have argument. It will grab the values from the state and filter room
  filterRoom = () => {
    // We destructure the state to get the variables we need
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;
    // all the rooms
    let tempRooms = [...rooms];

    // transform values
    capacity = parseInt(capacity);
    price = parseInt(price);

    // if the type is not all, we filter tempRoom with only the type of room we want
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }
    // filter by price
    tempRooms = tempRooms.filter((room) => room.price <= price);
    // filter by size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }

    // Here we set the sortedRoom to the rooms we want to display
    this.setState({
      sortedRooms: tempRooms,
    });
  };

  // Now we have to provide the datas to the different components. When we create a context, we also have to create a provider which is a tag that surrounds which ever components that want to use that context.
  // So inside the return, we need to return the RoomContext Provider tag which is provided by the context API itself.
  // So everytime we create a context object, we are also creating a context.Provider
  // On the provider tag we also need to specify the value property which is going to take in whatever data we want to provide to the components that this wraps
  // Accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree
  render() {
    return (
      // Here we make the getRoom function available within the context
      // Here we make the handleChange function available within the context
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

// A react component that subscribes to context changes. This lets you subscribe to a context within a function component
const RoomConsumer = RoomContext.Consumer;

// A higher-order component is an advanced technique in React for reusing component logic.
// Concretly, a HOC is a function that takes a component and returns a new component
// Whereas a component transforms props into UI, a higher order component transforms a component into another component
// Here it takes the component and displays it with the props that are needed. It also adds a context prop to that component which includes the data that are passed from the context

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomConsumer, RoomContext };
