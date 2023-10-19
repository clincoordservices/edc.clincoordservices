import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ClinCoord EDC',
  description: 'ClinCoord Services (CCS) is a Site Management Organization (SMO) based in California with nationwide and international presence. We are the first SMO that focuses primarily on supporting medical institutions and principal investigators serving underrepresented patients/study populations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}