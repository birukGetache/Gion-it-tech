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

const DynamicHome = dynamic(
  () =>
    Promise.resolve(() => {
      const [visibleSections, setVisibleSections] = useState({});

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
            { threshold: [0.4, 1] }
          );

          sections.forEach((section) => observer.observe(section));

          return () => observer.disconnect();
        }
      }, [visibleSections]);

      return (
        <div className="w-screen">
          <img src="/grid.svg" alt="grid" style={{ height: "100vh" }} />
          <div className="absolute top-0 w-screen">
            <Navbar />
            <Text />
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
    }),
  { ssr: false } // Disable server-side rendering
);

export default DynamicHome;
