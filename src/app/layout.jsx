"use client";

import './globals.css';
import Provider from './providers/Provider';
import{ ReduxProvider }from '../redux/ReduxProvider'
import Nav from '../components/Nav';
import Counter from '../components/Counter'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Provider>
           {children}
          </Provider>
        </ReduxProvider>
      </body>
    </html>
  )
}

