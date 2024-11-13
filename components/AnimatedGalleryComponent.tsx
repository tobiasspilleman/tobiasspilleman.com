import React, { useState, useEffect } from 'react';

const AnimatedGalleryComponent = ({ images }: { images: string[] }) => {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [images]);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt=""
                    style={{
                        transform: `translateX(${(index - slideIndex) * 100}%)`,
                        transition: 'transform 0.5s',
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover',
                    }}
                />
            ))}
        </div>
    );
};

export default AnimatedGalleryComponent;