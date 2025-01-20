"use client"
import React, { useEffect, useState } from "react";

const PartnerCard = ({ partner }) => {
  return (
    <div
      className="max-w-xs mx-auto bg-white bg-opacity-10 rounded-full p-10 shadow-xl overflow-hidden mb-8 border-slate-600"
      style={{ borderWidth: "3px" }}
    >
      {/* Partner Logo */}
      <img
        src={partner.logoUrl}
        alt={partner.name}
        className="w-full h-32 object-contain mx-auto p-4"
      />
    </div>
  );
};

const PartnerPage = ({ isVisible }) => {
  const [length, setLength] = useState(0);

  // Example partner data
  const partners = [
    {
      name: "Bit",
      description:
        "Bit carear is a leading provider of innovative solutions with a focus on technology-driven growth.",
      logoUrl: "/bit.jpg",
      link: "https://www.partner1.com",
    },
    // Add more partners if needed
  ];

  useEffect(() => {
    setLength(partners.length);
  }, [partners.length]);

  return (
    <section
      className={`container py-10 mx-auto px-4 service transition-opacity duration-500 ease-in-out flex items-center justify-center ${
        isVisible ? "opacity-100 animate-serviceanime" : "opacity-0"
      }`}
      id="partner"
    >
      <div className="container mx-auto px-4 max-h-[500px] overflow-y-auto">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-12">
          Our Trusted Partner
        </h1>
        <div
          className={`grid ${
            length === 1
              ? "place-items-center h-fit grid-cols-1"
              : "gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {partners.length === 1 ? (
            <PartnerCard key={0} partner={partners[0]} />
          ) : (
            partners.map((partner, index) => <PartnerCard key={index} partner={partner} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default PartnerPage;
