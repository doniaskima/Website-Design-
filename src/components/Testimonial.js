import React from 'react';

// import componenets
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <section className="mb-64 lg:mb-48">
      <div className="container mx-auto">
        <div className="bg-purple-400/10 max-h-[400px] p-12 rounded-lg">
          <div className="text-center">
            <h2>What our clients say </h2>
            <p>
              In my history of working with trade show vendors, I can honestly
              say that there is not one company that I've ever worked with that
              has better service than Exhibit
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
