//signup form 
//what information do we want stored in our database
import React, { Component } from "react";
import SignUpForm from "../components/SignUpForm/index";
import API from "../utils/API";

class Signup extends Component{
    constructor(props){
        super(props)
        this.state = {

    } 

}

signUp = () => {
    // const puppyParent = this.props.puppyParent;
    // const puppyName = this.props.puppyName;
    // const breed = this.props.breed;
    // const age = this.props.age;
    // const puppyImage = this.props.puppyImage;
}
render() {
 return (
     <div><h1>Sign Up here!</h1>
              <SignUpForm></SignUpForm>
     </div>
 )
}
}
export default Signup;