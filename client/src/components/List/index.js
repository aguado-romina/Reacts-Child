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
    
    <div class="flex flex-wrap overflow-hidden">

<div class="w-full overflow-hidden">
     
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 py-4 px-5">
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
        </div>
        </div>
        
      </>
    );
  }
}
export default Puppy;
