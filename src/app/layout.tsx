import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import ToasterContext from '@/app/context/ToasterContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Messenger Clone',
    description: 'Messenger clone',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta name="theme-color" content="#ffffff" />
            </head>
            <body className={inter.className}>
                <ToasterContext />
                {children}
            </body>
        </html>
    )
}
