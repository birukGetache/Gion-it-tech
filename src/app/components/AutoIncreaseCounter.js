"use client"
import React, { useState, useEffect } from "react";

const AutoIncreaseCounter = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);

  useEffect(() => {
    const projectInterval = setInterval(() => {
      setProjectCount((prev) => {
        if (prev < 50) {
          return prev + 1;
        } else {
          clearInterval(projectInterval); // Stop incrementing at 50
          return prev;
        }
      });
    }, 40);

    const clientInterval = setInterval(() => {
      setClientCount((prev) => {
        if (prev < 10) {
          return prev + 1;
        } else {
          clearInterval(clientInterval); // Stop incrementing at 10
          return prev;
        }
      });
    }, 40);

    return () => {
      clearInterval(projectInterval);
      clearInterval(clientInterval);
    };
  }, []);

  return (
    <div className="grid grid-cols-2 items-center justify-center gap-10 p-4 rounded-md ">
      <div className="bg-white shadow-md rounded-lg p-4  text-center mb-04 bg-opacity-10">
        <p className="text-lg font-semibold text-gray-600">
        <strong className="font-cursive">Projects:</strong> {projectCount} +
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 text-center bg-opacity-10">
        <p className="text-lg font-semibold text-gray-600">
        <strong className="font-cursive">Clients:</strong> {clientCount} +
        </p>
      </div>
    </div>
  );
};

export default AutoIncreaseCounter;
