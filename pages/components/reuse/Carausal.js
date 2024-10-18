import React, { useEffect, useRef } from 'react';

export default function Carausel({ images,className }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const firstLogoWidth = track.children[0].clientWidth;

    // Clone logos for seamless scroll
    for (let i = 0; i < images.length; i++) {
      const clone = track.children[i].cloneNode(true);
      track.appendChild(clone);
    }

    const scroll = () => {
      // Move the logos left
      track.style.transition = 'transform 0.5s ease-in-out';
      track.style.transform = `translateX(-${firstLogoWidth}px)`;

      // Move the first logo to the end
      setTimeout(() => {
        track.style.transition = 'none'; // Disable transition
        track.appendChild(track.children[0]); // Move first logo to end
        track.style.transform = 'translateX(0)'; // Reset position
      }, 500); // Match with transition duration
    };

    const interval = setInterval(scroll, 3000); // Adjust scroll speed

    return () => clearInterval(interval);
  }, [images.length]); // Add images.length to dependency array

  return (
    <div className="overflow-hidden w-[90%] py-4 px-9 mx-auto">
      <div
        ref={trackRef}
        className="flex"
        style={{ transition: 'transform 0.5s ease-in-out' }}
      >
        {images.map((logo, index) => (
          <div key={index} className="flex-shrink-0 flex gap-10">
            <img src={logo} alt={`Logo ${index + 1}`} className={`${className}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
