import React, { useState, useEffect, useRef } from "react";
import "./RangeSlidercss.css"; // Assuming your styles are saved in this file

const RangeSlider: React.FC = () => {
  const [slider1, setSlider1] = useState<number>(0);
  const [slider2, setSlider2] = useState<number>(10000);
  const rangeSliderRef = useRef<HTMLDivElement>(null);

  const getVals = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const parent = event.target.parentElement as HTMLElement;
    const slides = parent.getElementsByTagName("input");
    let slide1 = parseFloat(slides[0].value);
    let slide2 = parseFloat(slides[1].value);

    if (slide1 > slide2) {
      [slide1, slide2] = [slide2, slide1];
    }

    setSlider1(slide1);
    setSlider2(slide2);
  };

  useEffect(() => {
    if (rangeSliderRef.current) {
      const sliders = rangeSliderRef.current.getElementsByTagName("input");
      for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("input", (event) =>
          getVals(event as unknown as React.ChangeEvent<HTMLInputElement>)
        );
        getVals({
          target: sliders[i],
        } as unknown as React.ChangeEvent<HTMLInputElement>); // Trigger initial display
      }
    }
  }, []);

  return (
    <div className="range-slider mt-2" ref={rangeSliderRef}>
      <input
        type="range"
        min="0"
        max="10000"
        defaultValue="3000"
        onInput={getVals}
      />
      <input
        type="range"
        min="0"
        max="10000"
        defaultValue="5000"
        onInput={getVals}
      />
      <div className="rangeValues pt-2">
        ${slider1} - ${slider2}
      </div>
    </div>
  );
};

export default RangeSlider;
