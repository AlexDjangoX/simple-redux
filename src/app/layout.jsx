import './globals.css';
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
