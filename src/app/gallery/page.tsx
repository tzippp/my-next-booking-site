export default function Gallery() {
  const gallerySections = [
    {
      title: 'Eyebrows',
      images: [
        '/assets/images/beautician-doing-microblading-procedure-client-s-eyebrows.jpg',
        '/assets/images/beautiful-permanent-makeup-artist.png',
      ],
    },
    {
      title: 'Eyeliner',
      images: [
        '/assets/images/eyeliner/upper-eyeliner-tattooing.webp',
        '/assets/images/beautiful-permanent-makeup-artist.png',
      ],
    },
    {
      title: 'Lips',
      images: [
        '/assets/images/lips/lip-tattoo.jpg',
        '/assets/images/beautiful-permanent-makeup-artist.png',
      ],
    },
    {
      title: 'Fine Line Tattoos',
      images: [
        '/assets/images/girl-getting-beauty-mark-tattoo.jpg',
        '/assets/images/pmu/three-women-beauty-shoot.png',
      ],
    },
    {
      title: 'Scalp Micropigmentation',
      images: [
        '/assets/images/pmu/pmu-spa-window.png',
        '/assets/images/beautiful-permanent-makeup-artist.png',
      ],
    },
    {
      title: 'Spray Tanning',
      images: [
        '/assets/images/spray tanning/bronzed-tanned-girl.png',
        '/assets/images/spray tanning/giving-a-spray-tan-at-red-carpet-luxury-spa.jpeg',
      ],
    },
  ];

  return (
    <main style={{ minHeight: '80vh', padding: '3rem 1rem', fontFamily: 'Cormorant Garamond, Playfair Display, Georgia, serif', background: '#f5ebe3' }}>
      <h1 style={{ color: '#400006', fontSize: '2.2rem', fontWeight: 800, marginBottom: '2.5rem', textAlign: 'center', letterSpacing: '0.5px' }}>
        Gallery
      </h1>
      {gallerySections.map((section) => (
        <section key={section.title} style={{ marginBottom: '2.8rem' }}>
          <h2 style={{ color: 'var(--color-deep-red)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.2rem', letterSpacing: '0.2px' }}>{section.title}</h2>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
            {section.images.map((src, idx) => (
              <img
                key={src + idx}
                src={src}
                alt={section.title + ' example'}
                style={{
                  width: 220,
                  height: 180,
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  boxShadow: '0 2px 12px #40000611',
                  background: '#fff',
                }}
              />
            ))}
          </div>
        </section>
      ))}
      <div style={{ color: 'var(--color-deep-red)', fontWeight: 600, fontSize: '1.1rem', marginTop: '2rem', textAlign: 'center' }}>
        More stunning results coming soon. Check back for new gallery updates!
      </div>
    </main>
  );
} 