import React, { useState } from "react";
import Slideshow from "../../Slideshow";

export default function Level4(props) {

  const lessonNumber = "lesson-4"
  const images = [
    {
      label: "Slide 1",
      imgPath: `images/lessons/${lessonNumber}-01.png`
    },
    {
      label: "Slide 2",
      imgPath: `images/lessons/${lessonNumber}-02.png`
    },
    {
      label: "Slide 3",
      imgPath: `images/lessons/${lessonNumber}-03.png`
    },
    {
      label: "Slide 4",
      imgPath: `images/lessons/${lessonNumber}-04.png`
    },
    {
      label: "Slide 5",
      imgPath: `images/lessons/${lessonNumber}-05.png`
    },
    {
      label: "Slide 6",
      imgPath: `images/lessons/${lessonNumber}-06.png`
    },
    {
      label: "Slide 7",
      imgPath: `images/lessons/${lessonNumber}-07.png`
    },
    {
      label: "Slide 8",
      imgPath: `images/lessons/${lessonNumber}-08.png`
    },
    {
      label: "Slide 9",
      imgPath: `images/lessons/${lessonNumber}-09.png`
    },
    {
      label: "Slide 10",
      imgPath: `images/lessons/${lessonNumber}-10.png`
    },
    {
      label: "Slide 11",
      imgPath: `images/lessons/${lessonNumber}-11.png`
    },
    {
      label: "Slide 12",
      imgPath: `images/lessons/${lessonNumber}-12.png`
    },
    {
      label: "Slide 13",
      imgPath: `images/lessons/${lessonNumber}-13.png`
    },
    {
      label: "Slide 14",
      imgPath: `images/lessons/${lessonNumber}-14.png`
    },
    {
      label: "Slide 15",
      imgPath: `images/lessons/${lessonNumber}-15.png`
    }
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <section>
      <div>
      <Slideshow
      mobileImages={images}
      desktopImages={images}
      level={props.level}
      activeStep={activeStep}
      handleNext={handleNext}
      handleBack={handleBack}
      maxSteps={maxSteps}
    />
      </div>
      <br />{" "}
      <div>
      </div>
    </section>
  );
}
