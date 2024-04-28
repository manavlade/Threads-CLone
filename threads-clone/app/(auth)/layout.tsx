import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import React from "react"


export const metadata = {
    title: 'Threads',
    description: 'A Meta Threads Clone using Next.js 14'
}

const inter = Inter({
    subsets: ["latin"]
})

export default function RootLayout ({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider >
            <html lang="eng">
                <body className={`${inter.className} bg-dark-1`} >
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}