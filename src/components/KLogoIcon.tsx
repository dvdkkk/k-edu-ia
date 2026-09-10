import React from 'react';

interface KLogoIconProps {
  className?: string;
}

export const KLogoIcon: React.FC<KLogoIconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Shadow effect for dark vertical stem */}
        <filter id="k-blur" x="0" y="0" width="120" height="120" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
        
        {/* Textured pattern simulating the fabric / film-strip pattern */}
        <pattern id="k-stripe-pattern" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
          <rect width="8" height="8" fill="#181818" />
          <rect x="0" y="0" width="8" height="2" fill="#d0d0d0" opacity="0.8" />
          <circle cx="2" cy="5" r="1" fill="#ffffff" />
          <circle cx="6" cy="5" r="1" fill="#ffffff" />
        </pattern>

        <linearGradient id="k-ribbon-grad" x1="20" y1="70" x2="100" y2="10">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="25%" stopColor="#b0b0b0" />
          <stop offset="50%" stopColor="#303030" />
          <stop offset="85%" stopColor="#101010" />
          <stop offset="100%" stopColor="#f0f0f0" />
        </linearGradient>
      </defs>

      {/* White background card or glow container to ensure black K stands out on dark theme */}
      <rect x="4" y="4" width="112" height="112" rx="20" fill="#ffffff" />

      {/* Soft blurred drop shadow behind vertical stem */}
      <rect x="25" y="16" width="22" height="88" rx="2" fill="#000000" opacity="0.3" filter="url(#k-blur)" />

      {/* Solid vertical left stem */}
      <rect x="27" y="18" width="18" height="84" rx="2" fill="#0a0a0a" />

      {/* Bottom right diagonal leg */}
      <path
        d="M52 56 L88 100 L102 100 L64 52 Z"
        fill="#0d0d0d"
      />

      {/* Sweeping textured upper diagonal ribbon */}
      <path
        d="M24 72 C 34 52, 48 38, 92 12 C 98 18, 102 26, 96 32 C 60 52, 42 66, 32 86 Z"
        fill="url(#k-stripe-pattern)"
      />

      {/* Highlight strokes along the ribbon edge */}
      <path
        d="M25 68 C 36 49, 52 35, 93 14"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M28 75 C 38 58, 52 46, 95 24"
        stroke="#111111"
        strokeWidth="2"
        strokeDasharray="2 3"
      />
      
      {/* Texture grain details */}
      <path
        d="M35 58 C 45 46, 62 34, 88 22"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeDasharray="1 2"
        opacity="0.9"
      />
    </svg>
  );
};
