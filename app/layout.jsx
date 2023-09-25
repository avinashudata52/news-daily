import '../styles/globals.css'
import { Montserrat } from 'next/font/google'
import NavBar from '@/components/Navbar'
import { StoreProvider } from '@/context/Store'

const montserrat = Montserrat({
  subsets: ['latin']
})

export const metadata = {
  title: 'News App',
  description: 'A news app which uses news api to fetch data',
}

export default function RootLayout({ children }) {

  const ApiKey = process.env.API_KEY;
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <StoreProvider>
          <div>
            <NavBar ApiKey={ApiKey} />
            {children}
          </div>
        </StoreProvider>
      </body>
    </html>
  )
}
