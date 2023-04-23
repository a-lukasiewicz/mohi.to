import { Inter } from 'next/font/google'
import Header from '@/src/components/layout/Header'
import Footer from '@/src/components/layout/Footer'
import { ReduxProvider } from '../redux/Provider'
import './globals.css'

export const metadata = {
  title: 'Adam Łukasiewicz - mohi.to',
  description: 'Recruitment task'
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col h-screen ${inter.className}`}>
        <ReduxProvider>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  )
}
