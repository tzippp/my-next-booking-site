'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/bio', label: 'Artist Bio' },
  { href: '/care', label: 'Care' },
  { href: '/gallery', label: 'Gallery' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Auto-close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900 && open) {
        setOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [open]);

  return (
    <nav style={{ background: '#111', color: '#fff', padding: '1rem 0', width: '100%' }}>
      <div
        className="navbar-inner"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2rem',
          flexWrap: 'nowrap',
          minWidth: 0,
        }}
      >
        <span
          className="navbar-brand brand-font"
          style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: '#fff',
            letterSpacing: '2px',
            textDecoration: 'none',
            fontFamily: 'Le Major',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            flexShrink: 0,
            transition: 'margin 0.3s',
          }}
        >
          <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>
            Red Carpet Luxury Spa
          </Link>
        </span>
        {/* Desktop Nav: only show if not open (mobile) and screen is wide */}
        <div
          className="desktop-nav"
          style={{
            display: open ? 'none' : 'flex',
            gap: '2rem',
            flexWrap: 'nowrap',
            minWidth: 0,
          }}
        >
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: '#fff',
                fontWeight: 500,
                fontSize: '1.1rem',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Hamburger Icon: only show on mobile or when open */}
        {!open && (
          <button
            className="mobile-hamburger"
            aria-label="Open navigation menu"
            onClick={() => setOpen(!open)}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: '2rem',
              cursor: 'pointer',
              display: 'none',
              alignItems: 'center',
              zIndex: 2200,
            }}
          >
            <span style={{ fontSize: '2rem', lineHeight: 1 }}>☰</span>
          </button>
        )}
      </div>
      {/* Mobile Nav: only show when open */}
      {open && (
        <div
          className="mobile-nav"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 2000,
            background: '#111',
            color: '#fff',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
          }}
        >
          {/* Top bar with business name and close X */}
          <div
            className="mobile-nav-top"
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1.5rem 2rem 1rem 2rem',
              boxSizing: 'border-box',
            }}
          >
            <span
              className="navbar-brand brand-font"
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#fff',
                letterSpacing: '2px',
                fontFamily: 'Le Major',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                marginLeft: 0,
                transition: 'margin 0.3s',
              }}
            >
              Red Carpet Luxury Spa
            </span>
            <button
              aria-label="Close navigation menu"
              onClick={() => setOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                fontSize: '2.5rem',
                cursor: 'pointer',
                zIndex: 2100,
                lineHeight: 1,
              }}
            >
              ✕
            </button>
          </div>
          {/* Nav links below top bar */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2rem',
              width: '100%',
              marginTop: '2rem',
            }}
          >
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: '#fff',
                  fontWeight: 500,
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  fontFamily: 'Playfair Display, Georgia, Times New Roman, serif',
                  letterSpacing: '1px',
                }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
      <style jsx>{`        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-hamburger {
            display: flex !important;
          }
        }
        @media (min-width: 901px) {
          .mobile-hamburger {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}

