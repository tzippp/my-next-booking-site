export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      fontFamily: 'sans-serif',
      padding: '0',
      background: '#fff',
    }}>
      {/* Hero Section with Full Background */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <img
          src="/assets/images/pmu/3-woman-posiing-for-beauty-shoot.png"
          alt="Three women posing for beauty shoot"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1,
            filter: 'brightness(0.55) saturate(1.1)',
          }}
        />
        {/* Overlay for better text contrast */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(120deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 100%)',
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            textAlign: 'center',
            color: '#fff',
            width: '100%',
            padding: '3rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
          }}
        >
          <h1 style={{
            fontFamily: 'Playfair Display, Cormorant Garamond, Georgia, serif',
            fontSize: '3rem',
            fontWeight: 700,
            marginBottom: '1rem',
            letterSpacing: '1px',
            color: '#fff',
            textShadow: '0 2px 16px #00000099',
            lineHeight: 1.1,
            maxWidth: 700,
          }}>
            Permanent Makeup in Rockland County
          </h1>
          <p style={{
            fontSize: '1.3rem',
            fontWeight: 400,
            marginBottom: '2rem',
            color: '#fbeaec',
            textShadow: '0 1px 8px #40000666',
            maxWidth: 520,
            lineHeight: 1.5,
          }}>
            Enhance your natural beauty with expert care and luxury service.
          </p>
          <a
            href="/booking"
            className="hero-cta"
            style={{
              display: 'inline-block',
              background: 'var(--color-burgundy)',
              color: '#fff',
              fontWeight: 600,
              fontSize: '1.1rem',
              padding: '0.85rem 2.2rem',
              borderRadius: '2rem',
              textDecoration: 'none',
              boxShadow: '0 2px 12px #40000644',
              letterSpacing: '1px',
              transition: 'background 0.2s',
            }}
          >
            Book Now
          </a>
        </div>
      </section>

      {/* Welcome Section with Spa Window Image, responsive stack on mobile */}
      <section className="welcome-section" style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2.5rem',
        padding: '3rem 1rem',
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        <div style={{ flex: 1 }}>
          <h2 style={{
            color: '#b8002e',
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '1rem',
          }}>
            Welcome to Red Carpet Luxury Spa
          </h2>
          <p style={{ color: '#b8002e', fontSize: '1.1rem', fontWeight: 400 }}>
            Experience the ultimate in luxury, comfort, and beauty. Our expert team specializes in permanent makeup and spa services designed to help you look and feel your best.
          </p>
        </div>
        <img
          src="/assets/images/pmu/pmu-spa-window.png"
          alt="Red Carpet Luxury Spa window"
          style={{
            width: '260px',
            height: 'auto',
            borderRadius: '1.2rem',
            boxShadow: '0 2px 12px #ffb6c1aa',
            border: '3px solid #ffb6c1',
            objectFit: 'cover',
          }}
        />
      </section>
    </main>
  );
} 