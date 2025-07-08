export default function Care() {
  return (
    <main style={{ minHeight: '80vh', padding: '3rem 1rem', fontFamily: 'Cormorant Garamond, Playfair Display, Georgia, serif', background: '#f5ebe3' }}>
      <h1 style={{ color: '#400006', fontSize: '2.2rem', fontWeight: 800, marginBottom: '1.5rem', textAlign: 'center', letterSpacing: '0.5px' }}>
        Luxury Permanent Makeup Care Guide
      </h1>
      <p style={{ color: 'var(--color-deep-red)', fontSize: '1.18rem', maxWidth: '700px', margin: '0 auto 2.5rem auto', textAlign: 'center', fontWeight: 500 }}>
        For the most beautiful, long-lasting results, please follow our expert pre-care and post-care instructions for your permanent makeup treatment.
      </p>
      <section style={{ maxWidth: 900, margin: '0 auto', background: 'var(--color-white)', borderRadius: '1.2rem', boxShadow: '0 2px 16px #40000611', padding: '2.5rem 2rem', color: 'var(--color-burgundy)' }}>
        <h2 style={{ color: 'var(--color-deep-red)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.2rem' }}>Pre-Care</h2>
        <ul style={{ fontSize: '1.08rem', lineHeight: 1.7, marginBottom: '2.2rem', paddingLeft: 20 }}>
          <li>
            <b>Eyebrows:</b>
            {' '}
            Avoid waxing, tinting, or tweezing for 3 days before. No retinol or exfoliants for 1 week. Arrive with clean, makeup-free skin.
          </li>
          <li>
            <b>Eyeliner:</b>
            {' '}
            Remove lash extensions 3 days prior. No lash serums for 2 weeks. Avoid caffeine and blood thinners on the day of your appointment.
          </li>
          <li>
            <b>Lips:</b>
            {' '}
            Exfoliate and hydrate lips for 3 days before. If prone to cold sores, take antiviral medication as prescribed. No fillers 4 weeks before.
          </li>
        </ul>
        <h2 style={{ color: 'var(--color-deep-red)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.2rem' }}>Post-Care</h2>
        <ul style={{ fontSize: '1.08rem', lineHeight: 1.7, marginBottom: '2.2rem', paddingLeft: 20 }}>
          <li>
            <b>Eyebrows:</b>
            {' '}
            Gently blot with a clean tissue for the first 2 hours. Apply healing ointment as directed. Avoid water, makeup, and sun exposure for 7 days.
          </li>
          <li>
            <b>Eyeliner:</b>
            {' '}
            Do not rub or pick. Avoid mascara for 7 days. Use a clean pillowcase and avoid heavy sweating for 1 week.
          </li>
          <li>
            <b>Lips:</b>
            {' '}
            Keep lips moisturized. Avoid spicy foods, kissing, and hot drinks for 3 days. Do not pick at flaking skin.
          </li>
        </ul>
        <div style={{ color: 'var(--color-deep-red)', fontWeight: 600, fontSize: '1.1rem', marginTop: '2rem', textAlign: 'center' }}>
          Your comfort and beauty are our top priorities. For questions or concerns, please contact us—our team is here to help you shine.
        </div>
      </section>
    </main>
  );
}
