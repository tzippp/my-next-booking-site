'use client';

import { useState } from 'react';

export default function EyebrowsService() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hello! I'm here to help you with your eyebrow transformation. What would you like to know about microblading?" }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const serviceInfo = {
    name: 'Microblading & Eyebrow Enhancement',
    description: 'Achieve perfectly shaped, natural-looking eyebrows that frame your face beautifully.',
    duration: '2-3 hours',
    price: '$450',
    touchUp: '$150 (6-8 weeks)',
    features: [
      'Natural hair-like strokes',
      'Custom color matching',
      'Symmetrical design',
      'Long-lasting results (1-3 years)',
      'Pain-free procedure'
    ]
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    const userMessage = { type: 'user', text: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    
    // Simple bot responses based on keywords
    let botResponse = "Thank you for your message! I'd be happy to help you with your eyebrow transformation. Would you like to know about pricing, the procedure, or book a consultation?";
    
    if (inputMessage.toLowerCase().includes('price') || inputMessage.toLowerCase().includes('cost')) {
      botResponse = `Our microblading service is $${serviceInfo.price} with a touch-up session at $${serviceInfo.touchUp}. This includes your consultation, the procedure, and aftercare instructions.`;
    } else if (inputMessage.toLowerCase().includes('book') || inputMessage.toLowerCase().includes('appointment')) {
      botResponse = "I'd love to help you book! Please contact us at (555) 123-4567 or visit our booking page. What's your preferred date and time?";
    } else if (inputMessage.toLowerCase().includes('procedure') || inputMessage.toLowerCase().includes('process')) {
      botResponse = "The microblading procedure takes 2-3 hours. We start with a consultation to design your perfect shape, then use fine blades to create natural hair strokes. You'll see results immediately!";
    }
    
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
    }, 1000);
    
    setInputMessage('');
  };

  return (
    <main style={{
      minHeight: '100vh',
      background: 'var(--color-cream)',
      fontFamily: 'Cormorant Garamond, Playfair Display, Georgia, serif',
      color: 'var(--color-burgundy)',
      padding: '2rem 1rem',
    }}>
      {/* Hero Section */}
      <section style={{
        textAlign: 'center',
        marginBottom: '3rem',
        padding: '2rem 0',
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          color: 'var(--color-burgundy)',
          marginBottom: '1rem',
          letterSpacing: '0.5px',
        }}>
          {serviceInfo.name}
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: 'var(--color-deep-red)',
          maxWidth: '600px',
          margin: '0 auto 2rem auto',
          lineHeight: 1.6,
        }}>
          {serviceInfo.description}
        </p>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '2rem',
          background: 'var(--color-white)',
          padding: '1.5rem 2rem',
          borderRadius: '1rem',
          boxShadow: '0 4px 20px rgba(64,0,6,0.1)',
        }}>
          <div>
            <span style={{ color: 'var(--color-deep-red)', fontWeight: 600 }}>Duration:</span> {serviceInfo.duration}
          </div>
          <div>
            <span style={{ color: 'var(--color-deep-red)', fontWeight: 600 }}>Investment:</span> {serviceInfo.price}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section style={{
        maxWidth: '900px',
        margin: '0 auto 3rem auto',
        background: 'var(--color-white)',
        borderRadius: '1.5rem',
        padding: '2.5rem',
        boxShadow: '0 4px 20px rgba(64,0,6,0.08)',
      }}>
        <h2 style={{
          fontSize: '1.8rem',
          color: 'var(--color-deep-red)',
          marginBottom: '1.5rem',
          textAlign: 'center',
        }}>
          What's Included
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
        }}>
          {serviceInfo.features.map((feature, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem',
              background: 'var(--color-pale-gold)',
              borderRadius: '0.8rem',
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: 'var(--color-deep-red)',
                borderRadius: '50%',
              }} />
              <span style={{ fontSize: '1.1rem' }}>{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Chatbot */}
      <div style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1000,
      }}>
        {!isChatOpen && (
          <button
            onClick={() => setIsChatOpen(true)}
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'var(--color-deep-red)',
              color: 'var(--color-white)',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(64,0,6,0.3)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            💬
          </button>
        )}

        {isChatOpen && (
          <div style={{
            width: '350px',
            height: '500px',
            background: 'var(--color-white)',
            borderRadius: '1rem',
            boxShadow: '0 8px 30px rgba(64,0,6,0.2)',
            display: 'flex',
            flexDirection: 'column',
          }}>
            {/* Chat Header */}
            <div style={{
              background: 'var(--color-deep-red)',
              color: 'var(--color-white)',
              padding: '1rem',
              borderRadius: '1rem 1rem 0 0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span style={{ fontWeight: 600 }}>Eyebrow Consultation</span>
              <button
                onClick={() => setIsChatOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-white)',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div style={{
              flex: 1,
              padding: '1rem',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  style={{
                    alignSelf: message.type === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '80%',
                  }}
                >
                  <div style={{
                    background: message.type === 'user' ? 'var(--color-deep-red)' : 'var(--color-pale-gold)',
                    color: message.type === 'user' ? 'var(--color-white)' : 'var(--color-burgundy)',
                    padding: '0.8rem 1rem',
                    borderRadius: '1rem',
                    fontSize: '0.9rem',
                    lineHeight: 1.4,
                  }}>
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div style={{
              padding: '1rem',
              borderTop: '1px solid var(--color-pale-gold)',
              display: 'flex',
              gap: '0.5rem',
            }}>
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about pricing, booking, or the procedure..."
                style={{
                  flex: 1,
                  padding: '0.8rem',
                  border: '1px solid var(--color-pale-gold)',
                  borderRadius: '0.5rem',
                  fontSize: '0.9rem',
                  fontFamily: 'inherit',
                }}
              />
              <button
                onClick={handleSendMessage}
                style={{
                  padding: '0.8rem 1rem',
                  background: 'var(--color-deep-red)',
                  color: 'var(--color-white)',
                  border: 'none',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                }}
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
} 