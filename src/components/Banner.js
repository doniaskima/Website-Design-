import React from 'react';

// import components
import Users from "../components/Users"
//import images
import Img from "../assets/img/banner-img.png";

const Banner = () => {
  return (
    <section className="min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:pb-0 lg:text-left">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div>
            <h1
              className="text-3xl font-bold lg:loading-sung"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Let's Explore <br /> Three Dimonsional Visually
            </h1>
            <p
              className="font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
              quod excepturi? Deserunt iste qui ipsum voluptas, eum dicta
              maiores earum nobis ducimus commodi laborum assumenda blanditiis
              repudiandae aliquam incidunt consectetur!
            </p>
            <div
              className="flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:justify-start"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              <button className="btn">Get it now</button>
              <a
                href="#"
                className="border-b-2 border-transparent hover:border-white transition ease-out"
              >
                Explore Device
              </a>
            </div>
            <Users />
          </div>
          <div data-aos="fade-up" data-aos-delay="800">
            <img src={Img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
