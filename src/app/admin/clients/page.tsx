'use client';
import { useEffect, useState } from 'react';

function getInitials(name: string) {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

// Helper to deduplicate clients by email/phone
function dedupeClients(bookings: any[]): any[] {
  const map: Record<string, any> = {};
  bookings.forEach((b) => {
    const key = b.email || b.phone;
    if (!map[key]) {
      map[key] = {
        name: b.name,
        email: b.email,
        phone: b.phone,
        type: 'Booking',
        bookings: [b],
        tags: [],
      };
    } else {
      map[key].bookings.push(b);
    }
  });
  return Object.values(map);
}

export default function AdminClients() {
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [newClient, setNewClient] = useState({ name: '', email: '', phone: '', type: 'Other', tags: '' });

  useEffect(() => {
    fetch('/api/booking')
      .then(res => res.json())
      .then((data) => {
        if (data.success) {
          setClients(dedupeClients(data.bookings));
        } else {
          setError(data.error || 'Failed to load clients.');
        }
      })
      .catch(() => setError('Failed to load clients.'))
      .finally(() => setLoading(false));
  }, []);

  const handleAddClient = (e: any) => {
    e.preventDefault();
    if (!newClient.name) {
      return;
    }
    setClients(prev => [
      { ...newClient, tags: newClient.tags.split(',').map((t: string) => t.trim()), bookings: [] },
      ...prev,
    ]);
    setNewClient({ name: '', email: '', phone: '', type: 'Other', tags: '' });
  };

  const filtered = clients.filter((c) => {
    const q = search.toLowerCase();
    return (
      c.name.toLowerCase().includes(q)
      || (c.email && c.email.toLowerCase().includes(q))
      || (c.phone && c.phone.toLowerCase().includes(q))
      || (c.type && c.type.toLowerCase().includes(q))
      || (c.tags && c.tags.join(',').toLowerCase().includes(q))
    );
  });

  return (
    <main style={{ padding: '2rem 1rem', background: 'var(--color-cream)', minHeight: '100vh' }}>
      <h1 style={{ color: 'var(--color-deep-red)', fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem', textAlign: 'center' }}>
        Clients
      </h1>
      <form onSubmit={handleAddClient} style={{ maxWidth: 700, margin: '0 auto 2rem', background: 'var(--color-white)', borderRadius: 12, boxShadow: '0 2px 12px #40000611', padding: 16, display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
        <input required placeholder="Name" value={newClient.name} onChange={e => setNewClient({ ...newClient, name: e.target.value })} style={{ flex: 1, minWidth: 120, borderRadius: 8, border: '1px solid #ccc', padding: 8 }} />
        <input placeholder="Email" value={newClient.email} onChange={e => setNewClient({ ...newClient, email: e.target.value })} style={{ flex: 1, minWidth: 120, borderRadius: 8, border: '1px solid #ccc', padding: 8 }} />
        <input placeholder="Phone" value={newClient.phone} onChange={e => setNewClient({ ...newClient, phone: e.target.value })} style={{ flex: 1, minWidth: 120, borderRadius: 8, border: '1px solid #ccc', padding: 8 }} />
        <input placeholder="Type (e.g. Member)" value={newClient.type} onChange={e => setNewClient({ ...newClient, type: e.target.value })} style={{ flex: 1, minWidth: 120, borderRadius: 8, border: '1px solid #ccc', padding: 8 }} />
        <input placeholder="Tags (comma separated)" value={newClient.tags} onChange={e => setNewClient({ ...newClient, tags: e.target.value })} style={{ flex: 2, minWidth: 120, borderRadius: 8, border: '1px solid #ccc', padding: 8 }} />
        <button type="submit" style={{ background: 'var(--color-burgundy)', color: 'white', border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 700, cursor: 'pointer' }}>Add Client</button>
      </form>
      <input type="text" placeholder="Search clients by name, email, phone, type, or tag..." value={search} onChange={e => setSearch(e.target.value)} style={{ maxWidth: 700, width: '100%', margin: '0 auto 1.5rem', display: 'block', borderRadius: 8, border: '1px solid #ccc', padding: 10 }} />
      {loading
        ? (
            <div style={{ color: 'var(--color-burgundy)', fontSize: '1.1rem' }}>Loading...</div>
          )
        : error
          ? (
              <div style={{ color: '#b8002e', background: '#fff0f0', borderRadius: 8, padding: 12, textAlign: 'center' }}>{error}</div>
            )
          : (
              <div style={{ maxWidth: 700, margin: '0 auto', background: 'var(--color-white)', borderRadius: 16, boxShadow: '0 2px 16px #40000611', overflow: 'hidden' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {filtered.map((c, i) => (
                    <div key={c.email || c.phone || i} style={{ display: 'flex', alignItems: 'center', gap: 16, borderBottom: '1px solid var(--color-cream)', padding: '1rem 1.2rem', flexWrap: 'wrap' }}>
                      <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--color-light-pink)', color: 'var(--color-burgundy)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 20 }}>
                        {getInitials(c.name)}
                      </div>
                      <div style={{ flex: 1, minWidth: 120 }}>
                        <div style={{ fontWeight: 700, color: 'var(--color-deep-red)', fontSize: 17 }}>{c.name}</div>
                        <div style={{ fontSize: 14, color: 'var(--color-burgundy)' }}>{c.type}</div>
                        {c.tags && c.tags.length > 0 && (
                          <div style={{ marginTop: 4, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                            {c.tags.map((tag: string, idx: number) => (
                              <span key={idx} style={{ background: 'var(--color-cream)', color: 'var(--color-burgundy)', borderRadius: 6, padding: '2px 8px', fontSize: 12, fontWeight: 600 }}>{tag}</span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div style={{ minWidth: 120, fontSize: 14 }}>
                        <a href={`mailto:${c.email}`} style={{ color: 'var(--color-burgundy)', textDecoration: 'none' }}>{c.email}</a>
                        <br />
                        <a href={`tel:${c.phone}`} style={{ color: 'var(--color-burgundy)', textDecoration: 'none' }}>{c.phone}</a>
                      </div>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <a href={`mailto:${c.email}`} title="Email" style={{ color: 'var(--color-burgundy)', fontSize: 18 }}>✉️</a>
                        <a href={`tel:${c.phone}`} title="Call" style={{ color: 'var(--color-burgundy)', fontSize: 18 }}>📞</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
      <style>
        {`
        @media (max-width: 600px) {
          .admin-client-card {
            padding: 0.7rem 0.3rem !important;
            font-size: 1rem !important;
          }
        }
      `}
      </style>
    </main>
  );
}
