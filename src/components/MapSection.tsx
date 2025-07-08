'use client';

import React, { useEffect, useRef } from 'react';

const BUSINESS_LOCATION = { lat: 41.1162, lng: -74.0661 }; // Replace with your actual business coordinates
const BUSINESS_NAME = 'Red Carpet Luxury Spa';
const BUSINESS_DESC = 'Experience luxury and beauty at our Rockland County location.';

export default function MapSection() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.google && !(window as any).google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || process.env.GOOGLE_MAPS_API_KEY}&map_ids=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID || process.env.GOOGLE_MAPS_MAP_ID}`;
      script.async = true;
      script.onload = initMap;
      document.body.appendChild(script);
    } else {
      initMap();
    }

    function initMap() {
      if (!mapRef.current || !(window as any).google) {
        return;
      }
      const map = new (window as any).google.maps.Map(mapRef.current, {
        center: BUSINESS_LOCATION,
        zoom: 15,
        mapId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID || process.env.GOOGLE_MAPS_MAP_ID,
        disableDefaultUI: true,
        gestureHandling: 'cooperative',
        scrollwheel: false,
      });
      // Custom SVG heart icon
      const heartSVG = {
        path: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
        fillColor: '#b8002e',
        fillOpacity: 1,
        strokeWeight: 0,
        scale: 2.2,
        anchor: new (window as any).google.maps.Point(12, 21),
      };
      const marker = new (window as any).google.maps.Marker({
        position: BUSINESS_LOCATION,
        map,
        icon: heartSVG,
        title: BUSINESS_NAME,
      });
      const infoWindow = new (window as any).google.maps.InfoWindow({
        content: `<div style="font-family:'Cormorant Garamond',serif;font-size:1.1rem;color:#400006;padding:0.5rem 1rem;background:rgba(255,245,245,0.97);border-radius:1rem;box-shadow:0 2px 12px #40000622;max-width:220px;text-align:center;">
          <strong>${BUSINESS_NAME}</strong><br />${BUSINESS_DESC}
        </div>`,
      });
      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
      // Open by default on load
      infoWindow.open(map, marker);
    }
  }, []);

  return (
    <section style={{
      width: '100%',
      maxWidth: 900,
      margin: '2.5rem auto 3rem auto',
      borderRadius: '1.5rem',
      overflow: 'hidden',
      boxShadow: '0 2px 24px #40000611',
      background: 'linear-gradient(120deg, #fff6f6 0%, #fbeaec 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem 1rem',
    }}
    >
      <h2 style={{
        fontFamily: 'Cormorant Garamond, Playfair Display, Georgia, serif',
        fontSize: '2.1rem',
        color: 'var(--color-burgundy, #400006)',
        fontWeight: 500,
        marginBottom: '1.5rem',
        letterSpacing: '0.5px',
      }}
      >
        Find Us Here
      </h2>
      <div ref={mapRef} style={{ width: '100%', height: 340, borderRadius: '1.2rem', boxShadow: '0 2px 16px #40000611' }} />
    </section>
  );
}
