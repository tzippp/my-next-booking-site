import type { ReactNode } from 'react';
import Link from 'next/link';
import '../../styles/global.css';

const navLinks = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/bookings', label: 'Bookings' },
  { href: '/admin/calendar', label: 'Calendar' },
  { href: '/admin/clients', label: 'Clients' },
  { href: '/admin/chat', label: 'Chat' },
  { href: '/admin/payments', label: 'Payments' },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--color-cream)' }}>
      <aside
        style={{
          width: 240,
          background: 'var(--color-burgundy)',
          color: 'var(--color-white)',
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem 1rem',
          gap: '2rem',
          minHeight: '100vh',
        }}
      >
        <div style={{ fontFamily: 'Le Major, Playfair Display SC, serif', fontSize: 28, fontWeight: 700, marginBottom: 32, letterSpacing: 2 }}>
          Admin
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: 'var(--color-white)',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: 18,
                padding: '0.5rem 0',
                borderRadius: 8,
                transition: 'background 0.2s',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main style={{ flex: 1, minHeight: '100vh', background: 'var(--color-cream)', padding: '0', overflow: 'auto' }}>
        {children}
      </main>
      <style>
        {`
        @media (max-width: 900px) {
          aside {
            width: 100px !important;
            padding: 1rem 0.3rem !important;
          }
          aside nav a {
            font-size: 14px !important;
            padding: 0.3rem 0 !important;
          }
        }
      `}
      </style>
    </div>
  );
}
