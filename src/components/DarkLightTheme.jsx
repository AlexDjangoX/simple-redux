'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import icons from '../../public/assets/outline/index.js';

const DarkLightTheme = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className=" flex justify-center pr-16">
      <Image
        className="mr-2"
        src={icons.sun}
        alt={'icon-sun'}
        height={20}
        width={20}
      />

      <label
        htmlFor="toggle-button"
        className="flex cursor-pointer items-center"
      >
        <div className="relative">
          <input
            type="checkbox"
            id="toggle-button"
            className="sr-only"
            onChange={() =>
              setTheme(currentTheme === 'dark' ? 'light' : 'dark')
            }
          />
          <div className="block h-6 w-11 rounded-full bg-natural2 dark:bg-blackBG3 " />
          <div className="dot absolute left-1 top-1 h-4 w-4 rounded-full bg-primary transition dark:bg-primary" />
        </div>
        <div className="ml-3 font-medium text-gray-700" />
      </label>
      <Image src={icons.moon} alt={'icon-moon'} height={20} width={20} />
    </div>
  );
};

export default DarkLightTheme;
