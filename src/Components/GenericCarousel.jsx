import React, { useState } from 'react';

const GenericCarousel = ({ images, slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };

    const handleNextSlide = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };

    return (
        <div id="default-carousel" className="relative w-full pb-[40px]" data-carousel="slide">
            {/* Render current slide only */}
            <div className={`transition-opacity pb-3 duration-700 w-[300px] lg:w-[800px] mx-auto ease-in-out`} data-carousel-item>
                {slides[currentSlide]}
            </div>

            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {/* Render images */}
                {images.map((image, index) => (
                    <div key={index} className={`transition-opacity py-4  duration-700 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'} absolute inset-0`} data-carousel-item>
                        <img src={image.image} className={` absolute block ${image.width ? 'w-[300px] lg:w-[500px]  object-contain  ' : 'w-[300px] lg:w-[800px]  object-contain md:object-cover'}   h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>

            {/* Slider controls */}
            <button type="button" className={`absolute top-[20%] lg:top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none ${currentSlide === 0 ? 'pointer-events-none opacity-50' : ''}`} data-carousel-prev onClick={handlePrevSlide} disabled={images.length === 0}>
                <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${currentSlide === 0 ? 'bg-[#bdc1c6] text-[#3c4043]' : 'bg-blue-500 text-white'}`}>
                    <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className={`absolute top-[20%] lg:top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none ${currentSlide === images.length - 1 ? 'pointer-events-none opacity-50' : ''}`} data-carousel-next onClick={handleNextSlide} disabled={images.length === 0}>
                <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${currentSlide === images.length - 1 ? 'bg-[#bdc1c6] text-[#3c4043]' : 'bg-blue-500 text-white'}`}>
                    <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>

            {/* Indicators */}
            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-4 h-4 mx-1 rounded-full focus:outline-none ${currentSlide === index ? 'bg-blue-500' : 'bg-transparent border border-blue-500'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default GenericCarousel;
