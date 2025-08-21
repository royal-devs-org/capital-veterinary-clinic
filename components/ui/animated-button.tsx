"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button, buttonVariants } from "./button";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends 
  React.ComponentProps<"button">,
  VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  hoverScale?: number;
  tapScale?: number;
  hoverRotate?: number;
  asChild?: boolean;
}

export function AnimatedButton({
  children,
  className,
  hoverScale = 1.05,
  tapScale = 0.95,
  hoverRotate = 0,
  variant,
  size,
  asChild,
  ...props
}: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: hoverScale,
        rotate: hoverRotate,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      whileTap={{ 
        scale: tapScale,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      className="inline-block w-full"
    >
      <Button
        variant={variant}
        size={size}
        asChild={asChild}
        className={cn(
          "hover:shadow-xl active:shadow-lg",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}

export default AnimatedButton;
