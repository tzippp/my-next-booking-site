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
        {/* Restored dramatic dark overlay for contrast */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(120deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.18) 100%)',
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
            background: 'transparent',
            borderRadius: '1.5rem',
            boxShadow: 'none',
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
              background: '#b8002e',
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
      <section
        className="welcome-section"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3.2rem',
          padding: '4rem 2rem',
          maxWidth: '1100px',
          margin: '3rem auto 3rem auto',
          background: '#fffdfa',
          borderRadius: '1.7rem',
          boxShadow: '0 4px 32px #40000618',
          border: '1.5px solid #e5d6d0',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ flex: 1, minWidth: 260, maxWidth: 520 }}>
          <h2
            style={{
              color: '#400006',
              fontSize: '2.35rem',
              fontWeight: 700,
              marginBottom: '1.3rem',
              fontFamily: 'Cormorant Garamond, Playfair Display, Georgia, serif',
              letterSpacing: '0.5px',
            }}
          >
            Welcome to Red Carpet Luxury Spa
          </h2>
          <p
            style={{
              color: '#400006',
              fontSize: '1.22rem',
              fontWeight: 400,
              fontFamily: 'Cormorant Garamond, Playfair Display, Georgia, serif',
              lineHeight: 1.7,
              marginBottom: '2.1rem',
              maxWidth: 480,
            }}
          >
            Step into a world of refined beauty and tranquility. At Red Carpet Luxury Spa, our award-winning artists and therapists deliver bespoke permanent makeup and spa experiences in an atmosphere of pure elegance. Discover the art of self-care, where every detail is tailored to you.
          </p>
          <a
            href="/about"
            style={{
              display: 'inline-block',
              background: '#400006',
              color: '#fff',
              fontFamily: 'Cormorant Garamond, Playfair Display, Georgia, serif',
              fontWeight: 500,
              fontSize: '1.09rem',
              padding: '0.75rem 2.2rem',
              borderRadius: '2rem',
              textDecoration: 'none',
              boxShadow: '0 2px 12px #40000622',
              letterSpacing: '0.5px',
              transition: 'background 0.2s',
              border: '1.5px solid #400006',
              textShadow: '0 1px 8px #40000622',
              marginTop: '0.5rem',
            }}
          >
            Learn More
          </a>
        </div>
        <img
          src="/assets/images/pmu/pmu-spa-window.png"
          alt="Red Carpet Luxury Spa window"
          style={{
            width: '390px',
            height: 'auto',
            borderRadius: '1.3rem',
            boxShadow: '0 4px 32px #40000622',
            border: '2.5px solid #400006',
            objectFit: 'cover',
            flexShrink: 0,
            maxWidth: '100%',
          }}
        />
      </section>

      {/* Signature Services Section */}
      <section
        style={{
          background: 'linear-gradient(120deg, #fff6f6 0%, #fbeaec 100%)',
          padding: '3.5rem 1rem 4rem 1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: 'Cormorant Garamond, Playfair Display, Georgia, serif',
            fontSize: '2.3rem',
            color: '#400006',
            fontWeight: 500,
            marginBottom: '2.2rem',
            letterSpacing: '0.5px',
          }}
        >
          Signature Beauty Experiences
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            justifyContent: 'center',
            maxWidth: 1100,
            width: '100%',
          }}
        >
          {/* Service Card Example */}
          {[
            {
              title: 'Brows & Microblading',
              desc: 'Wake up with perfect brows. Our microblading and powder brow artistry create natural, lasting beauty for every face.',
              img: '/assets/images/beautician-doing-microblading-procedure-client-s-eyebrows.jpg',
              href: '/services/eyebrows',
            },
            {
              title: 'Lips Blush & Tint',
              desc: 'Soft, fuller-looking lips with custom color. Our lip blush and tint treatments enhance your natural shape and radiance.',
              img: '/assets/images/lips/lip-tattoo.jpg',
              href: '/services/lips',
            },
            {
              title: 'Eyeliner Perfection',
              desc: 'Define your eyes with subtle or bold permanent eyeliner. Smudge-proof, waterproof, and always flawless.',
              img: '/assets/images/eyeliner/upper-eyeliner-tattooing.webp',
              href: '/services/eyeliner',
            },
            {
              title: 'Fine Line Tattoos',
              desc: 'Delicate, artistic tattoos for a unique, personal touch. Minimalist beauty, maximum impact.',
              img: '/assets/images/pmu/three-women-beauty-shoot.png',
              href: '/services/fine-line-tattoos',
            },
            {
              title: 'Scalp Micro Pigmentation',
              desc: 'Restore confidence with natural-looking hair density for men and women. Discreet, effective, and transformative.',
              img: '/assets/images/pmu/pmu-spa-window.png',
              href: '/services/scalp-micro-pigmentation',
            },
            {
              title: 'Spray Tanning',
              desc: 'Get a flawless, sun-kissed glow with our luxury spray tan. Safe, even, and radiant results every time.',
              img: '/assets/images/spray tanning/bronzed-tanned-girl.png',
              href: '/services/spray-tanning',
            },
          ].map((service) => (
            <a
              key={service.title}
              href={service.href}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                background: 'rgba(255,255,255,0.97)',
                borderRadius: '1.2rem',
                boxShadow: '0 2px 12px #ffb6c1aa',
                border: '3px solid #ffb6c1',
                padding: '1.2rem 1.2rem 1.2rem 1.2rem',
                textDecoration: 'none',
                color: '#400006',
                transition: 'box-shadow 0.2s, transform 0.2s',
                minHeight: 180,
                maxWidth: 520,
                margin: '0 auto',
                position: 'relative',
                gap: '1.5rem',
              }}
            >
              <img
                src={service.img}
                alt={service.title}
                style={{
                  width: 120,
                  height: 120,
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  boxShadow: '0 2px 12px #ffb6c1aa',
                  border: '2px solid #ffb6c1',
                  flexShrink: 0,
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: 1 }}>
                <span
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    marginBottom: '0.7rem',
                    color: '#b8002e',
                    letterSpacing: '0.2px',
                    fontFamily: 'Cormorant Garamond, Playfair Display, Georgia, serif',
                    textAlign: 'left',
                  }}
                >
                  {service.title}
                </span>
                <span
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 400,
                    color: '#400006',
                    opacity: 0.85,
                    lineHeight: 1.4,
                    fontFamily: 'Cormorant Garamond, Playfair Display, Georgia, serif',
                    textAlign: 'left',
                  }}
                >
                  {service.desc}
                </span>
              </div>
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