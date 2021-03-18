import React from 'react'

const MatchResults = (props) => {
    return (
        <div>
            Here is a match that is part of the matches of dogs and cats that match
            btw my dog's name is: {props.count}
        </div>
    )
}

export default MatchResults;
