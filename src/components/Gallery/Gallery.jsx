import React, { useState } from 'react';
import Title from '../Title/Title';
import './Gallery.css';

const galleryData = [
    {
        img: "/images/gallery/gallery-1.jpg",
    },
    {
        img: "/images/gallery/gallery-2.jpg",
    },
    {
        img: "/images/gallery/gallery-3.jpg",
    },
    {
        img: "/images/gallery/gallery-4.jpg",
    },
    {
        img: "/images/gallery/gallery-5.jpg",
    },
    {
        img: "/images/gallery/gallery-6.jpg",
    },
    {
        img: "/images/gallery/gallery-7.jpg",
    },
    {
        img: "/images/gallery/gallery-8.jpg",
    }
];

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 5; 
    const totalSlides = galleryData.length - itemsPerPage + 1;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className='gallery__container'>
            <Title title="Gallery" desc="Nam inceptos vehicula rutrum ullamcorper" />
            <div className='d-flex justify-content-center align-items-center my-4'>
                <button className='carousel-button' onClick={handlePrev}>←</button>
                <div className='carousel-container d-flex justify-content-center gap-4'>
                    {galleryData.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => {
                        const isMiddle = index === 2; 
                        return (
                            <div 
                                key={index} 
                                style={{ 
                                    width: isMiddle ? '15rem' : '10rem', 
                                    height: isMiddle ? '220px' : '150px',
                                    transition: 'transform 0.3s',
                                    padding : '2px' ,
                                    border: isMiddle ? '5px solid var(--Primary-Color)' : 'none' 
                                }}
                            >
                                <img 
                                    src={item.img} 
                                    alt={`Gallery Image ${index + 1}`} 
                                    style={{ 
                                        width: '100%', 
                                        height: '100%', 
                                        borderRadius: '5px', 
                                        objectFit: 'cover' 
                                    }} 
                                />
                            </div>
                        );
                    })}
                </div>
                <button className='carousel-button' onClick={handleNext}>→</button>
            </div>
            <div className='dots-container'>
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <div 
                        key={index} 
                        className={`dot ${currentIndex === index ? 'active-dot' : ''}`} 
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Gallery;