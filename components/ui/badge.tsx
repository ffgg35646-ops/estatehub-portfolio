import * as React from "react";

import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline";
}

function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors",
        {
          "bg-green-600 text-white":
            variant === "default",

          "bg-gray-100 text-gray-900":
            variant === "secondary",

          "border border-gray-300 bg-transparent text-gray-700":
            variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
