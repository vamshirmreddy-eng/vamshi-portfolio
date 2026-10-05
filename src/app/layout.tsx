import type { Metadata } from 'next'
import { Montserrat, Cabin, Bangers } from 'next/font/google'
import { MotionConfig } from 'framer-motion'
import { Analytics } from '@vercel/analytics/next'
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from '@/lib/constants'
import '@/styles/globals.css'
import { Header, Footer } from '@/components'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-montserrat',
})

const cabin = Cabin({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cabin',
})

const bangers = Bangers({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bangers',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'Ro2eRPpsCGmV4YUkoSKBGFMzViY_EPZn1Ugnf22QGZc',
  },
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  keywords: [
    'Full Stack Engineer',
    'React',
    'Next.js',
    'TypeScript',
    'Java',
    'Go',
    'AWS',
    'SailPoint',
    'Chargebee',
    'Software Developer',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth bg-dark-bg">
      <head>
        <meta name="theme-color" content="#ffffff" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${montserrat.variable} ${cabin.variable} ${bangers.variable} text-text antialiased`}>
        <MotionConfig reducedMotion="user">
          <Header />
          <main className="min-h-screen pb-28">{children}</main>
          <Footer />
        </MotionConfig>
        <Analytics />

        {/* Dark mode initialization script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'light';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
