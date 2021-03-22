import React, { Component } from "react";
import puppies from "../../puppies.json";
import MatchesCard from "../MatchesCard";
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
        <div className="grid grid-cols-3">
        {this.state.puppies.map((puppy) => (
          
          <MatchesCard
            removePuppy={this.removePuppy}
            id={puppy.id}
            human={puppy.human}
            puppy={puppy.puppy}
            image={puppy.image}
            bio={puppy.bio}
            age={puppy.age}
          />
        ))}
        </div>
      </>
    );
  }
}
export default Puppy;
