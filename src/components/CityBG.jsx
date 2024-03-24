import React, {useState} from 'react';
import { useRef } from "react";
import Section from "./Section";
import citybg1 from "../assets/citybg1.png";
import { SearchBar, SearchResult } from "./Search/Search";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
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
        <h1 className="h1 mb-9">
          EviHunter
        </h1>
        <div className="relative z-1 max-w-[19rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <SearchBar placeholder="App Name" setResults={setResults}/>
          <br />
          <SearchBar placeholder="App Version" setResults={setResults} />
        </div>
        
      </div>
      <BackgroundCircles />
    </div>
    </Section>
  );
};

export default CityBG;