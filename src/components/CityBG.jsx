import React, {useState} from 'react';
import { useRef } from "react";
import Section from "./Section";
import citybg1 from "../assets/citybg1.png";
import gradient from "../assets/gradient.png";
import { SearchBar, SearchResult } from "./Search/Search";
import { BackgroundCircles } from "./design/Hero";
import { ScrollParallax } from 'react-just-parallax';

const CityBG = () => {
  const [results, setResults] = useState([]);
  const parallaxRef = useRef(null);
  
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
    <div className="container relative" ref={parallaxRef}>
      
      <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
        
        <h1 className="h1 mb-6">
          EviHunter
        </h1>
        <div className="relative z-1 max-w-[19rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <SearchBar placeholder="App Name" setResults={setResults}/>
          <br />
          <SearchBar placeholder="App Version" setResults={setResults} />
        </div>
        <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
          <img src={gradient} />  
        </div>      
      </div>
      
      <BackgroundCircles />
    </div>
    </Section>
  );
};

export default CityBG;