import React, { Component } from "react";
import Card from "../SwipingCard";
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
        
        <div className="object-contain lg:container  bg-white px-2 mx-auto rounded-md   flex justify-center ">
      
        <div className=" max-w-lg w-full sm:px-auto px-4 py-10">
          
          <h1 className="text-center">Make New Friends</h1>
          <h3 className="text-center">
            Thumbs up on any pups you'd like to meet!
          </h3>
          <div className=" max-w-md w-full sm:px-auto px-4 py-10">
       
          <div className=" max-w-md w-full sm:px-auto px-4 py-10">
          <Card
            id={id}
            human={human}
            puppy={puppy}
            image={image}
            bio={bio}
            age={age}
            handleBtnClick={this.handleBtnClick}
          />
<<<<<<< HEAD
=======

          
          <h1 className="text-center">
            Made friends with {this.state.matchCount} pups so far!

>>>>>>> 90f2a8ff69b0ba3986c3b06977b73a7750573dae
          <h1 className="text-center max-w-md w-full space-y-8 sm:px-3 px-4 py-9">
           
           
           
            Made friends with 
             <span className="text-darkblue text-md font-semibold"> {this.state.matchCount}</span> pups so far!

<<<<<<< HEAD

=======
>>>>>>> 90f2a8ff69b0ba3986c3b06977b73a7750573dae
          </h1>
          {/* <Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
            Yay! That Pup Liked You Too!!!
          </Alert> */}
        </div>
        </div>
        </div>
        </div>
      );
    }
  }
  
  export default Discover;