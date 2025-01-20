"use client";
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

export default function Home() {
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Select all sections on the page
      const sections = document.querySelectorAll("section");

      // Create IntersectionObserver to monitor visibility
      const observer = new IntersectionObserver(
        (entries) => {
          const newVisibleSections = { ...visibleSections }; // Copy the current visibleSections state
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Mark the section as visible
              newVisibleSections[entry.target.id] = true;
            } else {
              // Mark the section as not visible
              newVisibleSections[entry.target.id] = false;
            }
          });
          setVisibleSections(newVisibleSections); // Update the state with visibility info
        },
        { threshold: [0, 1] } // Monitor both when 20% and 100% of the section is visible
      );

      // Observe all sections
      sections.forEach((section) => observer.observe(section));

      // Cleanup observer on component unmount
      return () => observer.disconnect();
    }
  }, [visibleSections]);

  return (
    <div className="w-screen" id="home">
      
      <img src="/grid.svg" alt="grid" style={{ height: "100vh" }} />
      <div className="absolute top-0 w-screen lg:h-screen flex items-center justify-center flex-col">
  {/* Navbar stays fixed */}
  <Navbar className="self-start" />

  {/* Text centered within remaining space */}
    <Text />
<AutoIncreaseCounter></AutoIncreaseCounter>
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
}
