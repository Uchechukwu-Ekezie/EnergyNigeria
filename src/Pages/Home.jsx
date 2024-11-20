import React from "react";
import Hero from "../Components/Hero/Hero";
import HeroOne from "../Components/Hero/HeroOne";
import HeroTwo from "../Components/Hero/HeroTwo";
import One from "../Components/Sponsor/One";
import Speakers from "../Components/Speaker/Speaker";
import GainInsight from "../Components/GainInsight/GainInsight";
import WhyExhibit from "../Components/WhyExhibit/WhyExhibit";
import VisitorTestimony from "../Components/VisitorTest/VisitorTestimony";
import VideoSection from "../Components/VideoSection/VideoSection";

function Home() {
  return (
    <div>
      <Hero />
      <div className="lg:mt-[-140px]">
        <HeroOne />
        <HeroTwo />
        <Speakers />
        <VisitorTestimony />
        <WhyExhibit />
        <VideoSection/>
        <GainInsight />
        <One />
      </div>
    </div>
  );
}

export default Home;
