import { Theme } from '@radix-ui/themes'
import type { Metadata } from 'next'
import { Solway } from 'next/font/google'

import '@radix-ui/themes/styles.css'
import { NavigationBar } from './components/NavigationBar'
import { PagesProvider } from './contexts/PageContext'
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
    <html lang="en">
      <head></head>
      <body className={`${solway.variable}`}>
        <Theme
          appearance="light"
          accentColor="ruby"
          grayColor="mauve"
          panelBackground="translucent"
          scaling="100%"
          radius="medium"
        >
          <NavigationBar />
          <PagesProvider>{children}</PagesProvider>
        </Theme>
      </body>
    </html>
  )
}
