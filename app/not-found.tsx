export default function NotFound() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '50vh', padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>404 — Page Not Found</h1>
      <p style={{ color: '#666', marginBottom: '1.5rem' }}>The page you&apos;re looking for doesn&apos;t exist.</p>
      <a href="/" style={{ color: '#0070f3', textDecoration: 'underline' }}>Go back to documentation</a>
    </div>
  )
}
