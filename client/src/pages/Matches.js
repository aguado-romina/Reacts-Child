// users can view their matches 

// message their matches from this page
import React, {useState, useEffect} from 'react'
import MatchResults from '../components/MatchResults'

const Matches = () => {

    const [count, setCount] = useState(0)

    const upItGoes = (event) => {
        event.preventDefault()

        setCount(count+1)
    }

    return (
        <>
            <h2>Matches: {count}</h2>
            <button onClick={upItGoes}>Go Up</button>
            <MatchResults count={count}/>
        </>
    )
}

export default Matches
