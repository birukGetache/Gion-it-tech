"use client";
import React, { useEffect, useRef } from "react";
import styles from "./BendingLine.module.css";

const BentLine = ({color}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size to fit the window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const numParticles = 100;

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1; // Random size between 1 and 6
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        if(color){
           this.color = `rgba(0, 0, 0, ${Math.random()})`;
          console.log(color);

        }
        else{
          this.color = `blue`;
          this.color = `rgba(255, 255, 255, ${Math.random()})`;

        }
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 15; // Add blur
        ctx.shadowColor = this.color; // Use the particle's color for the shadow
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadowBlur after drawing
      }
    }

    const initParticles = () => {
      for (let i = 0; i < numParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animateParticles);
    };

    // Initialize particles and animation
    initParticles();
    animateParticles();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.length = 0;
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [color]);

  return (
    <div className={`${styles.container} relative h-screen lg:grid grid-cols-2`}>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
        <div>
          <h1 className="text-5xl md:text-4xl font-bold text-center text-gray-200 mt-6 sm:mt-10 mb-4 sm:mb-6">
            <span className="text-indigo-600">Empowering</span>{" "}
            <span className="text-green-500">Ideas</span> with{" "}
            <span className="text-yellow-500">Technology</span>
          </h1>
          <p className="text-2xl text-center text-gray-400 mb-6 sm:mb-12">
            Unleashing the full potential of technology to bring your vision to
            life, securely and innovatively.
          </p>
          <svg
            className={styles.svg}
            viewBox="0 0 800 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 50 150 Q 350 50 750 150"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="red">
                  <animate
                    attributeName="stop-color"
                    values="red;blue;green;yellow;red"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="100%" stopColor="blue">
                  <animate
                    attributeName="stop-color"
                    values="blue;yellow;red;green;blue"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="mt-4 sm:mt-6">
          <img
            src="/map.png"
            alt="Map"
            className="w-full max-w-sm sm:max-w-md mx-auto"
          />
        </div>
   
    </div>
  );
};

export default BentLine;
