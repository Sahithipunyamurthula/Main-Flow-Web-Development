import React, { useState } from 'react';
import GalleryItem from './GalleryItem';
import Modal from './Modal';
import './Gallery.css';

const images = [
  { src: 'image1.jpg', alt: 'Image 1' },
  { src: 'image2.jpg', alt: 'Image 2' },
  { src: 'image3.jpg', alt: 'Image 3' },
  { src: 'image4.jpg', alt: 'Image 4' },
  { src: 'image5.jpg', alt: 'Image 5' },
  { src: 'image6.jpg', alt: 'Image 6' },
  { src: 'image7.jpg', alt: 'Image 7' },
  { src: 'image8.jpg', alt: 'Image 8' },
  { src: 'image9.jpg', alt: 'Image 9' },
  // Add more images as needed
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <GalleryItem key={index} image={image} openModal={openModal} />
      ))}
      {selectedImage && <Modal image={selectedImage} closeModal={closeModal} />}
    </div>
  );
};

export default Gallery;
