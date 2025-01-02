"use client";
import { FC, ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticWarapperProps {
  className?: string;
  children: ReactNode;
  targetSectionId?: string;
}

const MagneticWrapper: FC<MagneticWarapperProps> = ({
  className,
  children,
  targetSectionId,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouse = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const boundingRect = ref.current?.getBoundingClientRect();
    if (boundingRect) {
      const { width, height, top, left } = boundingRect;
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX, y: middleY });
    }
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const handleClick = () => {
    const section = document.getElementById(targetSectionId); // Get the target section by its ID
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start", // This ensures the scroll aligns with the top of the section
      });
    }
  };

  const { x, y } = position;
  return (
    <motion.div
      className={cn("relative", className)}
      ref={ref}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={handleClick}
    >
      {children}
    </motion.div>
  );
};

export default MagneticWrapper;
