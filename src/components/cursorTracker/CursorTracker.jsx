import React from "react";
import "./CursorTracker.css";

const CustomCursor = () => {
  const mainCursor = React.useRef(null);
  const positionRef = React.useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  React.useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;

      positionRef.current.mouseX = mouseX;
      positionRef.current.mouseY = mouseY;
      if (mainCursor && mainCursor.current) {
        mainCursor.current.style.transform = `translate3d(${mouseX -
          mainCursor.current.clientWidth / 2}px, ${mouseY -
          mainCursor.current.clientHeight / 2}px, 0)`;
      }
    });

    return () => { };
  }, []);

  React.useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        if (
          Math.abs(positionRef.current.distanceX) +
          Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
    };
    followMouse();
  }, []);

  return (
    <div className={`cursor-wrapper`}>
      <div className="main-cursor " ref={mainCursor}>
        <div className="main-cursor-background"></div>
      </div>
    </div>
  );
};

export default CustomCursor;