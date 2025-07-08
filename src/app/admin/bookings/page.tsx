'use client';
import { useEffect, useState } from 'react';

type Booking = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
  createdAt: string;
};

export default function AdminBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/booking')
      .then(res => res.json())
      .then((data) => {
        if (data.success) {
          setBookings(data.bookings);
        } else {
          setError(data.error || 'Failed to load bookings.');
        }
      })
      .catch(() => setError('Failed to load bookings.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main style={{
      minHeight: '80vh',
      background: 'var(--color-cream)',
      fontFamily: 'Cormorant Garamond, Playfair Display, Georgia, serif',
      color: 'var(--color-burgundy)',
      padding: '3rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
    >
      <h1 style={{
        color: 'var(--color-deep-red)',
        fontSize: '2.1rem',
        fontWeight: 800,
        marginBottom: '1.2rem',
        letterSpacing: '0.5px',
        textAlign: 'center',
      }}
      >
        Bookings Admin
      </h1>
      {loading
        ? (
            <div style={{ color: 'var(--color-burgundy)', fontSize: '1.1rem' }}>Loading...</div>
          )
        : error
          ? (
              <div style={{ color: '#b8002e', background: '#fff0f0', borderRadius: 8, padding: 12, textAlign: 'center' }}>{error}</div>
            )
          : bookings.length === 0
            ? (
                <div style={{ color: 'var(--color-burgundy)', fontSize: '1.1rem' }}>No bookings found.</div>
              )
            : (
                <div style={{ width: '100%', maxWidth: 900, margin: '0 auto' }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '1.5rem',
                  }}
                  >
                    {bookings.map(b => (
                      <div
                        key={b._id}
                        style={{
                          background: 'var(--color-white)',
                          borderRadius: '1.2rem',
                          boxShadow: '0 2px 16px #40000611',
                          padding: '1.5rem 1.2rem',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.5rem',
                          fontSize: '1.08rem',
                        }}
                      >
                        <div style={{ fontWeight: 700, color: 'var(--color-deep-red)', fontSize: '1.15rem' }}>{b.name}</div>
                        <div>
                          <b>Service:</b>
                          {' '}
                          {b.service}
                        </div>
                        <div>
                          <b>Date:</b>
                          {' '}
                          {b.date}
                          {' '}
                          <b>Time:</b>
                          {' '}
                          {b.time}
                        </div>
                        <div>
                          <b>Email:</b>
                          {' '}
                          <a href={`mailto:${b.email}`} style={{ color: 'var(--color-burgundy)' }}>{b.email}</a>
                        </div>
                        <div>
                          <b>Phone:</b>
                          {' '}
                          <a href={`tel:${b.phone}`} style={{ color: 'var(--color-burgundy)' }}>{b.phone}</a>
                        </div>
                        {b.notes && (
                          <div>
                            <b>Notes:</b>
                            {' '}
                            {b.notes}
                          </div>
                        )}
                        <div style={{ fontSize: '0.95rem', color: '#888' }}>
                          Submitted:
                          {new Date(b.createdAt).toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
      <style>
        {`
        @media (max-width: 600px) {
          .admin-booking-card {
            padding: 1rem 0.5rem !important;
            font-size: 1rem !important;
          }
        }
      `}
      </style>
    </main>
  );
}
