import React from 'react';
import './GalleryItem.css';

const GalleryItem = ({ image, openModal }) => {
  return (
    <img
      src={image.src}
      alt={image.alt}
      className="gallery-item"
      onClick={() => openModal(image)}
    />
  );
};

export default GalleryItem;
