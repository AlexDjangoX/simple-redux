'use client'

import './globals.css';
import Nav from '@/components/Nav';
import Counter from '@/components/Counter';

export default function Page() {
  return (
    <div className='dark:bg-primary '>
      <Nav />
      <Counter />
      
    </div>
  );
}
