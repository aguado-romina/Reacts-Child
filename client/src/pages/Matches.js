// users can view their matches 

// message their matches from this page
import React, {useState} from 'react'
import NavBar from "../components/NavBar";
import Puppy from "../components/List"

const Matches = () => {

    const [count, setCount] = useState(0)

    const upItGoes = (event) => {
        event.preventDefault()

        setCount(count+1)
    }

    return (
        <>
         <div className="font-fonts max-w-auto container bg-white px-8 mx-auto rounded-lg">
    
        <NavBar/>
       <Puppy/>
        </div>
        </>
    )
}

export default Matches
