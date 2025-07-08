'use client';
import React, { useEffect, useRef, useState } from 'react';

const widgetColors = {
  primary: '#400006', // deep burgundy
  background: '#f9f6f2', // light beige
  accent: '#f8d7dd', // light pink
  text: '#222', // black
  white: '#fff',
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! How can I help you today?' },
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const sendMessage = async () => {
    if (!input.trim()) {
      return;
    }
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input, history: newMessages.slice(-6) }),
      });
      const data = await res.json();
      setMessages([...newMessages, { role: 'assistant', content: data.aiMessage }]);
    } catch {
      setMessages([...newMessages, { role: 'assistant', content: 'Sorry, something went wrong.' }]);
    }
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: 24,
      right: 24,
      zIndex: 1000,
      fontFamily: '\'Cormorant Garamond\', \'Butler\', serif',
    }}
    >
      {open
        ? (
            <div style={{
              width: 340,
              maxWidth: '95vw',
              height: 440,
              maxHeight: '80vh',
              background: widgetColors.background,
              border: `2px solid ${widgetColors.primary}`,
              borderRadius: 18,
              boxShadow: '0 4px 24px rgba(64,0,6,0.12)',
              display: 'flex',
              flexDirection: 'column',
            }}
            >
              <div style={{
                background: widgetColors.primary,
                color: widgetColors.white,
                padding: '12px 16px',
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                fontWeight: 600,
                fontSize: 18,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
              >
                <span>Chat with us</span>
                <button
                  aria-label="Close chat"
                  onClick={() => setOpen(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: widgetColors.white,
                    fontSize: 22,
                    cursor: 'pointer',
                    marginLeft: 8,
                  }}
                >
                  ×
                </button>
              </div>
              <div style={{
                flex: 1,
                overflowY: 'auto',
                padding: 16,
                background: widgetColors.background,
                fontSize: 16,
              }}
              >
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    style={{
                      marginBottom: 12,
                      textAlign: msg.role === 'user' ? 'right' : 'left',
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        background: msg.role === 'user' ? widgetColors.accent : widgetColors.white,
                        color: widgetColors.text,
                        borderRadius: 12,
                        padding: '8px 14px',
                        maxWidth: '80%',
                        wordBreak: 'break-word',
                        boxShadow: msg.role === 'user' ? '0 1px 4px #f8d7dd55' : '0 1px 4px #eee',
                      }}
                    >
                      {msg.content}
                    </span>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              <div style={{
                padding: 12,
                borderTop: `1px solid ${widgetColors.accent}`,
                background: widgetColors.background,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
              >
                <textarea
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  rows={1}
                  style={{
                    flex: 1,
                    resize: 'none',
                    border: `1px solid ${widgetColors.accent}`,
                    borderRadius: 8,
                    padding: '8px 10px',
                    fontSize: 15,
                    fontFamily: 'inherit',
                    background: widgetColors.white,
                    color: widgetColors.text,
                    minHeight: 36,
                    maxHeight: 80,
                    outline: 'none',
                  }}
                  disabled={loading}
                />
                <button
                  onClick={sendMessage}
                  disabled={loading || !input.trim()}
                  style={{
                    background: widgetColors.primary,
                    color: widgetColors.white,
                    border: 'none',
                    borderRadius: 8,
                    padding: '8px 16px',
                    fontWeight: 600,
                    fontSize: 15,
                    cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
                    opacity: loading || !input.trim() ? 0.7 : 1,
                    transition: 'opacity 0.2s',
                  }}
                >
                  {loading ? '...' : 'Send'}
                </button>
              </div>
            </div>
          )
        : (
            <button
              aria-label="Open chat"
              onClick={() => setOpen(true)}
              style={{
                background: widgetColors.primary,
                color: widgetColors.white,
                border: 'none',
                borderRadius: '50%',
                width: 60,
                height: 60,
                boxShadow: '0 2px 12px #40000633',
                fontSize: 30,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              💬
            </button>
          )}
    </div>
  );
}
