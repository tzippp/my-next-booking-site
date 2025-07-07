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
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            color: '#fff',
            width: '100%',
            padding: '3rem 1rem',
          }}
        >
          <h1 style={{
            fontSize: '2.7rem',
            fontWeight: 900,
            marginBottom: '1rem',
            letterSpacing: '1px',
          }}>
            Permanent Makeup in Rockland County
          </h1>
          <p style={{
            fontSize: '1.3rem',
            fontWeight: 500,
            marginBottom: '2rem',
          }}>
            Enhance your natural beauty with expert care and luxury service.
          </p>
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