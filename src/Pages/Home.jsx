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
import RegistrationCards from "../Components/Registration/RegistrationCards";
import Slideshow from "../Components/SlideShow/Slideshow";

function Home() {
  return (
    <div>
      <Hero />
      <div className="lg:mt-[-140px]">
        <HeroOne />
        <HeroTwo />
        <Speakers />
        <RegistrationCards/>
        <VisitorTestimony />
        <WhyExhibit />
        <Slideshow/>
        <VideoSection/>
        <GainInsight />
        <One />
      </div>
    </div>
  );
}

export default Home;
