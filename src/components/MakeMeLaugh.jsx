import { useState, useEffect } from "react";
import seriousImage from "../assets/img/serious.png";
import laughImage from "../assets/img/laugh.png";

const MakeMeLaugh = () => {
  const [currentImage, setCurrentImage] = useState(seriousImage);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0); // Fade out the current image
      setTimeout(() => {
        setCurrentImage((current) =>
          current === seriousImage ? laughImage : seriousImage
        );
        setOpacity(1); // Fade in the new image
      }, 500);
    }, 4000); // Change image every 4 seconds (4000 milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={currentImage}
      alt="Portræt i fuld figur"
      className="full_fig_img"
      style={{ opacity: opacity }}
    />
  );
};

export default MakeMeLaugh;

/* Change image on hover
const MakeMeLaugh = () => {
  // State to track hover state
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle mouse enter
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <img
      src={isHovered ? laughImage : seriousImage}
      alt="Portræt i fuld figur"
      className="full_fig_img"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default MakeMeLaugh;
*/
