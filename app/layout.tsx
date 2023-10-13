import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const title = 'Dreamtorch Games';
const description =
  'Innovative indie game studio based in India, dedicated to crafting captivating narrative experiences and games that transport players to the mystical and enchanting realms of mythology, history, and culture.';
const url = 'https://dreamtorchgames.com';
const logoUrl = `${url}/dreamtorchgames-logo.png`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    url,
    siteName: title,
    title,
    description,
    images: [{ url: logoUrl }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: logoUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
