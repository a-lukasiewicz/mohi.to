import Header from '@/components/Header'
import './globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Adam Łukasiewicz - mohi.to',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
