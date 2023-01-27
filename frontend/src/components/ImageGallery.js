import React, { useState } from 'react'
// import Image from './Image'

function ImageGallery({ parkImages, parkName }) {
    const [selectedImage, setSelectedImage] = useState(0)

    // <div className='image-gallery'></div>

    const handleSelectedThumbnail = (index) => {
        setSelectedImage(index);
    }
    return (
        <div className="gallery">
            <h4>{parkName}</h4>
            <img src={parkImages[selectedImage]}
                className="gallery__img" />

            <div className="all_thumbnails">
                {parkImages.map((img, index) => (
                        <img key={index} className="gallery__thumb" src={img} onClick={() => handleSelectedThumbnail(index)}/>
                ))}
            </div>
        </div>
    )

    //     <section class="gallery">
    //   <div class="gallery__item">
    //     <input type="radio" id="img-1" checked name="gallery" class="gallery__selector"/>
    //     <img class="gallery__img" src="https://picsum.photos/id/1015/600/400.jpg" alt=""/>
    //     <label for="img-1" class="gallery__thumb"><img src="https://picsum.photos/id/1015/150/100.jpg" alt=""/></label>
    //   </div>
    //   <div class="gallery__item">
    //     <input type="radio" id="img-2" name="gallery" class="gallery__selector"/>
    //     <img class="gallery__img" src="https://picsum.photos/id/1039/600/400.jpg" alt=""/>
    //     <label for="img-2" class="gallery__thumb"><img src="https://picsum.photos/id/1039/150/100.jpg" alt=""/></label>
    //   </div>
    //   <div class="gallery__item">
    //     <input type="radio" id="img-3" name="gallery" class="gallery__selector"/>
    //     <img class="gallery__img" src="https://picsum.photos/id/1057/600/400.jpg" alt=""/>
    //     <label for="img-3" class="gallery__thumb"><img src="https://picsum.photos/id/1057/150/100.jpg" alt=""/></label>
    //   </div>
    //   <div class="gallery__item">
    //     <input type="radio" id="img-4" name="gallery" class="gallery__selector"/>
    //     <img class="gallery__img" src="https://picsum.photos/id/106/600/400.jpg" alt=""/>
    //     <label for="img-4" class="gallery__thumb"><img src="https://picsum.photos/id/106/150/100.jpg" alt=""/></label>
    //   </div>
    // </section>

    // <div className="gallery__item">
    //              <input type="radio" id={img_url} checked__name="gallery" className="gallery__selector"/>
    //             <img className="gallery__img" src={img_url} alt="Park_Picture"/>
    //             <div className="gallery__thumb"><img src={img_url} width='100%' height='auto' alt="Park_Thumb"/></div>
    // </div>
}

export default ImageGallery
