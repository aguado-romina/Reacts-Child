import React, { Component } from "react";
import Card from "../Card";
import puppies from "../../puppies.json";
import API from "../../utils/API";

class Discover extends Component {
    state = {
      image: "",
      human: "",
      puppy: "",
      age: "",
      bio: "",
      match: false,
      matchCount: 0,
      puppies,
      count: 0
    };
  
    componentDidMount() {
      this.loadNextProfile();
    }
  
    handleBtnClick = event => {
      const btnType = event.target.attributes.getNamedItem("data-value").value;
      const newState = { ...this.state };
      newState.count = newState.count + 1
      if (newState.count > 12) {
        newState.count = 0
      }
      if (btnType === "pick") {
        newState.match = 1 === Math.floor(Math.random() * 5) + 1;
  
        newState.matchCount = newState.match
          ? newState.matchCount + 1
          : newState.matchCount;
      } else {
        newState.match = false;
      }
      this.setState(newState);
      this.loadNextProfile();
    };
  
    loadNextProfile = () => {
      const { count } = this.state 
      console.log("hellloooo");
      API.getRandomProfile()
        .then(res => 
          this.setState({
            image: res.config.url[count].image,
            human: res.config.url[count].human,
            puppy: res.config.url[count].puppy,
            bio: res.config.url[count].bio,
            age: res.config.url[count].age,
          }),
        )
        .catch(err => console.log(err));
    };
  
    render() {
      const { id, human, puppy, bio, image, age} = this.state
      return (
        <div>
          <h1 className="text-center">Make New Friends</h1>
          
          <Card
            id={id}
            human={human}
            puppy={puppy}
            image={image}
            bio={bio}
            age={age}
            handleBtnClick={this.handleBtnClick}
          />
          <h1 className="text-center">
            Made friends with {this.state.matchCount} pups so far!
          </h1>
          {/* <Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
            Yay! That Pup Liked You Too!!!
          </Alert> */}
        </div>
      );
    }
  }
  
  export default Discover;