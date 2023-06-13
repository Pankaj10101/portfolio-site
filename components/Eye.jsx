import { useState, useEffect, useRef } from "react";
import "../app/eye.css"

function Eye() {
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
  const [blink, setBlink] = useState(false);
  const eyeLeft = useRef();

  function calcAngle(element) {
    if (!element.current) return;

    let elX = element.current.offsetLeft + element.current.clientWidth / 2;
    let elY = element.current.offsetTop + element.current.clientHeight / 2;

    var rad = Math.atan2(mouseCoordinates.x - elX, mouseCoordinates.y - elY);
    var rot = rad * (180 / Math.PI) +125;

    return rot;
  }

  const handleMouseMove = (event) => {
    setMouseCoordinates({ x: event.clientX, y: event.clientY });

  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => {
        setBlink(false);
      }, 100);
    }, 3000);

    return () => {
      clearInterval(blinkInterval);
    };
  }, []);

  return (
    <div className="App">
      <div className="eye_container">
        <div
          ref={eyeLeft}
          style={{
            transform: `rotate(${calcAngle(eyeLeft)}deg)`,
          }}
          className={`eye ${blink ? "blink" : ""}`}
        ></div>
      </div>
    </div>
  );
}

export default Eye;
