import React from "react"

function Info({ selectedPark, starRating }) {    

    return (
        <div>
            <h4>PARK STATE</h4>
            <hr></hr>
            <h4>PARK NAME</h4>
            <div>{selectedPark.name}</div>
            <hr></hr>
            <h4>PARK DESCRIPTION</h4>
            <div>{selectedPark.description}</div>
            <hr></hr>
            <h4>AVERAGE PARK RATING</h4>
            <div>{starRating}</div>
        </div>
    )
}

export default Info
