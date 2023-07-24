import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'JITERA | Build the Next Era of Software Development',
    description:
        'JITERA is a software business partner in Singapore and Japan. We develop and utilize a low-code platform that enables us to build software apps faster than ever.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta name="theme-color" content="#ffffff" />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
