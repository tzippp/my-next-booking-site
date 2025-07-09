'use client';
import { useEffect, useState } from 'react';

// Simple date helpers
function getMonthDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const days = [];
  for (let d = 1; d <= lastDay.getDate(); d++) {
    days.push(new Date(year, month, d));
  }
  return days;
}

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function AdminCalendar() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [viewDate, setViewDate] = useState(() => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1);
  });
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const days = getMonthDays(year, month);

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

  // Group bookings by date (YYYY-MM-DD)
  const bookingsByDate: Record<string, any[]> = {};
  bookings.forEach((b) => {
    const date = b.date;
    if (!bookingsByDate[date]) {
      bookingsByDate[date] = [];
    }
    bookingsByDate[date].push(b);
  });

  const handlePrevMonth = () => {
    setSelectedDay(null);
    setViewDate(new Date(year, month - 1, 1));
  };
  const handleNextMonth = () => {
    setSelectedDay(null);
    setViewDate(new Date(year, month + 1, 1));
  };

  const handleDayClick = (day: Date) => {
    setSelectedDay(day);
  };

  const selectedDayStr = selectedDay ? selectedDay.toISOString().slice(0, 10) : null;

  return (
    <main style={{ padding: '2rem 1rem', background: 'var(--color-cream)', minHeight: '100vh' }}>
      <h1 style={{ color: 'var(--color-deep-red)', fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem', textAlign: 'center' }}>
        Calendar
      </h1>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 24 }}>
        <button onClick={handlePrevMonth} style={{ background: 'var(--color-burgundy)', color: 'white', border: 'none', borderRadius: 8, padding: '6px 16px', fontWeight: 700, cursor: 'pointer' }}>&lt;</button>
        <span style={{ fontSize: 20, fontWeight: 700, color: 'var(--color-burgundy)' }}>
          {monthNames[month]}
          {' '}
          {year}
        </span>
        <button onClick={handleNextMonth} style={{ background: 'var(--color-burgundy)', color: 'white', border: 'none', borderRadius: 8, padding: '6px 16px', fontWeight: 700, cursor: 'pointer' }}>&gt;</button>
      </div>
      {loading
        ? (
            <div style={{ color: 'var(--color-burgundy)', fontSize: '1.1rem' }}>Loading...</div>
          )
        : error
          ? (
              <div style={{ color: '#b8002e', background: '#fff0f0', borderRadius: 8, padding: 12, textAlign: 'center' }}>{error}</div>
            )
          : (
              <div style={{ maxWidth: 900, margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem', background: 'var(--color-beige)', borderRadius: 12, padding: 12 }}>
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                    <div key={d} style={{ textAlign: 'center', fontWeight: 700, color: 'var(--color-burgundy)', padding: 4 }}>{d}</div>
                  ))}
                  {new Array(days[0].getDay()).fill(null).map((_, i) => (
                    <div key={`empty-${i}`}></div>
                  ))}
                  {days.map((day) => {
                    const dateStr = day.toISOString().slice(0, 10);
                    const isToday = (new Date().toDateString() === day.toDateString());
                    return (
                      <div
                        key={dateStr}
                        style={{
                          background: selectedDayStr === dateStr ? 'var(--color-light-pink)' : isToday ? '#f5d9d9' : 'var(--color-white)',
                          borderRadius: 8,
                          minHeight: 70,
                          padding: 6,
                          boxShadow: '0 1px 6px #40000611',
                          fontSize: 15,
                          cursor: 'pointer',
                          border: selectedDayStr === dateStr ? '2px solid var(--color-deep-red)' : isToday ? '2.5px solid var(--color-burgundy)' : 'none',
                          position: 'relative',
                          fontWeight: isToday ? 800 : 700,
                        }}
                        onClick={() => handleDayClick(day)}
                      >
                        <div style={{ fontWeight: isToday ? 800 : 700, color: isToday ? 'var(--color-burgundy)' : 'var(--color-deep-red)' }}>
                          {day.getDate()}
                        </div>
                        {bookingsByDate[dateStr]?.map((b, i) => (
                          <div key={b._id || i} style={{ marginTop: 2, fontSize: 13, color: 'var(--color-burgundy)', background: 'var(--color-light-pink)', borderRadius: 4, padding: '2px 4px' }}>
                            {b.name}
                            {' '}
                            (
                            {b.time}
                            )
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
                {selectedDay && (
                  <div style={{ marginTop: 32, background: 'var(--color-white)', borderRadius: 12, boxShadow: '0 2px 16px #40000611', padding: 24 }}>
                    <h2 style={{ color: 'var(--color-deep-red)', fontSize: 20, fontWeight: 700, marginBottom: 12 }}>
                      Schedule for
                      {' '}
                      {selectedDay.toLocaleDateString()}
                    </h2>
                    {bookingsByDate[selectedDayStr!]?.length
                      ? (
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {bookingsByDate[selectedDayStr!].map((b, i) => (
                              <li key={b._id || i} style={{ marginBottom: 10, padding: 10, borderBottom: '1px solid var(--color-cream)' }}>
                                <b>{b.name}</b>
                                {' '}
                                (
                                {b.time}
                                )
                                <br />
                                <span style={{ color: 'var(--color-burgundy)' }}>{b.service}</span>
                                <br />
                                <span style={{ fontSize: 13 }}>
                                  {b.email}
                                  {' '}
                                  |
                                  {' '}
                                  {b.phone}
                                </span>
                                {b.notes && (
                                  <div style={{ fontSize: 13, color: '#888' }}>
                                    Notes:
                                    {b.notes}
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul>
                        )
                      : (
                          <div style={{ color: 'var(--color-burgundy)' }}>No bookings for this day.</div>
                        )}
                  </div>
                )}
              </div>
            )}
      <style>
        {`
        @media (max-width: 700px) {
          .calendar-grid { grid-template-columns: repeat(7, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .calendar-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}
      </style>
    </main>
  );
}
