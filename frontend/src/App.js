import "./App.css"
import Search from "./components/Search"
import Info from "./components/Info"
import Reviews from "./components/Reviews"
import Form from "./components/Form"
import Map from "./components/Map"
import ImageGallery from "./components/ImageGallery"
import React, { useState, useEffect } from "react"
import StarIcon from "@mui/icons-material/Star"
import StarBorderIcon from "@mui/icons-material/StarBorder"

function App() {
    // SET USER FOR FORM
    const [userID, setUserID] = useState(7)

    // SET STATE FOR ALL PARKS
    const [parks, setParks] = useState([])

    // SET ID FOR SELECTED PARK
    const [parkID, setParkID] = useState(2)

    // SET SELECTED PARK
    const [selectedPark, setSelectedPark] = useState({})

    // SET AVG RATINGS
    const [starRating, setStarRating] = useState("")

    // SET PARK REVIEWS
    const [parkReviews, setParkReviews] = useState([])

    // FETCH ALL PARKS
    useEffect(() => {
        fetch("http://localhost:9292/parks")
            .then((resp) => resp.json())
            .then((data) => setParks(data))
    }, [])

    // FETCH SELECTED PARK
    useEffect(() => {
        fetch(`http://localhost:9292/parks/${parkID}`)
            .then((resp) => resp.json())
            .then((park) => {
                setSelectedPark(park)
                setParkReviews(park.reviews)
            })
    }, [parkID])

    // FETCH USER
    useEffect(() => {
        fetch(`http://localhost:9292/users/${userID}`)
            .then((resp) => resp.json())
            .then((user) => setUserID(user.id))
    }, [])

    // FETCH PARK AVG RATING & CONVERT TO STAR
    useEffect(() => {
        fetch(`http://localhost:9292/parks/${parkID}/average_rating`)
            .then((resp) => resp.json())
            .then((rating) => {
                if (rating === 1) {
                    setStarRating(
                        <div><StarIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></div>
                    )
                } else if (rating === 2) {
                    setStarRating(
                        <div><StarIcon /><StarIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></div>
                    )
                } else if (rating === 3) {
                    setStarRating(
                        <div><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /><StarBorderIcon /></div>
                    )
                } else if (rating === 4) {
                    setStarRating(
                        <div>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarBorderIcon />
                        </div>
                    )
                } else if (rating === 5) {
                    setStarRating(
                        <div>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>
                    )
                } else {
                    setStarRating(
                        <div>
                            <StarBorderIcon />
                            <StarBorderIcon />
                            <StarBorderIcon />
                            <StarBorderIcon />
                            <StarBorderIcon />
                        </div>
                    )
                }
            })
    }, [parkID])

    // <LooksOneOutlinedIcon fontSize='medium' />

    // POST PARK REVIEW / RATING

    // const newReviewSubmit = (newParkReview) => {
    //     setParkReviews(...parkReviews, newParkReview)
    // }
    const newReviewSubmit = (newParkReview) => {
        setParkReviews([...parkReviews, newParkReview]);
    }

    // PATCH PARK REVIEW / RATING

    // DELETE PARK REVIEW / RATING
    return (
        <div className='App'>
            <Search parks={parks} setParkID={setParkID} />
            <br></br>
            <Info selectedPark={selectedPark} starRating={starRating} />
            <hr></hr>
            <Reviews parkReviews={parkReviews} />
            <hr></hr>
            <Form userID={userID} selectedPark={selectedPark} newReviewSubmit={newReviewSubmit}/>
            <hr></hr>
            <Map />
            <hr></hr>
            <ImageGallery />
        </div>
    )
}

export default App
