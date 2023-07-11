'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import icons from '../../public/assets/outline/index.js';

import logos from '../../public/assets/logos/index.js'


const themeConfig = {
  dark: {
    iconSrc:icons['sun'],
    alt: "dark-mode-sun",
    hoverClass: "hover:bg-red-700",
  },
  light: {
    iconSrc: icons['moon'],
    alt: "dark-mode-moon",
    hoverClass: "hover:bg-blue-700",
  },
};

const DarkLightTheme = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const { iconSrc, alt, hoverClass } = themeConfig[currentTheme];

  return (
    <div className="flex  p-5">
    
      <button
        className={`flex justify-center align-center bg-black ${hoverClass} w-14 h-14 rounded-full`}
        onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      >
        <Image src={iconSrc} alt={alt} height={25} width={25} />
      </button>
    </div>
  );
};

export default DarkLightTheme;
