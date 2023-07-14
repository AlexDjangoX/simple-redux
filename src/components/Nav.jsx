'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import DarkLightTheme from './DarkLightTheme';

const Nav = () => {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Overview' },
    { href: '/job-search', label: 'Job Search' },
    { href: '/estimated-salaries', label: 'Estimated Salaries' },
  ];

  return (
    <div className="flex h-[70px] items-center justify-between bg-white align-middle dark:bg-darkBG1">
      <h1 className="flex justify-center pl-16 text-[24px] text-primary ">
        JOBIT
      </h1>
      <div className="flex space-x-4 text-natural6">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <p
              className={`cursor-pointer ${
                pathname === link.href ? 'border-b-2 border-primary' : ''
              }`}
            >
              {link.label}
            </p>
          </Link>
        ))}
      </div>
      <DarkLightTheme />
    </div>
  );
};

export default Nav;
