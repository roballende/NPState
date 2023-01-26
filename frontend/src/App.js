import React, { useState, useEffect } from "react"
import "./App.css"
import Search from "./components/Search"
import Info from "./components/Info"
import Reviews from "./components/Reviews"
import Form from "./components/Form"
import Map from "./components/Map"
import ImageGallery from "./components/ImageGallery"

function App() {
    // SET USER FOR FORM
    const [userID, setUserID] = useState(1)

    // SET USERNAME FOR CURRENT USER
    const [username, setUsername] = useState("default user")

    // SET STATE FOR ALL PARKS
    const [parks, setParks] = useState([])

    // SET ID FOR SELECTED PARK
    const [parkID, setParkID] = useState(2)

    // SET SELECTED PARK
    const [selectedPark, setSelectedPark] = useState({})

    // SET SELECTED PARK NAME
    const [parkName, setParkName] = useState("Acadia National Park")

    // SET PARK REVIEWS
    const [parkReviews, setParkReviews] = useState([])

    // SET PARK IMAGES
    const [parkImages, setParkImages] = useState([])

    // SET PARK ACTIVITIES
    const [parkActivities, setparkActivities] = useState([])

    // SET LATITUDE & LONGITUDE
    const [latitude, setLatitude] = useState(44.409286)
    const [longitude, setLongitude] = useState(-68.247501)

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
                setParkName(park.name)
                setParkImages(park.img_urls)
                setLatitude(park.latitude)
                setLongitude(park.longitude)
                setparkActivities(park.activities)
            })
    }, [parkID])

    // FETCH USER
    useEffect(() => {
        fetch(`http://localhost:9292/users/${userID}`)
            .then((resp) => resp.json())
            .then((user) => {
                setUserID(user.id)
                setUsername(user.name)
            })
    }, [userID])

    // POST PARK REVIEW / RATING
    const newReviewSubmit = (newParkReview) => {
        setParkReviews([...parkReviews, newParkReview])
    }

    // PATCH PARK REVIEW / RATING
    const handleReviewUpdate = (updatedReview) => {
        setParkReviews(
            parkReviews.map((review) => {
                if (review.id === updatedReview.id) {
                    return updatedReview
                } else {
                    return review
                }
            })
        )
    }

    // DELETE PARK REVIEW / RATING
    const handleReviewDelete = (reviewToDelete) => {
        setParkReviews(parkReviews.filter((review) => reviewToDelete.id !== review.id))
    }

    return (
        <div className='app'>
            <Search parks={parks} setParkID={setParkID} />
            <Info parkID={parkID} selectedPark={selectedPark} parkName={parkName} parkActivities={parkActivities} />
            <div className="level-two">
                <Form userID={userID} selectedPark={selectedPark} newReviewSubmit={newReviewSubmit} />
                <Map latitude={latitude} longitude={longitude} />
            </div>
            <Reviews parkReviews={parkReviews} handleReviewDelete={handleReviewDelete} handleReviewUpdate={handleReviewUpdate} userID={userID} selectedPark={selectedPark} username={username} />
            <ImageGallery parkImages={parkImages} />
        </div>
    )
}

export default App
