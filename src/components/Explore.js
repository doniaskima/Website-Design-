import React from 'react';

const Explore = () => {
  return (
    <section className="min-h-[400px] mb-16 lg:mb-4">
      <div className="container mx-auto">
        <div className="h-full bg-explore bg-no-repeat bg-cover p-14 flex flex-col items-start justify-center">
          <h3
            className="text-3xl font-semibold mb-8"
            data-aos="fade-right"
            data-aos-offset="1000"
          >
            Explore product in new way
          </h3>
          <p
            className="max-h-xs mb-12"
            data-aos="fade-right"
            data-aos-offset="1100"
          >
            lorem ipsum dolor sit amet, consectetur adipiscing
            <br /> dont hesitae join us
          </p>
          <form
            className="flex flex-col w-full space-y-4 gap-x-4 lg:flex-row lg:space-y-0"
            data-aos="fade-up"
            data-aos-offset="200"
          >
            <input
              className="bg-gradient-to-t from-[#341D38] to-[#271223] h-12 px-4 outline-none rounded-md"
              type="text"
              placeholder="your email"
            />
            <button className="btn">Start</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Explore;
