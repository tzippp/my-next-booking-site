"use client";

import React, { useEffect, useState } from 'react';

interface Review {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
}

const MAX_REVIEWS = 8;
const REVIEWS_PER_VIEW_DESKTOP = 3;
const REVIEWS_PER_VIEW_MOBILE = 1;
const MAX_LINES = 7;

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

function clampText(text: string, maxLines: number) {
  // Simple clamp by splitting on spaces and limiting to ~maxLines*12 words
  const words = text.split(' ');
  const maxWords = maxLines * 12;
  if (words.length <= maxWords) return {clamped: text, truncated: false};
  return {clamped: words.slice(0, maxWords).join(' ') + '…', truncated: true};
}

export default function ReviewsCarousel() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<number | null>(null);
  const perView = useResponsiveReviewsPerView();

  useEffect(() => {
    fetch('/api/reviews')
      .then(res => res.json())
      .then(data => {
        if (data.reviews) {
          setReviews(data.reviews.slice(0, MAX_REVIEWS));
        } else {
          setError(data.error || 'No reviews found.');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load reviews.');
        setLoading(false);
      });
  }, []);

  // Carousel auto-scroll
  useEffect(() => {
    if (reviews.length > perView) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + perView) % reviews.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [reviews, perView]);

  if (loading) return <div style={{textAlign: 'center', color: '#b8002e', fontFamily: 'Cormorant Garamond, serif'}}>Loading reviews…</div>;
  if (error) return <div style={{textAlign: 'center', color: '#b8002e', fontFamily: 'Cormorant Garamond, serif'}}>{error}</div>;
  if (!reviews.length) return null;

  // Calculate which reviews to show
  const visibleReviews = [];
  for (let i = 0; i < perView; i++) {
    const idx = (current + i) % reviews.length;
    visibleReviews.push(reviews[idx]);
  }

  return (
    <section style={{
      background: 'linear-gradient(120deg, #fbeaec 0%, #fff6f6 100%)',
      padding: '3rem 1rem 2.5rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: '1.5rem',
      boxShadow: '0 2px 24px #40000611',
      margin: '2.5rem auto',
      maxWidth: 1100,
      width: '100%',
    }}>
      <h2 style={{
        fontFamily: 'Cormorant Garamond, Playfair Display, Georgia, serif',
        fontSize: '2.1rem',
        color: 'var(--color-burgundy, #400006)',
        fontWeight: 500,
        marginBottom: '2rem',
        letterSpacing: '0.5px',
      }}>
        Client Reviews
      </h2>
      <div style={{
        width: '100%',
        maxWidth: 1000,
        minHeight: 220,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div style={{
          display: 'flex',
          gap: '2.2rem',
          justifyContent: 'center',
          alignItems: 'stretch',
          transition: 'all 0.7s cubic-bezier(.4,2,.3,1)',
        }}>
          {visibleReviews.map((review, idx) => {
            const {clamped, truncated} = clampText(review.text, MAX_LINES);
            const isExpanded = expanded === idx;
            return (
              <div
                key={idx}
                style={{
                  flex: 1,
                  minWidth: 0,
                  background: 'rgba(255,255,255,0.95)',
                  borderRadius: '1.2rem',
                  boxShadow: '0 2px 16px #40000611',
                  padding: '1.1rem 1.2rem 1.1rem 1.2rem',
                  minHeight: 120,
                  maxWidth: 400,
                  maxHeight: 220,
                  overflowY: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  opacity: 1,
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: 10 }}>
                  <img
                    src={review.profile_photo_url}
                    alt={review.author_name}
                    style={{ width: 48, height: 48, borderRadius: '50%', border: '2px solid #ffb6c1', objectFit: 'cover' }}
                  />
                  <div>
                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, fontSize: '1.1rem', color: '#400006' }}>{review.author_name}</div>
                    <div style={{ color: '#b8002e', fontSize: '0.95rem', fontWeight: 500 }}>{'★'.repeat(review.rating)}<span style={{ color: '#bbb', marginLeft: 4 }}>{review.relative_time_description}</span></div>
                  </div>
                </div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.13rem', color: '#222', lineHeight: 1.5, marginTop: 8, textAlign: 'center', marginBottom: 6 }}>
                  {isExpanded ? review.text : clamped}
                  {truncated && !isExpanded && (
                    <span style={{ color: '#b8002e', cursor: 'pointer', marginLeft: 4, fontSize: '0.98rem', fontWeight: 500 }} onClick={() => setExpanded(idx)}>Read more</span>
                  )}
                  {isExpanded && (
                    <span style={{ color: '#b8002e', cursor: 'pointer', marginLeft: 4, fontSize: '0.98rem', fontWeight: 500 }} onClick={() => setExpanded(null)}>Show less</span>
                  )}
                </div>
                <div style={{
                  marginTop: 10,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: 'Playfair Display, Cormorant Garamond, serif',
                  fontSize: '0.98rem',
                  color: '#fff',
                  background: '#400006',
                  borderRadius: '0.7rem',
                  padding: '0.18rem 0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.5px',
                  boxShadow: '0 1px 6px #40000622',
                  width: 'fit-content',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}>
                  <svg width="16" height="16" fill="#fff" style={{ marginRight: 4 }} viewBox="0 0 20 20"><path d="M10 2a8 8 0 1 0 0 16A8 8 0 0 0 10 2zm3.71 6.29-4 4a1 1 0 0 1-1.42 0l-2-2a1 1 0 1 1 1.42-1.42l1.29 1.3 3.3-3.3a1 1 0 1 1 1.41 1.42z"/></svg>
                  From Google Reviews
                </div>
              </div>
            );
          })}
        </div>
        {/* Carousel navigation arrows */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 18,
        }}>
          <button
            onClick={() => setCurrent((prev) => (prev - perView + reviews.length) % reviews.length)}
            aria-label="Previous reviews"
            style={{
              background: '#ffdbe6',
              border: 'none',
              borderRadius: '50%',
              width: 36,
              height: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 1px 6px #40000622',
              color: '#400006',
              fontSize: 22,
              marginRight: 12,
            }}
          >
            ‹
          </button>
          <div style={{ display: 'flex', gap: 8 }}>
            {Array.from({ length: Math.ceil(reviews.length / perView) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx * perView)}
                aria-label={`Show reviews group ${idx + 1}`}
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  border: 'none',
                  background: current === idx * perView ? 'linear-gradient(120deg, #e6d8b4 0%, #400006 100%)' : '#ffdbe6',
                  boxShadow: current === idx * perView ? '0 0 0 2px #40000655' : 'none',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                  outline: 'none',
                  borderColor: current === idx * perView ? '#e6d8b4' : 'transparent',
                }}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent((prev) => (prev + perView) % reviews.length)}
            aria-label="Next reviews"
            style={{
              background: '#ffdbe6',
              border: 'none',
              borderRadius: '50%',
              width: 36,
              height: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 1px 6px #40000622',
              color: '#400006',
              fontSize: 22,
              marginLeft: 12,
            }}
          >
            ›
          </button>
        </div>
      </div>
      {/* See all reviews button */}
      <button
        onClick={() => window.location.href = '/reviews'}
        style={{
          marginTop: 32,
          background: 'linear-gradient(90deg, #ffdbe6 0%, #fbeaec 100%)',
          color: '#400006',
          fontFamily: 'Playfair Display, Cormorant Garamond, serif',
          fontWeight: 600,
          fontSize: '1.08rem',
          border: 'none',
          borderRadius: '0.8rem',
          padding: '0.7rem 2.2rem',
          boxShadow: '0 2px 12px #40000611',
          cursor: 'pointer',
          letterSpacing: '0.5px',
          transition: 'background 0.2s',
        }}
      >
        See all reviews
      </button>
      {/* Responsive mobile tweaks */}
      <style>{`
        @media (max-width: 700px) {
          .review-carousel-card {
            max-width: 98vw !important;
            min-height: 120px !important;
            padding: 1rem 0.5rem 1rem 0.5rem !important;
            max-height: 340px !important;
            overflow-y: auto !important;
          }
        }
      `}</style>
    </section>
  );
} 