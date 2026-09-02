import React from 'react';

interface DhaanyaLogoProps {
  variant?: 'default' | 'light' | 'dark' | 'compact' | 'stacked' | 'horizontal' | 'icon' | 'monochrome' | 'fullImage';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  onClick?: () => void;
  showTagline?: boolean;
}

export const DhaanyaLogo: React.FC<DhaanyaLogoProps> = ({
  variant = 'default',
  size = 'md',
  className = '',
  onClick,
  showTagline = false,
}) => {
  // Size mapping for logo badge/avatar
  const logoImageSizes = {
    sm: 'w-8 h-8 rounded-lg',
    md: 'w-11 h-11 rounded-xl',
    lg: 'w-16 h-16 rounded-2xl',
    xl: 'w-24 h-24 rounded-3xl',
    '2xl': 'w-36 h-36 rounded-3xl',
  };

  const textSizes = {
    sm: 'text-base tracking-widest',
    md: 'text-xl tracking-[0.22em]',
    lg: 'text-2xl tracking-[0.25em]',
    xl: 'text-4xl tracking-[0.28em]',
    '2xl': 'text-5xl tracking-[0.3em]',
  };

  const kannadaSizes = {
    sm: 'text-[9px]',
    md: 'text-xs',
    lg: 'text-sm',
    xl: 'text-base',
    '2xl': 'text-lg',
  };

  const isLight = variant === 'light';
  const isDark = variant === 'dark';
  const isMonochrome = variant === 'monochrome';

  let textColor = 'text-[#2A2620]';   // Husk Charcoal
  let kannadaColor = 'text-[#A9542B]'; // Burnt Ochre

  if (isLight) {
    textColor = 'text-[#F4ECD8]';
    kannadaColor = 'text-[#E8B93E]';
  } else if (isDark) {
    textColor = 'text-[#F4ECD8]';
    kannadaColor = 'text-[#C89211]';
  } else if (isMonochrome) {
    textColor = 'text-[#2A2620]';
    kannadaColor = 'text-[#2A2620]';
  }

  // Brand Logo Image Badge
  const LogoBadge = (
    <div className={`relative overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-md border border-[#C89211]/40 ${logoImageSizes[size]}`}>
      <img
        src="/images/dhaanya-logo.jpg"
        alt="Dhaanya Logo (ಧಾನ್ಯ)"
        className="w-full h-full object-cover object-center transform scale-[1.02]"
        onError={(e) => {
          (e.target as HTMLElement).setAttribute('src', '/dhaanya-logo.jpg');
        }}
      />
    </div>
  );

  if (variant === 'fullImage') {
    return (
      <div
        className={`inline-flex flex-col items-center cursor-pointer select-none ${className}`}
        onClick={onClick}
        title="Dhaanya (ಧಾನ್ಯ)"
      >
        <div className="relative overflow-hidden rounded-2xl shadow-xl border border-[#C89211]/50 group transition-all duration-300 hover:shadow-2xl">
          <img
            src="/images/dhaanya-logo.jpg"
            alt="Dhaanya (ಧಾನ್ಯ) Official Logo"
            className="w-full max-w-[280px] h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    );
  }

  if (variant === 'icon') {
    return (
      <div
        className={`inline-flex items-center cursor-pointer ${className}`}
        onClick={onClick}
        title="Dhaanya (ಧಾನ್ಯ)"
      >
        {LogoBadge}
      </div>
    );
  }

  if (variant === 'compact' || variant === 'horizontal') {
    return (
      <div
        className={`group inline-flex items-center gap-2.5 cursor-pointer select-none ${className}`}
        onClick={onClick}
      >
        {LogoBadge}
        <div className="flex flex-col text-left">
          <span className={`font-serif font-bold uppercase ${textSizes[size]} ${textColor} leading-none drop-shadow-xs`}>
            DHAANYA
          </span>
          <span className={`font-kannada font-semibold ${kannadaSizes[size]} ${kannadaColor} mt-0.5 leading-none tracking-wider`}>
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
      {LogoBadge}
      <span className={`font-serif font-bold uppercase ${textSizes[size]} ${textColor} mt-2 leading-none`}>
        DHAANYA
      </span>
      <span className={`font-kannada font-semibold ${kannadaSizes[size]} ${kannadaColor} mt-0.5 tracking-wider uppercase`}>
        ಧಾನ್ಯ
      </span>
      {showTagline && (
        <span className="text-[10px] tracking-widest text-[#3E4B32] uppercase font-sans mt-1.5 font-medium">
          Freshly Milled • Made for You
        </span>
      )}
    </div>
  );
};

