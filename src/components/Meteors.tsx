"use client";

import React, { useEffect, useState } from "react";

export const Meteors = ({ number = 20 }: { number?: number }) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: "-10px",
      left: Math.floor(Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200)) + "px",
      animationDelay: Math.random() * 5 + "s",
      animationDuration: Math.floor(Math.random() * 6 + 4) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {meteorStyles.map((style, idx) => (
        <span
          key={"meteor" + idx}
          style={style}
          className="animate-meteor absolute h-0.5 w-0.5 rounded-[9999px] bg-emerald-400 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[60px] before:h-[1px] before:bg-gradient-to-r before:from-emerald-400 before:to-transparent"
        />
      ))}
    </div>
  );
};
