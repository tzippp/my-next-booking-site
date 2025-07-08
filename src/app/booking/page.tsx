'use client';
import { useState } from 'react';

const services = [
  'Eyebrows',
  'Eyeliner',
  'Lips',
  'Fine Line Tattoos',
  'Scalp Micropigmentation',
  'Spray Tanning',
  'Ear Piercing',
  'Henna Tattoo',
  'Scar Correction',
  'Other',
];

const inputStyle = {
  border: '1px solid #ccc',
  borderRadius: '6px',
  padding: '0.5rem',
  fontSize: '1rem',
  width: '100%',
  marginBottom: '1rem',
};

export default function BookingPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess('Booking submitted!');
        setForm({ name: '', email: '', phone: '', service: '', date: '', time: '', notes: '' });
      } else {
        setError(data.error || 'Failed to submit booking.');
      }
    } catch {
      setError('Failed to submit booking.');
    } finally {
      setLoading(false);
    }
  };

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
        fontSize: '2.2rem',
        fontWeight: 800,
        marginBottom: '1.2rem',
        letterSpacing: '0.5px',
        textAlign: 'center',
      }}
      >
        Book Your Appointment
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{
          background: 'var(--color-white)',
          borderRadius: '1.2rem',
          boxShadow: '0 2px 16px #40000611',
          padding: '2.5rem 2rem',
          maxWidth: 420,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem',
        }}
      >
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          required
          style={inputStyle}
        >
          <option value="">Select Service</option>
          {services.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="time"
          type="time"
          value={form.time}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <textarea
          name="notes"
          placeholder="Notes (optional)"
          value={form.notes}
          onChange={handleChange}
          rows={3}
          style={{ ...inputStyle, resize: 'vertical' }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            background: 'var(--color-deep-red)',
            color: 'var(--color-white)',
            fontWeight: 700,
            fontSize: '1.1rem',
            border: 'none',
            borderRadius: '0.7rem',
            padding: '1rem 0',
            marginTop: '0.5rem',
            cursor: loading ? 'not-allowed' : 'pointer',
            boxShadow: '0 2px 12px #40000622',
            transition: 'background 0.2s',
          }}
        >
          {loading ? 'Submitting...' : 'Book Now'}
        </button>
        {success && <div style={{ color: 'var(--color-burgundy)', background: 'var(--color-pale-gold)', borderRadius: 8, padding: 12, textAlign: 'center' }}>{success}</div>}
        {error && <div style={{ color: '#b8002e', background: '#fff0f0', borderRadius: 8, padding: 12, textAlign: 'center' }}>{error}</div>}
      </form>
      <style>
        {`
        @media (max-width: 600px) {
          form {
            padding: 1.2rem 0.5rem !important;
            max-width: 100vw !important;
          }
        }
      `}
      </style>
    </main>
  );
}
