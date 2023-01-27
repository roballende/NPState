import React from "react"
import map from "./images/map.png"

function Map({ latitude, longitude }) {

    // lat/long of the map dimensions
    const lat_max = 53.220325
    const lat_min = -8.028057
    const lon_max = -61.576556
    const lon_min = -131.175898

    let top = (lat_max - latitude) * (500 / (lat_max - lat_min)) // y coordinates
    let left = (longitude - lon_min) * (500 / (lon_max - lon_min)) // x coordinates

    if (longitude > lon_min && longitude <= -95 && latitude < lat_max && latitude >= 40) {
        console.log("quadrant 1")
        top = top - 15
        left = left - 10
    } else if (longitude > lon_min && longitude <= -95 && latitude >= lat_min && latitude < 40) {
        console.log("quadrant 2")
        top = top + 5
        left = left - 10
    } else if (longitude > -95 && longitude <= lon_max && latitude < lat_max && latitude >= 40) {
        console.log("quadrant 3")
        top = top - 5
        left = left - 10
    } else if (longitude > -95 && longitude >= lon_min && latitude >= lat_min && latitude < 40) {
        console.log("quadrant 4")
        top = top + 5
        left = left - 10
    } else {
        console.log("n/a")
        top = top + 0
        left = left + 0
    }
    
    return (
        <div className='component'>
            <div className='map-container'>
                <div className='marker' style={{ top: `${top}px`, left: `${left}px` }}>
                    ★
                </div>
                <img src={map} alt='map' className='map' />
            </div>
        </div>
    )
}

export default Map

    // 0, 0 51.413783, -131.664337 nw corner
    // 0, 1500 51.413783, -65.790315 ne corner
    // 1000, 1500 24.268270, -65.658479 se corner
    // 1000, 0 24,2682, -131.664337 sw corner
    // 52.220325, -131.175898
    // 52.098159, -61.576556
    // -8.028057, -61.576556
    // -8.028057, -131.175898

    // const locations = [
    //     { latitude: 48.94123688222868, longitude: -124.34960908493463, markerTop: 10, markerLeft: -17 }, // tip of texas
    //     { latitude: 44.409286, longitude: -68.247501, markerTop: 250, markerLeft: 1300 }, // acadia national park
    //     { latitude: 44.59824417, longitude: -110.5471695, markerTop: 290, markerLeft: 365 }, // yellowstone national park
    //     { latitude: 36.0001165336, longitude: -112.121516363, markerTop: 550, markerLeft: 295 }, // grand canyon national park
    // ]

    // current marker
    // const latitude = 0
    // const longitude = 0
    // const top = 10 
    // const left = -17

    // top left corner
    // const top = 10
    // const left = -17

    // top right corner
    // const top = 10
    // const left = 1483

    // bottom left corner
    // const top = 1007
    // const left = -17

    // bottom right corner
    // const top = 1007
    // const left = 1483

    // let latDiffSum = 0
    // let longDiffSum = 0
    // locations.forEach((location) => {
    //     latDiffSum += location.markerTop - location.latitude
    //     longDiffSum += location.markerLeft - location.longitude
    // })

    // const averageLatDiff = latDiffSum / locations.length
    // const averageLongDiff = longDiffSum / locations.length

    // const mapHeight = 1000 // height of the map
    // const mapWidth = 1500 // width of the map

    // const latScale = averageLatDiff / mapHeight
    // const longScale = averageLongDiff / mapWidth
    // const scale = (latScale + longScale) / 2

    // const top = averageLatDiff + latitude * scale
    // const left = averageLongDiff + longitude * scale

    // lat/long of first park
    // console.log(latitude) // 43.81853565
    // console.log(longitude) // -110.7054666

    // if (longitude < -61 && longitude >= -70) {
    //     left = left - 15
    // } else if (longitude < -70 && longitude >= -80) {
    //     left = left - 15
    // } else if (longitude < -80 && longitude >= -90) {
    //     left = left - 20
    // } else if (longitude < -90 && longitude >= -100) {
    //     left = left - 25
    // } else if (longitude < -100 && longitude >= -110) {
    //     left = left - 30
    // } else if (longitude < -110 && longitude >= -120) {
    //     left = left - 15
    // } else if (longitude < -120 && longitude >= -130) {
    //     left = left - 10
    // }

    // if (latitude >= 40 && latitude < 50) {
    //     top = top - 5
    // } else if (latitude >= 30 && latitude < 40) {
    //     top = top + 0
    // } else if (latitude >= 20 && latitude < 30) {
    //     top = top + 0
    // } else if (latitude >= 10 && latitude < 20) {
    //     top = top + 0
    // } else if (latitude >= 0 && latitude < 10) {
    //     top = top + 0
    // } else if (latitude > -10 && latitude < 0) {
    //     top = top + 0
    // } else if (latitude >= -10 && latitude < -20) {
    //     top = top + 0 
    // }