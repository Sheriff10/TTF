import React from "react";
import About from "./components/about";
import Bots from "./components/Bots";
import Buy from "./components/buy";
import Footer from "./components/Footer";
import Header from "./components/header";
import Intro from "./components/intro";
import Partners from "./components/partners";
import Roadmap from "./components/Roadmap";
import Slider from "./components/slider";
import Solution from "./components/solution";
import Team from "./components/Team";
import Tokenomics from "./components/tokenomics";
import Video from "./components/video";

export default function Page() {
   return (
         <div className="">
            <div className="h-i-wrap">
               <Header />
               <Intro />
            </div>
            <Buy />
            <About />
            <Solution />
            <Slider />
            <Tokenomics />
            <Roadmap />
            <Partners />
            <Team />
            <Bots />
            <Footer />
         </div>
   );
}
