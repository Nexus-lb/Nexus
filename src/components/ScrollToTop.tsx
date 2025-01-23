import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // FontAwesome arrow icon

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            onClick={scrollToTop}
            onMouseEnter={() => setIsHovered(true)} // Set hover state on mouse enter
            onMouseLeave={() => setIsHovered(false)} // Remove hover state on mouse leave
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: isHovered ? "#1d4ed8" : "#2563eb", // Darker blue on hover
              width: "50px",
              height: "50px",
              borderRadius: "20%", // Change this to "50%" for a circle
              border: "none",
              cursor: "pointer",
              boxShadow: isHovered
                ? "0 4px 8px rgba(0, 0, 0, 0.3)" // Larger shadow on hover
                : "0 2px 4px rgba(0, 0, 0, 0.2)",
              transition: "all 0.3s ease", // Smooth transition for hover effect
            }}
            aria-label="Scroll to top"
          >
            <FaArrowUp
              style={{
                fontSize: "20px",
                color: "#FFFFFF", // White arrow color
              }}
            />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
