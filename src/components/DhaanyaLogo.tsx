import React from 'react';

interface DhaanyaLogoProps {
  variant?: 'default' | 'light' | 'dark' | 'compact' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
}

export const DhaanyaLogo: React.FC<DhaanyaLogoProps> = ({
  variant = 'default',
  size = 'md',
  className = '',
  onClick,
}) => {
  // Size mapping
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const textSizes = {
    sm: 'text-base tracking-widest',
    md: 'text-xl tracking-[0.22em]',
    lg: 'text-2xl tracking-[0.25em]',
    xl: 'text-4xl tracking-[0.28em]',
  };

  const kannadaSizes = {
    sm: 'text-[9px]',
    md: 'text-xs',
    lg: 'text-sm',
    xl: 'text-base',
  };

  // Variant color mapping
  const isLight = variant === 'light';
  const circleBorderColor = isLight ? '#E8B93E' : '#C89211';
  const wheatColor = isLight ? '#F4ECD8' : '#3E4B32';
  const textColor = isLight ? 'text-[#F4ECD8]' : 'text-[#2A2620]';
  const kannadaColor = isLight ? 'text-[#E8B93E]' : 'text-[#A9542B]';

  // SVG Wheat / Grain Seal Mark
  const SealIcon = (
    <svg
      className={`${iconSizes[size]} transition-transform duration-300 group-hover:scale-105 shrink-0`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Seal Circle */}
      <circle cx="50" cy="50" r="46" stroke={circleBorderColor} strokeWidth="2.5" strokeDasharray="3 2" />
      <circle cx="50" cy="50" r="42" stroke={circleBorderColor} strokeWidth="1.2" />

      {/* Wheat Grain Ears Left */}
      <path
        d="M 50 78 C 44 68, 36 54, 38 35 C 38 28, 42 22, 50 18 C 50 18, 45 28, 45 38 C 45 48, 48 64, 50 78 Z"
        fill={wheatColor}
        opacity="0.9"
      />
      <path
        d="M 44 58 C 36 54, 28 48, 30 40 C 35 42, 42 48, 44 58 Z"
        fill={circleBorderColor}
      />
      <path
        d="M 46 44 C 38 38, 30 32, 34 24 C 39 28, 44 34, 46 44 Z"
        fill={circleBorderColor}
      />

      {/* Wheat Grain Ears Right */}
      <path
        d="M 50 78 C 56 68, 64 54, 62 35 C 62 28, 58 22, 50 18 C 50 18, 55 28, 55 38 C 55 48, 52 64, 50 78 Z"
        fill={wheatColor}
        opacity="0.9"
      />
      <path
        d="M 56 58 C 64 54, 72 48, 70 40 C 65 42, 58 48, 56 58 Z"
        fill={circleBorderColor}
      />
      <path
        d="M 54 44 C 62 38, 70 32, 66 24 C 61 28, 56 34, 54 44 Z"
        fill={circleBorderColor}
      />

      {/* Center Grain Stem & Sun/Mortar Dot */}
      <line x1="50" y1="20" x2="50" y2="82" stroke={circleBorderColor} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="50" cy="50" r="4" fill={circleBorderColor} />
    </svg>
  );

  if (variant === 'icon') {
    return (
      <div
        className={`inline-flex items-center cursor-pointer ${className}`}
        onClick={onClick}
        title="Dhaanya (ಧಾನ್ಯ)"
      >
        {SealIcon}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div
        className={`group inline-flex items-center gap-2.5 cursor-pointer select-none ${className}`}
        onClick={onClick}
      >
        {SealIcon}
        <div className="flex flex-col">
          <span className={`font-serif font-semibold uppercase ${textSizes[size]} ${textColor} leading-none`}>
            DHAANYA
          </span>
          <span className={`font-kannada font-medium ${kannadaSizes[size]} ${kannadaColor} mt-0.5 leading-none`}>
            ಧಾನ್ಯ
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`group inline-flex flex-col items-center justify-center text-center cursor-pointer select-none ${className}`}
      onClick={onClick}
    >
      {SealIcon}
      <span className={`font-serif font-bold uppercase ${textSizes[size]} ${textColor} mt-1.5 leading-none`}>
        DHAANYA
      </span>
      <span className={`font-kannada font-semibold ${kannadaSizes[size]} ${kannadaColor} mt-0.5 tracking-wider uppercase`}>
        ಧಾನ್ಯ
      </span>
    </div>
  );
};
