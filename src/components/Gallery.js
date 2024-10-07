import React from "react";
import "./Gallery.css"; // Import the CSS file for styling

const Gallery = () => {
  // Define your image paths. Ensure the paths are correct based on your public/img directory.
  const images = [
    { src: "/img/car-window-shot.jpg", alt: "Description of image 1" },
    { src: "/img/hard-work-1.jpg", alt: "Description of image 2" },
    { src: "/img/hard-work-2.jpg", alt: "Description of image 3" },
    { src: "/img/hard-work-3.jpg", alt: "Description of image 4" },
    { src: "/img/hard-work-4.jpg", alt: "Description of image 5" },
    { src: "/img/hard-work-5.jpg", alt: "Description of image 6" },
    { src: "/img/hard-work-10.jpg", alt: "Description of image 7" },
    { src: "/img/hard-work-7.jpg", alt: "Description of image 8" },
    { src: "/img/hard-work-8.jpg", alt: "Description of image 9" },
  ];

  return (
    <div className="container services">
      <h2 className="main-title text-center">GALLERY</h2>
      <div className="card-cover">
        <div className="col-md-12">
          <div className="row">
            <div className="gallery">
              {images.map((image, index) => (
                <div className="gallery-item" key={index}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="gallery-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
