import React from "react";
import About from "./components/about";
import Bots from "./components/Bots";
import Buy from "./components/buy";
import Footer from "./components/Footer";
import Header from "./components/header";
import Intro from "./components/intro";
import Roadmap from "./components/Roadmap";
import Solution from "./components/solution";
import Team from "./components/Team";
import Tokenomics from "./components/tokenomics";

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
            <Tokenomics />
            <Roadmap />
            <Team />
            <Bots />
            <Footer />
         </div>
   );
}
