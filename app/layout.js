import './globals.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { LanguageProvider } from '../lib/LanguageContext';
import { siteConfig } from '../data/siteConfig';
import { Outfit, Inter, Bebas_Neue } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
  display: 'swap',
});

/**
 * Root Layout
 * -----------
 * This is the master layout that wraps every page in the application.
 * It provides:
 * 1. Global CSS styles.
 * 2. The LanguageProvider for bilingual support (EN/ES).
 * 3. The Navbar and Footer components.
 * 4. SEO Metadata (managed in data/siteConfig.js).
 */

export const metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${bebasNeue.variable}`}>
      <head>
        <link
          rel="preload"
          href="/images/hero/hero-image-1.jpg"
          as="image"
          type="image/jpeg"
        />
      </head>
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
