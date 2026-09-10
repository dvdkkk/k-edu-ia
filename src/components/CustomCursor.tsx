import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    // Check if device uses fine pointer (mouse/trackpad on PC)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsPointerFine(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsPointerFine(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaChange);
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMediaChange);
      }
    };
  }, [isVisible]);

  if (!isPointerFine || !isVisible) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[99999] transition-opacity duration-300"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      {/* Red Dot right at cursor center/tip */}
      <div className="relative -top-1.5 -left-1.5 flex items-center justify-center">
        {/* Glowing pulse ring */}
        <div className="absolute w-6 h-6 rounded-full bg-rose-500/30 animate-ping opacity-75" />
        {/* Subtle halo ring */}
        <div className="absolute w-4 h-4 rounded-full bg-rose-500/40 blur-[1px]" />
        {/* Core solid red dot */}
        <div className="w-3 h-3 rounded-full bg-rose-600 border border-white/80 shadow-[0_0_8px_rgba(244,63,94,0.9)]" />
      </div>
    </div>
  );
};
