
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedGradientTextProps {
  text: string;
  className?: string;
}

const AnimatedGradientText = ({ text, className }: AnimatedGradientTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure the text animation renders properly
    if (textRef.current) {
      textRef.current.style.opacity = '1';
      console.log("AnimatedGradientText mounted successfully");
    }
    
    return () => {
      console.log("AnimatedGradientText unmounted");
    };
  }, []);

  return (
    <div 
      ref={textRef}
      className={cn(
        "animated-gradient-text relative overflow-hidden bg-clip-text text-transparent bg-gradient-to-r from-seaby-white via-seaby-silver to-seaby-gray",
        className
      )}
    >
      {text}
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
    </div>
  );
};

export default AnimatedGradientText;
