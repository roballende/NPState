import React from "react"

function Image({ img_url }) {

    
    return (
        <div className='image-container'>
            <img src={img_url} width='100%' height='auto'/>
        </div>
    )
}

export default Image
