import { FaStar } from 'react-icons/fa';

export default function Services() {
  const services = [
    { id: 'eyebrows', title: 'Eyebrows', description: 'Microblading, powder brows, and shaping for perfect arches.' },
    { id: 'eyeliner', title: 'Eyeliner', description: 'Subtle to dramatic liner for defined, lasting eyes.' },
    { id: 'lips', title: 'Lips', description: 'Lip blush and tint for natural, fuller-looking lips.' },
    { id: 'fine-line-tattoos', title: 'Fine Line Tattoos', description: 'Delicate, artistic tattoos for a unique touch.' },
    { id: 'scalp-micro-pigmentation', title: 'Scalp Micropigmentation', description: 'Natural-looking hair density for men and women.' },
    { id: 'spray-tanning', title: 'Spray Tanning', description: 'Flawless, sun-kissed glow with luxury spray tan.' },
  ];

  const iconMap = {
    'eyebrows': <FaStar size={38} color="#bfa14a" style={{ marginBottom: 12 }} />,
    'eyeliner': <FaStar size={38} color="#bfa14a" style={{ marginBottom: 12 }} />,
    'lips': <FaStar size={38} color="#bfa14a" style={{ marginBottom: 12 }} />,
    'fine-line-tattoos': <FaStar size={38} color="#bfa14a" style={{ marginBottom: 12 }} />,
    'scalp-micro-pigmentation': <FaStar size={38} color="#bfa14a" style={{ marginBottom: 12 }} />,
    'spray-tanning': <FaStar size={38} color="#bfa14a" style={{ marginBottom: 12 }} />,
  };

  return (
    <main style={{
      minHeight: '80vh',
      background: '#f5ebe3',
      fontFamily: 'Cormorant Garamond, Playfair Display, Georgia, serif',
      padding: '3rem 1rem',
    }}
    >
      <h1 style={{
        textAlign: 'center',
        color: '#400006',
        fontSize: '2.2rem',
        fontWeight: 700,
        marginBottom: '1.2rem',
        letterSpacing: '0.5px',
      }}
      >
        Our Services
      </h1>
      <h2 style={{
        textAlign: 'center',
        color: 'var(--color-deep-red)',
        fontFamily: 'Cormorant Garamond, Playfair Display, Georgia, serif',
        fontSize: '1.35rem',
        fontWeight: 500,
        marginBottom: '2.2rem',
        letterSpacing: '0.2px',
        maxWidth: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      >
        Explore our signature beauty treatments—click a service to learn more.
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '2.2rem',
        justifyContent: 'center',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
      >
        {services.map(service => (
          <a
            key={service.id}
            href={`/services/${service.id}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: '#fff',
              borderRadius: '1.2rem',
              boxShadow: '0 2px 16px #40000611',
              padding: '2.2rem 1.5rem 1.5rem 1.5rem',
              textDecoration: 'none',
              color: '#400006',
              border: '2px solid #fff',
              transition: 'box-shadow 0.2s, transform 0.2s',
              minHeight: 180,
              maxWidth: 340,
              margin: '0 auto',
              position: 'relative',
              textAlign: 'center',
            }}
          >
            {iconMap[service.id]}
            <span style={{
              fontSize: '1.18rem',
              fontWeight: 600,
              marginBottom: '0.5rem',
              color: '#400006',
              letterSpacing: '0.2px',
              fontFamily: 'Cormorant Garamond, Playfair Display, Georgia, serif',
            }}
            >
              {service.title}
            </span>
            <span style={{
              fontSize: '1.02rem',
              fontWeight: 400,
              color: '#400006',
              opacity: 0.92,
              lineHeight: 1.5,
              fontFamily: 'Cormorant Garamond, Playfair Display, Georgia, serif',
            }}
            >
              {service.description}
            </span>
          </a>
        ))}
      </div>
    </main>
  );
}
