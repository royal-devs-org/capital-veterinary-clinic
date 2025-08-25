"use client";

import { forwardRef, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BaseProps {
  inverted?: boolean;
  children: ReactNode;
}

type ContainerProps = BaseProps & HTMLAttributes<HTMLDivElement>;

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, inverted = false, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          "Container",
          "mx-auto w-full 2xl:max-w-[80%] px-2 lg:px-20",
          inverted ? "bg-foreground text-background" : "bg-inherit text-inherit",
          className,
        )}
      >
        {children}
      </div>
    );
  },
);

Container.displayName = "Container";
