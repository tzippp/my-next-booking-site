import Image from 'next/image';
import ReviewsCarousel from '../components/ReviewsCarousel';
import MapSection from '../components/MapSection';

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
        <Image
          src="/assets/images/pmu/three-women-beauty-shoot.png"
          alt="Three women posing for a luxury beauty shoot at Red Carpet Spa"
          fill
          style={{
            objectFit: 'cover',
            zIndex: 1,
            filter: 'brightness(0.55) saturate(1.1)',
          }}
          priority
          sizes="100vw"
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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: 700,
            margin: '0 auto',
            padding: '4.5rem 1.5rem',
            boxSizing: 'border-box',
            textAlign: 'center',
            gap: '2.2rem',
          }}
        >
          <h1 style={{
            fontFamily: 'Cormorant Garamond, Playfair Display, Georgia, serif',
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 500,
            margin: 0,
            letterSpacing: '0.5px',
            color: '#fff',
            textShadow: '0 2px 16px #00000099',
            lineHeight: 1.08,
          }}>
            Permanent Makeup<br />in Rockland County
          </h1>
          <p style={{
            fontFamily: 'Cormorant Garamond, Playfair Display, Georgia, serif',
            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
            fontWeight: 400,
            margin: 0,
            color: '#fbeaec',
            textShadow: '0 1px 8px #40000666',
            lineHeight: 1.5,
            letterSpacing: '0.2px',
            maxWidth: 480,
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
              fontFamily: 'Cormorant Garamond, Playfair Display, Georgia, serif',
              fontWeight: 500,
              fontSize: '1.15rem',
              padding: '0.9rem 2.5rem',
              borderRadius: '2rem',
              textDecoration: 'none',
              boxShadow: '0 2px 12px #40000644',
              letterSpacing: '0.5px',
              transition: 'background 0.2s',
              border: '1.5px solid #fff',
              textShadow: '0 1px 8px #40000666',
              marginTop: '0.5rem',
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

      {/* Signature Services Section */}
      <section style={{
        background: '#fff',
        padding: '3.5rem 1rem 4rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, Playfair Display, Georgia, serif',
          fontSize: '2.3rem',
          color: 'var(--color-burgundy)',
          fontWeight: 500,
          marginBottom: '2.2rem',
          letterSpacing: '0.5px',
        }}>
          Our Signature Services
        </h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2.2rem',
          justifyContent: 'center',
          maxWidth: 1100,
          width: '100%',
        }}>
          {/* Service Card Example */}
          {[
            {
              title: 'Permanent Makeup',
              desc: 'Brows, lips, eyeliner, and more for effortless beauty.',
              href: '/services',
            },
            {
              title: 'Eyebrows',
              desc: 'Microblading, powder brows, and shaping for perfect arches.',
              href: '/services/eyebrows',
            },
            {
              title: 'Lips',
              desc: 'Lip blush and tint for natural, fuller-looking lips.',
              href: '/services/lips',
            },
            {
              title: 'Eyeliner',
              desc: 'Subtle to dramatic liner for defined, lasting eyes.',
              href: '/services/eyeliner',
            },
            {
              title: 'Fine Line Tattoos',
              desc: 'Delicate, artistic tattoos for a unique touch.',
              href: '/services/fine-line-tattoos',
            },
            {
              title: 'Scalp Micro Pigmentation',
              desc: 'Natural-looking hair density for men and women.',
              href: '/services/scalp-micro-pigmentation',
            },
            {
              title: 'Spray Tanning',
              desc: 'Flawless, sun-kissed glow with luxury spray tan.',
              href: '/services/spray-tanning',
            },
          ].map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="signature-service-card"
            >
              <span style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: '0.7rem',
                color: 'var(--color-burgundy)',
                letterSpacing: '0.2px',
              }}>{service.title}</span>
              <span style={{
                fontSize: '1.05rem',
                fontWeight: 400,
                color: '#400006',
                opacity: 0.85,
                lineHeight: 1.4,
              }}>{service.desc}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Reviews Carousel Section */}
      <ReviewsCarousel />

      {/* Map Section */}
      <MapSection />
    </main>
  );
} 