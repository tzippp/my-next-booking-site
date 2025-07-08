import Image from 'next/image';

export default function Bio() {
  return (
    <main className="bio-main">
      <section className="bio-section">
        <Image
          src="/assets/images/beautiful-permanent-makeup-artist.png"
          alt="PMU Artist"
          width={220}
          height={220}
          className="bio-artist-img"
        />
        <div className="bio-text">
          <h1 className="bio-title">Artist Bio</h1>
          <p className="bio-desc">
            With over 6 years of experience in the art of permanent makeup, our artist has trained at top academies and studied advanced techniques across the globe. Her passion for beauty and dedication to her craft have helped countless clients feel confident and radiant. [Replace with your detailed bio and school names.]
          </p>
        </div>
      </section>
    </main>
  );
}
