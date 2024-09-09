import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './Comment.css';

const commentsData = [
    {
        text: "Fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        name: "John Doe",
        role: "Developer",
        imgSrc: "/images/testimonials/testimonials-1.jpg",
    },
    {
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        name: "Jane Smith",
        role: "Designer",
        imgSrc: "/images/testimonials/testimonials-2.jpg",
    },
    {
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        name: "Alice Johnson",
        role: "Product Manager",
        imgSrc: "/images/testimonials/testimonials-3.jpg",
    },
    {
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
        name: "Bob Brown",
        role: "Marketer",
        imgSrc: "/images/testimonials/testimonials-4.jpg",
    },
    {
        text: "Et harum quidem rerum facilis est et expedita distinctio.",
        name: "Charlie White",
        role: "Analyst",
        imgSrc: "/images/testimonials/testimonials-5.jpg",
    }
];

const Comment = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;
    const totalSlides = commentsData.length - itemsPerPage + 1;

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
        <div className='d-flex flex-column align-items-center mt-5'>
            <div className='d-flex justify-content-center align-items-center'>
                <button className='carousel-button' onClick={handlePrev}>←</button>
                <div className='carousel-container d-flex justify-content-center gap-4'>
                    {commentsData.slice(currentIndex, currentIndex + itemsPerPage).map((comment, index) => (
                        <Card 
                            key={index} 
                            style={{ width: '25rem', height: '220px' }} 
                            className={`position-relative p-2 comment border-0 ${index === 1 ? 'active' : ''}`}>
                            <Card.Body>
                                <i className='t-black'>{comment.text}</i>
                            </Card.Body>
                            <div className='comment__img'>
                                <img src={comment.imgSrc} alt="" />
                            </div>
                            <div className="comment__owner">
                                <h5>{comment.name}</h5>
                                <p>{comment.role}</p>
                            </div>
                        </Card>
                    ))}
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

export default Comment;