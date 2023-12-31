import type { Metadata } from 'next'
import '@/app/styles/globals.css'
import Header from '@/app/Header'
import Footer from '@/app/Footer'


export const metadata: Metadata = {
  title: 'Next.js13 blog',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
