import type { Metadata } from 'next'
import { Solway } from 'next/font/google'

import '@radix-ui/themes/styles.css'
import { NavigationBar } from './components/NavigationBar'
import { PagesProvider } from './contexts/PageContext'
import { ThemeProvider } from './components/ThemeProvider'
import { RadixThemeWrapper } from './components/RadixThemeWrapper'
import '@/styles/global.css'

const solway = Solway({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-solway',
})

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Portfólio',
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body className={`${solway.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <RadixThemeWrapper>
            <NavigationBar />
            <PagesProvider>{children}</PagesProvider>
          </RadixThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
