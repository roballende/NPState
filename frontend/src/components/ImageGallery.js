import React from 'react'
import Image from './Image'

function ImageGallery({ parkImages }) {

    return (
        <div className='component'>
            <h4>IMAGE GALLERY</h4>
            <div className='image-gallery'>
                {parkImages.map((image) => (
                    <Image key={image} img_url={image} />
                ))}
            </div>
        </div>
    )
}

export default ImageGallery
