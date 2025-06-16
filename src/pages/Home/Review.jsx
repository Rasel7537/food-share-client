
import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Anika Rahman",
      designation: "Businesswoman",
      text: "Anika Rahman, one of the Voices of Food Donors, believes that sharing food is a powerful act of unity.Every meal we share is a message of hope — that no one should be left behind.",
      image: "https://i.ibb.co/CsTKSS5G/portrait-woman-female-young.jpg",
    },
    {
      id: 2,
      name: "Jane Doe",
      designation: "Businessman",
      text: "CommunitySharePlate has changed my life! I've been able to connect with neighbors and share my needs greater prelude.",
      image: "https://i.ibb.co/bMXWGwN8/pxfuel-com-1.jpg",
    },
    {
      id: 3,
      name: "John Smith",
      designation: "Engineer",
      text: "Jane's incredible meal through community change is a fantastic routine. It brings her parents together and educates others.",
      image: "https://i.ibb.co/SDV0Fr6m/portrait-model-face-darkness-happiness-men-good-looking-male-beard-adult.jpg",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white w-full">
      <div className="px-4 max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Voices of <span className="text-orange-400">Food Donors</span>
        </h2>
        <p className="text-center text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto">
          Hear from the generous individuals who help fight hunger. Their
          stories inspire kindness, compassion, and community impact.
        </p>
        <div className="h-1 w-32 md:w-56 bg-orange-400 mx-auto rounded-full mb-8"></div>

        <div className="relative w-full">
          <div className="carousel w-full h-[450px] sm:h-[480px] md:h-[500px] lg:h-[520px] rounded-box shadow-2xl">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`carousel-item relative w-full ${
                  index === activeIndex ? "block" : "hidden"
                }`}
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${testimonial.image})` }}
                >
                  <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center px-2 sm:px-6">
                    <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl bg-base-100 bg-opacity-90 p-4 sm:p-6 md:p-8 rounded-box text-center md:text-left">
                      <FaQuoteLeft className="text-2xl md:text-3xl text-primary mb-4" />
                      <p className="text-sm md:text-lg mb-4 md:mb-6">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center justify-center md:justify-start gap-2">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-lg"
                        />
                        <div className="text-left">
                          <h3 className="text-base md:text-xl font-bold">
                            {testimonial.name}
                          </h3>
                          <p className="text-xs md:text-sm italic">
                            {testimonial.designation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 btn btn-circle btn-primary"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 btn btn-circle btn-primary"
          >
            <FaChevronRight />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-blue-400" : "bg-white border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
