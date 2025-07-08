export default function GiftCard() {
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
        fontSize: '2.3rem',
        fontWeight: 800,
        marginBottom: '1.2rem',
        letterSpacing: '0.5px',
        textAlign: 'center',
      }}
      >
        Give the Gift of Beauty
      </h1>
      <p style={{
        color: 'var(--color-burgundy)',
        fontSize: '1.18rem',
        maxWidth: '600px',
        textAlign: 'center',
        marginBottom: '2.2rem',
      }}
      >
        Treat someone special to a luxurious beauty experience. Our gift cards are perfect for birthdays, holidays, or just because. Choose any amount and let your loved one indulge in our signature services.
      </p>
      <div style={{
        background: 'var(--color-pale-gold)',
        borderRadius: '1.2rem',
        boxShadow: '0 2px 16px #40000611',
        padding: '2rem 2.5rem',
        marginBottom: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      >
        <img
          src="/assets/images/gift-card/sample-gift-card.png"
          alt="Sample Gift Card"
          style={{
            width: 320,
            maxWidth: '90vw',
            borderRadius: '0.8rem',
            marginBottom: '1.5rem',
            boxShadow: '0 2px 12px #40000622',
            background: 'var(--color-white)',
          }}
          onError={e => (e.currentTarget.style.display = 'none')}
        />
        <div style={{
          color: 'var(--color-deep-red)',
          fontWeight: 600,
          fontSize: '1.1rem',
          textAlign: 'center',
        }}
        >
          Available in any amount. Redeemable for all services.
          <br />
          <span style={{ color: 'var(--color-burgundy)' }}>To purchase, please contact us or visit our spa.</span>
        </div>
      </div>
    </main>
  );
}
