import { useState } from "react";
import seriousImage from "../assets/img/serious.png";
import laughImage from "../assets/img/laugh.png";

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
