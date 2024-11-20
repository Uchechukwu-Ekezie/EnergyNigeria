import React, { useState, useEffect } from "react";

const Slideshow = () => {
  const slides = [
    {
      image: "/path/to/image1.jpg",
      content: (
        <>
          <p className="font-bold text-pink-600">
            The{" "}
            <span className="text-red-500">
              10<sup>th</sup> anniversary edition
            </span>{" "}
            of Nigeria Energy, held under the patronage of{" "}
            <span className="font-semibold">Federal Ministry of Power</span>, 
            was inaugurated by Chief Adebayo Adelabu, Honourable Minister of Power, 
            Federal Republic of Nigeria.
          </p>
        </>
      ),
    },
    { image: "/path/to/image2.jpg", content: <p>Content for slide 2</p> },
    { image: "/path/to/image3.jpg", content: <p>Content for slide 3</p> },
    { image: "/path/to/image4.jpg", content: <p>Content for slide 4</p> },
    { image: "/path/to/image5.jpg", content: <p>Content for slide 5</p> },
    { image: "/path/to/image6.jpg", content: <p>Content for slide 6</p> },
    { image: "/path/to/image7.jpg", content: <p>Content for slide 7</p> },
    { image: "/path/to/image8.jpg", content: <p>Content for slide 8</p> },
    { image: "/path/to/image9.jpg", content: <p>Content for slide 9</p> },
    { image: "/path/to/image10.jpg", content: <p>Content for slide 10</p> },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-10 bg-gray-100">
      <div className="grid items-center max-w-6xl grid-cols-1 gap-6 mx-auto md:grid-cols-2">
        {/* Image Section */}
        <div className="relative">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className={`w-full rounded-lg shadow-md transition-opacity duration-700 ${
                index === currentSlide ? "opacity-100" : "opacity-0 absolute"
              }`}
            />
          ))}
        </div>

        {/* Content Section */}
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            2023 Show Highlights
          </h2>
          <div className="text-gray-700">{slides[currentSlide].content}</div>
        </div>
      </div>

      {/* Dots for Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-pink-600 scale-125"
                : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
