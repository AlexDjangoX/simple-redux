import './globals.css';
import Provider from './providers/Provider';
import{ ReduxProvider }from '../redux/ReduxProvider'


export const metadata = {
  title: 'redux',
  description: 'Simple css Tailwind, redux application',
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

