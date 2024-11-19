"use client";
import React, { useState } from "react";
import { Sparkle, Star } from "lucide-react";
import { Colors, Liquid } from "../ui/liquid-gradient";

type ColorKey =
  | "color1"
  | "color2"
  | "color3"
  | "color4"
  | "color5"
  | "color6"
  | "color7"
  | "color8"
  | "color9"
  | "color10"
  | "color11"
  | "color12"
  | "color13"
  | "color14"
  | "color15"
  | "color16"
  | "color17";

const COLORS: Colors = {
  color1: "#FFFFFF",
  color2: "#1E10C5",
  color3: "#9089E2",
  color4: "#FCFCFE",
  color5: "#F9F9FD",
  color6: "#B2B8E7",
  color7: "#0E2DCB",
  color8: "#0017E9",
  color9: "#4743EF",
  color10: "#7D7BF4",
  color11: "#0B06FC",
  color12: "#C5C1EA",
  color13: "#1403DE",
  color14: "#B6BAF6",
  color15: "#C1BEEB",
  color16: "#290ECB",
  color17: "#3F4CC0",
};

interface LiquidGradientButtonProps {
  title: string;
  link?: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const LiquidGradientButton: React.FC<LiquidGradientButtonProps> = ({
  title,
  icon,
  link,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center">
      <a
        href={link?.toString() ?? "#"}
        target="_blank"
        className="relative inline-block  w-36 h-[2.7em] mx-auto group dark:bg-black bg-white dark:border-white border-black border-2 rounded-lg"
      >
        <div className="absolute w-[112.81%] h-[128.57%] top-[8.57%] left-1/2 -translate-x-1/2 filter blur-[19px] opacity-70">
          <span className="absolute inset-0 rounded-lg bg-[#d9d9d9] filter blur-[6.5px]"></span>
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            <Liquid isHovered={isHovered} colors={COLORS} />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[92.23%] h-[112.85%] rounded-lg bg-[#010128] filter blur-[7.3px]"></div>
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          <span className="absolute inset-0 rounded-lg bg-[#d9d9d9]"></span>
          <span className="absolute inset-0 rounded-lg bg-black"></span>
          <Liquid isHovered={isHovered} colors={COLORS} />
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className={`absolute inset-0 rounded-lg border-solid border-[3px] border-gradient-to-b from-transparent to-white mix-blend-overlay filter ${
                i <= 2 ? "blur-[3px]" : i === 3 ? "blur-[5px]" : "blur-[4px]"
              }`}
            ></span>
          ))}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[70.8%] h-[42.85%] rounded-lg filter blur-[15px] bg-[#006]"></span>
          <span className="absolute flex  items-center justify-between gap-2  top-[7%] left-[5%] w-[90%] h-[85%] rounded-lg group-hover:text-yellow-400 text-white text-xl font-semibold tracking-wide whitespace-nowrap">
            <button
              onClick={onClick}
              className="flex flex-row items-center justify-center gap-2 w-full"
            >
              {title}
              {icon}
            </button>
          </span>
        </div>
        <button
          className="absolute inset-0 rounded-lg bg-transparent cursor-pointer"
          aria-label="Get Started"
          type="button"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        ></button>
      </a>
    </div>
  );
};

export default LiquidGradientButton;
