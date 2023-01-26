import React from "react"
import map from "./images/map.png"

function Map({ latitude, longitude }) {
    // lat/long of the map dimensions
    // const lat_max = 53.220325
    // const lat_min = -8.028057
    // const lon_max = -61.576556
    // const lon_min = -131.175898

    // math :(
    // const top = (lat_max - latitude) * (1400 / (lat_max - lat_min)) // y coordinates
    // const left = (longitude - lon_min) * (1350 / (lon_max - lon_min)) // x coordinates

    return (
        <div className='component'>
            <div className='map-container'>
                {/* <div className='marker' style={{ top: `${top}px`, left: `${left}px` }}>
                    ★
                </div> */}
                <img src={map} alt='map' className='map' />
            </div>
        </div>
    )
}

export default Map
