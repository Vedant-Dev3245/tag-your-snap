import Marquee from 'react-fast-marquee';
import { useState } from 'react';

function LRTWord({ text }: { text: string }) {
  const [h, setH] = useState(false);
  return (
    <span
      className="font-bebas"
      style={{
        fontSize: '42px',
        letterSpacing: '0.06em',
        padding: '10px 22px',
        whiteSpace: 'nowrap',
        cursor: 'default',
        userSelect: 'none',
        display: 'inline-block',
        lineHeight: 1,
        // Outlined style — transparent fill with gold stroke (the "good" version)
        color: h ? '#DAC86D' : 'transparent',
        WebkitTextStroke: h ? '1px #DAC86D' : '1px rgba(218,200,109,0.4)',
        textShadow: h ? '0 0 24px rgba(218,200,109,0.35)' : 'none',
        transition: 'color 0.18s, -webkit-text-stroke 0.18s, text-shadow 0.2s',
      }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      {text}
    </span>
  );
}

function LRTDot() {
  return (
    <span
      className="font-bebas"
      style={{
        fontSize: '42px',
        color: 'rgba(218,200,109,0.12)',
        padding: '10px 6px',
        userSelect: 'none',
        lineHeight: 1,
      }}
    >
      ·
    </span>
  );
}

export default function Banner() {
  return (
    <div style={{
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      background: '#000',
      lineHeight: 1,
    }}>
      <Marquee autoFill gradient gradientColor="#000" gradientWidth={240} speed={55} direction="left">
        <LRTWord text="Login" /><LRTDot />
        <LRTWord text="Recognise" /><LRTDot />
        <LRTWord text="Tag" /><LRTDot />
      </Marquee>
    </div>
  );
}