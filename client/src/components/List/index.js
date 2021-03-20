import React, { Component } from "react";
import puppies from "../../puppies.json";
import Card from "../Card";
import "./style.css";

class Puppy extends Component {
  state = {
    puppies,
  };

  removePuppy = (id) => {
    const puppies = this.state.puppies.filter((puppy) => puppy.id !== id);
    this.setState({ puppies });
  };

  render() {
    return (
      <>
      <div>
        
      </div>
        <h1>Matches List</h1>
        {this.state.puppies.map((puppy) => (
          <Card
            removePuppy={this.removePuppy}
            id={puppy.id}
            human={puppy.human}
            puppy={puppy.puppy}
            image={puppy.image}
            bio={puppy.bio}
            age={puppy.age}
          />
        ))}
      </>
    );
  }
}
export default Puppy;
