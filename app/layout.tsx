import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import 'nextra-theme-docs/style.css'

export const metadata: Metadata = {
  title: {
    default: 'Snip URL API Documentation',
    template: '%s | Snip URL Docs',
  },
  description: 'Complete API documentation for Snip URL — the developer-friendly URL shortener with analytics, QR codes, and more.',
}

const logo = (
  <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
    Snip URL Docs
  </span>
)

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Layout
          navbar={<Navbar logo={logo} projectLink="https://github.com/mdsaad31/SnipURL" />}
          footer={<Footer>
            <span>{new Date().getFullYear()} © <a href="https://snipurl.click" target="_blank" rel="noopener">Snip URL</a>. All rights reserved.</span>
          </Footer>}
          docsRepositoryBase="https://github.com/mdsaad31/snipurl-docs/tree/main"
          editLink="Edit this page on GitHub"
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
