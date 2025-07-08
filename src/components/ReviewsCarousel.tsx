'use client';

import React, { useEffect, useState } from 'react';

type Review = {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
};

const REVIEWS_PER_VIEW_DESKTOP = 3;
const REVIEWS_PER_VIEW_MOBILE = 1;

function useResponsiveReviewsPerView() {
  const [perView, setPerView] = useState(REVIEWS_PER_VIEW_DESKTOP);
  useEffect(() => {
    function handleResize() {
      setPerView(window.innerWidth < 700 ? REVIEWS_PER_VIEW_MOBILE : REVIEWS_PER_VIEW_DESKTOP);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return perView;
}

export default function ReviewsCarousel() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const perView = useResponsiveReviewsPerView();

  useEffect(() => {
    // fetch('/api/reviews')
    //   .then(res => res.json())
    //   .then(data => {
    //     if (data.reviews) {
    //       setReviews(data.reviews.slice(0, MAX_REVIEWS));
    //     } else {
    //       // Fallback to hardcoded reviews if Google reviews fail
    //       setReviews([...]);
    //     }
    //     setLoading(false);
    //   })
    //   .catch(() => {
    //     // Fallback to hardcoded reviews if fetch fails
    //     setReviews([...]);
    //     setLoading(false);
    //   });
    // API call disabled for now—using hardcoded reviews only.
    setReviews([
      {
        author_name: 'Jessica M.',
        profile_photo_url: 'https://randomuser.me/api/portraits/women/44.jpg',
        rating: 5,
        relative_time_description: '2 weeks ago',
        text: 'Absolutely love my brows! The team is so talented and made me feel pampered from start to finish.',
      },
      {
        author_name: 'Rachel S.',
        profile_photo_url: 'https://randomuser.me/api/portraits/women/65.jpg',
        rating: 5,
        relative_time_description: '1 month ago',
        text: 'The lip blush treatment was amazing. My lips look fuller and so natural. Highly recommend!',
      },
      {
        author_name: 'Emily T.',
        profile_photo_url: 'https://randomuser.me/api/portraits/women/32.jpg',
        rating: 5,
        relative_time_description: '3 weeks ago',
        text: 'Best spray tan I\'ve ever had. The color is perfect and lasted so long!',
      },
      {
        author_name: 'Sarah K.',
        profile_photo_url: 'https://randomuser.me/api/portraits/women/21.jpg',
        rating: 5,
        relative_time_description: '5 days ago',
        text: 'The fine line tattoo is so delicate and beautiful. The studio is spotless and the staff is wonderful.',
      },
    ]);
    setLoading(false);
  }, []);

  // Carousel auto-scroll
  useEffect(() => {
    if (reviews.length > perView) {
      const interval = setInterval(() => {
        setCurrent(prev => (prev + perView) % reviews.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [reviews, perView]);

  if (loading) {
    return <div style={{ textAlign: 'center', color: '#b8002e', fontFamily: 'Cormorant Garamond, serif' }}>Loading reviews…</div>;
  }
  if (!reviews.length) {
    return null;
  }

  return (
    <section style={{
      background: '#1a010a', // solid dark burgundy/black
      padding: '3rem 1rem 2.5rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: '1.5rem',
      boxShadow: '0 2px 24px #40000611',
      margin: '2.5rem auto',
      maxWidth: 1100,
      width: '100%',
    }}
    >
      <h2 style={{
        fontFamily: 'Cormorant Garamond, Playfair Display, Georgia, serif',
        fontSize: '2.1rem',
        color: '#fff',
        fontWeight: 500,
        marginBottom: '2rem',
        letterSpacing: '0.5px',
      }}
      >
        Client Reviews
      </h2>
      <div style={{
        width: '100%',
        maxWidth: 1000,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
        gap: '2.2rem',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}
      >
        {reviews.map((review, idx) => (
          <div
            key={idx}
            style={{
              background: 'rgba(30,0,20,0.98)',
              borderRadius: '1.2rem',
              boxShadow: '0 2px 16px #00000033',
              padding: '1.5rem 1.2rem',
              minHeight: 120,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              opacity: 1,
              position: 'relative',
              border: '1.5px solid #400006',
            }}
          >
            <img
              src={review.profile_photo_url}
              alt={review.author_name}
              style={{ width: 48, height: 48, borderRadius: '50%', border: '2px solid #fff', objectFit: 'cover', marginBottom: 10 }}
            />
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, fontSize: '1.1rem', color: '#fff', marginBottom: 2 }}>{review.author_name}</div>
            <div style={{ color: '#ffe082', fontSize: '1.1rem', fontWeight: 500, marginBottom: 6 }}>
              {'★'.repeat(review.rating)}
              <span style={{ color: '#bbb', marginLeft: 4, fontSize: '0.95rem' }}>{review.relative_time_description}</span>
            </div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.13rem', color: '#fff', lineHeight: 1.5, marginTop: 8, textAlign: 'center', marginBottom: 6 }}>
              {review.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
