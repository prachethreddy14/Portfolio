import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pracheth Bacholla - Software Engineer Portfolio',
  description: 'Software Engineer building scalable, cloud-ready systems. Portfolio showcasing projects, experience, and skills.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

