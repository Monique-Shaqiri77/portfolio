import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Condensed } from 'next/font/google'

const inter = Roboto_Condensed({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Monique Shaqiri',
  description: "My name is Monique Shaqiri, Web/App/Softwaredeveloper",
}

type LayoutParamsProps = {
  locale: string
}

type LayoutProps = {
  children: React.ReactNode,
  params: LayoutParamsProps
}

export default async function RootLayout({
  children, params: {locale}
}: LayoutProps) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
          {children}
      </body>
    </html>
  )
}
