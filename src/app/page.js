"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Text from "./components/text";
import Navbar from "./components/Nav";
import About from "./components/About";
import Services from "./components/Service";
import Team from "./components/Team";
import Project from "./components/Project";
import Partner from "./components/Partner";
import Fotter from "./components/Fotter";
import AutoIncreaseCounter from "./components/AutoIncreaseCounter";

const DynamicHome = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const [color , setColor] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sections = document.querySelectorAll("section");

      const observer = new IntersectionObserver(
        (entries) => {
          const newVisibleSections = { ...visibleSections };
          entries.forEach((entry) => {
            newVisibleSections[entry.target.id] = entry.isIntersecting;
          });
          setVisibleSections(newVisibleSections);
        },
        { threshold: [0, 1] }
      );

      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    }
  }, [visibleSections]);

  return (
    <div className="w-screen">
      <img src="/grid.svg" alt="grid" style={{ height: "100vh" }} />
      <Navbar setColor={setColor}  color = {color} />
      <div className="absolute top-28 h-screen w-screen">
    
        <Text color = {color}/>
      </div>

      <div className="relative sm:mt-20 md:mt-20">
        <About isVisible={visibleSections.about} />
      </div>
      <Services isVisible={visibleSections.services} />
      <Team isVisible={visibleSections.team} />
      <Project isVisible={visibleSections.project} />
      <Partner isVisible={visibleSections.partner} />
      <Fotter isVisible={visibleSections.fotter} />
    </div>
  );
};

// Enable client-side rendering
export default dynamic(() => Promise.resolve(DynamicHome), { ssr: false });