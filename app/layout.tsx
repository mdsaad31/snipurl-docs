import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Snip URL API Documentation',
    template: '%s — Snip URL API Docs',
  },
  description: 'Complete developer documentation for the Snip URL API. Create short links, track analytics, generate QR codes, and manage your account programmatically.',
  metadataBase: new URL('https://docs.snipurl.click'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Snip URL API Docs',
    title: 'Snip URL API Documentation',
    description: 'Complete developer documentation for the Snip URL API.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snip URL API Documentation',
    description: 'Complete developer documentation for the Snip URL API.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const logo = (
  <span className="snip-logo">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
    Snip URL <span className="snip-logo-badge">API</span>
  </span>
)

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <meta name="theme-color" content="#C17A2E" />
      </Head>
      <body>
        <Layout
          navbar={<Navbar logo={logo} projectLink="https://github.com/mdsaad31/SnipURL" />}
          footer={<Footer>
            <div className="snip-footer">
              <span>© {new Date().getFullYear()} <a href="https://snipurl.click" target="_blank" rel="noopener noreferrer">Snip URL</a></span>
              <span className="snip-footer-sep">·</span>
              <a href="https://snipurl.click/sign-up" target="_blank" rel="noopener noreferrer">Get Started Free</a>
            </div>
          </Footer>}
          docsRepositoryBase="https://github.com/mdsaad31/snipurl-docs/tree/master/content"
          editLink="Edit this page on GitHub"
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
