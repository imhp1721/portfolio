import { useState, useEffect } from "react";

//img imports

import seriousImage from "../assets/img/serious.png";
import laughImage from "../assets/img/laugh.png";
import blob from "../assets/blobs/om_mig_info.svg";

//CHANGE IMAGE

const MakeMeLaugh = () => {
  const [currentImage, setCurrentImage] = useState(seriousImage);
  const [opacity, setOpacity] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0); // Fade out the current image
      setTimeout(() => {
        setCurrentImage((current) =>
          current === seriousImage ? laughImage : seriousImage
        );
        setOpacity(1); // Fade in the new image
      }, 400);
    }, 3500); // Change image every 3,5 seconds (3500 milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <img
        src={currentImage}
        alt="Portræt i fuld figur"
        className="full_fig_img"
        style={{ opacity: opacity }}
      />
      <img className="blob" src={blob} />
    </>
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
