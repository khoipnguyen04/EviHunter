import React from 'react';
import Section from "./Section";

const CityBG = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
    <div className="container relative">
      <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
        <h1 className="h1 mb-6">
          EviHunter
        </h1>
      </div>
    </div>
    </Section>
  );
};

export default CityBG;