import './globals.css';
import Script from 'next/script';

import { Manrope } from 'next/font/google';

import Provider from './providers/Provider';
import { ReduxProvider } from '../redux/ReduxProvider';
import Nav from '@/components/Nav';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['variable'],
});

export const metadata = {
  title: 'redux',
  description: 'Simple css Tailwind, redux application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        async
        defer
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
      ></Script>
      <body className={manrope.className}>
        <ReduxProvider>
          <Provider>
            <Nav />
            {children}
          </Provider>
        </ReduxProvider>
      </body>
    </html>
  );
}

// Dancing_Script,
// const dancingScript = Dancing_Script({
//   subsets: ['latin'],
//   weight: ['variable'],
// });
