import '@/styles/globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Search',
  description: 'Perplexity Like Search App',
}

export type LayoutProps = {
  children: ReactNode
}

export default function RootLayout(props: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
      </head>
      <body className={inter.className}>
        <AppRouterCacheProvider>{props.children}</AppRouterCacheProvider>
      </body>
    </html>
  )
}
