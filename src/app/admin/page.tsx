import Link from 'next/link';

export default function AdminPage() {
  return (
    <main style={{ padding: '3rem 1rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', color: 'var(--color-burgundy)' }}>Admin Dashboard</h1>
      <p style={{ margin: '1.5rem 0' }}>Welcome to the admin area.</p>
      <Link
        href="/admin/bookings"
        style={{
          display: 'inline-block',
          padding: '0.7rem 1.5rem',
          background: 'var(--color-deep-red)',
          color: 'white',
          borderRadius: '0.7rem',
          textDecoration: 'none',
          fontWeight: 600,
        }}
      >
        Go to Bookings Admin
      </Link>
    </main>
  );
}
