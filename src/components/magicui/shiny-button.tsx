// src/components/magicui/shiny-button.tsx
import { cn } from "@/lib/utils";
import React, { CSSProperties } from "react";

export interface ShinyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string;
  children?: React.ReactNode;
}

const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ text = "shiny-button", className, children, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={cn(
          "relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
          className,
        )}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          {children || text}
        </span>
      </button>
    );
  },
);

ShinyButton.displayName = "ShinyButton";

export { ShinyButton };
