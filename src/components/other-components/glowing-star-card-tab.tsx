"use client";
import React from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "../ui/glowing-stars";

interface GlowingStarsCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export const GlowingStarsCard = ({
  icon,
  title,
  description,
}: GlowingStarsCardProps) => {
  return (
    <div className="flex items-center justify-center antialiased">
      <GlowingStarsBackgroundCard className="flex flex-col justify-between ga-10">
        <GlowingStarsTitle className="text-sm mb-1">{title}</GlowingStarsTitle>
        <div className="flex justify-between items-end">
          <GlowingStarsDescription className="text-xs mr-2">
            {description}
          </GlowingStarsDescription>
          <div className="rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
            {icon}
          </div>
        </div>
      </GlowingStarsBackgroundCard>
    </div>
  );
};
