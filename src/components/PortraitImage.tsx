import { useState } from 'react';

interface PortraitImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function PortraitImage({ src, alt, className = '' }: PortraitImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`w-full h-full bg-gradient-to-br from-[#161618] via-[#1c0909] to-[#050505] flex flex-col items-center justify-center p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-12 h-12 border border-[#E62E2E]/60 flex items-center justify-center mb-3">
          <span className="font-display text-2xl text-[#E62E2E]">P.</span>
        </div>
        <span className="font-display text-xl tracking-wider text-white uppercase">
          Moch. Fakhruddin Ar Rozi
        </span>
        <span className="text-xs text-zinc-400 mt-1">
          Information Systems &amp; Data Analytics
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
