import { getCssText, globalCss } from '@/styles'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavigationBar } from './components/NavigationBar'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Portfólio',
}

globalCss()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body className={`${inter.className}`}>
        <Theme
          appearance="light"
          accentColor="tomato"
          grayColor="mauve"
          panelBackground="translucent"
          scaling="100%"
          radius="medium"
        >
          <NavigationBar />
          {children}
        </Theme>
      </body>
    </html>
  )
}
