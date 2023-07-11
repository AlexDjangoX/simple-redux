import React from 'react';
import Image from 'next/image';
import DarkLightTheme from './DarkLightTheme';

import logos from '../../public/assets/logos/index.js';

const Nav = () => {
  return (
    <>
      <div className="flex justify-center bg-gray-700 dark:bg-gray-600">
        <DarkLightTheme />
        
      </div>
      <div className="flex p-4 space-x-8">
          {Object.values(logos).map((logo, index) => (
            <div key={index}>
              <Image
                src={logo}
                alt={`Logo ${index}`}
                width={32}
                height={32}
                className="inline-block"
              />
            </div>
          ))}
        </div>
    </>
  );
};

export default Nav;

