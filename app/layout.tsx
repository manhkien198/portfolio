import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Kien Pham',
    description: "This is Kien Pham's portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className='scroll-smooth'>
            <body
                className={`${inter.className} text-slate-400 bg-slate-900 leading-relaxed selection:bg-teal-300 selection:text-teal-90`}>
                {children}
            </body>
        </html>
    );
}
