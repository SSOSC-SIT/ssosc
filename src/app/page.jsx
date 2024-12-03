"use client";

import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import HorizontailScroll from "@/components/Home/HorizontailScroll";
import HackathonPromo from "@/components/Home/hackacthonCard";

const page = () => {

  return (
    <div className="App   ">
      <Hero />
      <HackathonPromo/>
      <About />
      <HorizontailScroll />
    </div>
  );
};

export default page;
