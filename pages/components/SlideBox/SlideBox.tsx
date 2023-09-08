import React, { useEffect, useState } from "react";
import TextBox from "../TextBox/TextBox";
import { Box, Typography } from "@mui/material";

interface SlideInComponentProps {
  text: string;
}

const LoremIpsum: string =
  "What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?"; // Your long text here

const SlideInComponent: React.FC<SlideInComponentProps> = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const slideElement = document.querySelector(".slide-in-element");
    const textBoxElement = document.querySelector(".text-box"); // Assign a class or id 'text-box' to your TextBox in its JSX.

    if (slideElement && textBoxElement) {
      const slideRect = slideElement.getBoundingClientRect();
      const textRect = textBoxElement.getBoundingClientRect();

      const slideTargetTop = slideRect.top + scrollY;
      const textTargetTop = textRect.top + scrollY;

      // Slide in when the top of the TextBox element is about to enter the viewport from the bottom
      const slideInTrigger = scrollY - windowHeight * 0.8;

      // Slide out when the TextBox element reaches the upper 25% of the screen
      const slideOutTrigger = scrollY;

      if (
        slideInTrigger >= textTargetTop &&
        slideOutTrigger <= slideTargetTop
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      className="slide-in-element"
      sx={{
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease-in-out",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(-100%)",
        padding: "24px",
        backgroundColor: "rgba(0,0,0, 0.4)" /* Black w/opacity/see-through */,
        color: "white",
        position: "relative",
        fontWeight: "bold",
        border: "1px solid #f1f1f1",
        zIndex: "2",
        width: "60%",
      }}
    >
      <Typography variant="h6" fontWeight="bold">
      1.5 years experience in full stack development, and I’m able to work on full stack and deliver mature application product from databases, backend services, APIs to frontend UI/UX design and their implementation.
      </Typography>
      <Typography variant="h6" fontWeight="bold">
      </Typography>
      <Typography variant="h6" fontWeight="bold">
      In details:
      </Typography>
      <Typography variant="h6" fontWeight="bold">
      4 months experience as an API Automation developer at RBC.
      </Typography>
      <Typography variant="h6" fontWeight="bold">
      8 months experience in the development of a blockchain integrated system and website application. 
      </Typography>
      <Typography variant="h6" fontWeight="bold">
      4 months in Multi-Modal Analysis, object scouting through RGB-D sensors and VR Model Reconstruction research.
      </Typography>
    </Box>
  );
};

export default SlideInComponent;
