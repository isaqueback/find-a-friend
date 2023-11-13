import './globals.sass'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'

const nunito = Nunito({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  variable: '--font-nunito',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'FindAFriend ',
  description: 'Encontre o animal de estimação ideal para seu estilo de vida!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${nunito.className}`}>
        <Theme>{children}</Theme>
      </body>
    </html>
  )
}
