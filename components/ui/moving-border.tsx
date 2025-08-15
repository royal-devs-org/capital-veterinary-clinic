"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MovingBorderProps {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  borderRadius?: string;
  borderColors?: string[];
}

export const MovingBorder = ({
  children,
  duration = 4,
  className = "",
  borderRadius = "1.5rem",
  borderColors = [
    "#8B5CF6", // purple-500
    "#06B6D4", // cyan-500  
    "#10B981", // emerald-500
    "#F59E0B", // amber-500
    "#EF4444", // red-500
    "#8B5CF6", // back to purple
  ],
}: MovingBorderProps) => {
  return (
    <motion.div
      style={{
        borderRadius: borderRadius,
      }}
      className={cn(
        "relative overflow-hidden bg-white p-[3px]",
        className
      )}
    >
      <motion.div
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
        className="relative h-full w-full bg-white"
      >
        <motion.div
          className="absolute inset-0 z-10"
          style={{
            background: `conic-gradient(from 0deg, ${borderColors.join(", ")})`,
            borderRadius: borderRadius,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <div
          style={{
            borderRadius: `calc(${borderRadius} * 0.96)`,
          }}
          className="relative z-20 h-full w-full bg-white"
        >
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};
