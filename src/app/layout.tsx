import type { Metadata } from 'next';
import { Bebas_Neue } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas-neue',
});

export const metadata: Metadata = {
  title: 'PFHSC Podkasti',
  description: 'PFHSC video collection',
  icons: {
    icon: [
      {
        url: '/pfhsc-logo.png',
        type: 'image/png',
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bebasNeue.variable}>
      <body>{children}</body>
    </html>
  );
}