import { useEffect, useRef } from 'react';

// ─── Developer data ────────────────────────────────────────────────────────
const DEVS = [
  {
    initials: 'VJ',
    name: 'vedant jain',
    role: 'full stack dreamer',
    bitsId: '2024A7PS0555P',
    tagline: "its not zeroes and ones, its dreams and nightmares",
    photo: '../images/vedant.jpg',
    twitter: '',
    github: 'https://github.com/Vedant-Dev3245',
    linkedin: 'https://www.linkedin.com/in/vedant-jain-6b443a204/',
    spotify: 'https://open.spotify.com/user/31qsmzpfzh6orcfs7oqnyxm4c2ye?si=4da85dfad26845c2',
  },
  {
    initials: 'AS',
    name: 'ananya shankar',
    role: 'design team',
    bitsId: '2023B1A3PS0836P',
    tagline: 'carrying design team',
    photo: '../images/ananya.jpg',
    twitter: 'https://x.com/AnanyaS10355303',
    github: '',
    linkedin: 'http://www.linkedin.com/in/ananya-shankar20',
    spotify: 'https://open.spotify.com/user/yfc61ut0zdhh3vmpblix2q1gj?si=efe7d15ec71c4da1',
  },
  {
    initials: 'DS',
    name: 'dev satish',
    role: 'tech guy',
    bitsId: '2023B1A4PS0833P',
    tagline: "its not gambling if you know you're gonna win",
    photo: '../images/dev.jpg',
    twitter: 'https://x.com/devtech08',
    github: 'https://github.com/Dev-Satish-01',
    linkedin: 'https://www.linkedin.com/in/dev-satish/',
    spotify: 'https://open.spotify.com/user/1oziia7t09x2x1hqyuyktwo8w?si=531838d197504380',
  },
  {
    initials: 'PG',
    name: 'prithvi gowda c',
    role: 'database manager',
    bitsId: '2023A3PS0327P',
    tagline: 'we do things not because they are easy, but because we thought they would be easy',
    photo: '../images/prithvi.jpg',
    twitter: '',
    github: 'https://github.com/prithvi05prism',
    linkedin: 'https://www.linkedin.com/in/prithvi-gowda-c/',
    spotify: 'https://open.spotify.com/user/8m5wwm07knxfm47geod9njb52?si=f8002970d7f64ba4',
  },
  {
    initials: 'HK',
    name: 'himanshu kumar',
    role: 'frontend captain',
    bitsId: '2022A8PS0557P',
    tagline: 'meeting deadlines one at a time',
    photo: '../images/himanshu.jpeg',
    twitter: 'https://twitter.com/whimahima',
    github: 'https://github.com/Zendovo',
    linkedin: 'https://www.linkedin.com/in/himanshu-kumar-679ab31b0/',
    spotify: 'https://open.spotify.com/user/6n14xp26o4hzwdjjb60fdynee?si=53aa66381cb84e11',
  },
  {
    initials: 'RS',
    name: 'rakshit sakhuja',
    role: 'multitasker',
    bitsId: '2022A8PS0471P',
    tagline: 'Damn bro took only two weeks to complete this project',
    photo: '../images/rakshit.jpeg',
    twitter: '',
    github: 'https://github.com/Rakshit2622',
    linkedin: 'https://www.linkedin.com/in/rakshit-sakhuja-61ab00138/',
    spotify: 'https://open.spotify.com/user/dvpfwr821jtdbk0zqm9tmk1p6',
  },
  {
    initials: 'NO',
    name: 'nabisha obaid',
    role: 'ninja designer',
    bitsId: '2022B1PS1591P',
    tagline: 'Just give me some good music and a deadline',
    photo: '../images/nabisha.jpeg',
    twitter: 'http://www.twitter.com/not_bishx',
    github: '',
    linkedin: 'https://www.linkedin.com/in/nabisha-obaid-19175a264',
    spotify: 'https://open.spotify.com/user/31cvstady2jbjicplfq3efd5rmoa?si=dSQ8_NqpSPWGoBdne3E98g',
  },
  {
    initials: 'IA',
    name: 'ishita agrawal',
    role: 'Everything you like',
    bitsId: '2022A8PS1248P',
    tagline: 'You can. End of Story',
    photo: '../images/ishita.jpeg',
    twitter: 'https://twitter.com/isthatishita',
    github: '',
    linkedin: 'https://www.linkedin.com/in/ishita-agrawal-6a817b251',
    spotify: 'https://open.spotify.com/playlist/6PaRU0RIuVDuSIBQoq2Yp8?si=PGMZpcDGRCuJOBikw2QYnw',
  },
];

// ─── Icons ─────────────────────────────────────────────────────────────────
function IconTwitter() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconGithub() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function IconLinkedin() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function IconSpotify() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm4.6 14.4a.75.75 0 0 1-1 .25c-2.7-1.65-6.1-2.02-10.1-1.1a.75.75 0 1 1-.33-1.46c4.3-.98 8.1-.56 11.2 1.3.35.2.46.66.24 1.01zm1.4-3.1a.9.9 0 0 1-1.2.3c-3.1-1.9-7.8-2.45-11.5-1.3a.9.9 0 1 1-.52-1.73c4.2-1.27 9.4-.65 12.9 1.5.42.25.56.8.32 1.23zm.1-3.2c-3.7-2.2-9.9-2.4-13.4-1.3a1.05 1.05 0 1 1-.64-2c4-1.25 11-1.02 15.1 1.5a1.05 1.05 0 1 1-1.06 1.8z" />
    </svg>
  );
}

// ─── Card ──────────────────────────────────────────────────────────────────
function DevCard({ dev, index }: { dev: typeof DEVS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const socials = [
    { href: dev.twitter,  icon: <IconTwitter />,  title: 'Twitter' },
    { href: dev.github,   icon: <IconGithub />,   title: 'GitHub' },
    { href: dev.linkedin, icon: <IconLinkedin />, title: 'LinkedIn' },
    { href: dev.spotify,  icon: <IconSpotify />,  title: 'Spotify' },
  ].filter(s => s.href && s.href.trim() !== '');

  const iconBtn: React.CSSProperties = {
    width: '34px',
    height: '34px',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '9px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(255,255,255,0.42)',
    textDecoration: 'none',
    transition: 'border-color 0.2s, color 0.2s, background 0.2s',
  };

  return (
    <div
      ref={ref}
      style={{
        borderRadius: '18px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.09)',
        background: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        opacity: 0,
        transform: `translateY(${20 + (index % 3) * 6}px)`,
        transition: 'border-color 0.28s, transform 0.28s, box-shadow 0.28s, opacity 0.55s',
        transitionDelay: `${(index % 3) * 0.07}s`,
        cursor: 'default',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget;
        el.style.borderColor = 'rgba(218,200,109,0.4)';
        el.style.transform = 'translateY(-6px)';
        el.style.boxShadow = '0 20px 48px rgba(0,0,0,0.5)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget;
        el.style.borderColor = 'rgba(255,255,255,0.09)';
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = 'none';
      }}
    >
      {/* Photo — 280px so faces show well */}
      <div style={{ width: '100%', height: '280px', overflow: 'hidden', flexShrink: 0, borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(218,200,109,0.04)', position: 'relative' }}>
        <img
          src={dev.photo}
          alt={dev.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', filter: 'grayscale(100%) brightness(0.82)', transition: 'filter 0.35s' }}
          onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          onMouseEnter={e => (e.currentTarget.style.filter = 'grayscale(15%) brightness(0.95)')}
          onMouseLeave={e => (e.currentTarget.style.filter = 'grayscale(100%) brightness(0.82)')}
        />
        {/* Initials fallback shown behind image */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Bebas Neue', sans-serif", fontSize: '56px', letterSpacing: '0.06em', color: 'rgba(218,200,109,0.28)', zIndex: -1 }}>
          {dev.initials}
        </div>
        {/* Gold top accent line */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, rgba(218,200,109,0.4), transparent)' }} />
      </div>

      {/* Body — flex:1 keeps footer pinned at same level across all cards */}
      <div style={{ padding: '22px 22px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div className="font-gilmer-bold" style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '5px', lineHeight: 1.15 }}>
          {dev.name}
        </div>
        <div className="font-gilmer-medium" style={{ fontSize: '13px', color: 'rgba(218,200,109,0.72)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '7px', flexWrap: 'wrap' }}>
          {dev.role}
          <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(218,200,109,0.35)', flexShrink: 0 }} />
          {dev.bitsId}
        </div>
        {/* tagline — flex:1 absorbs space so footer always lands at same y */}
        <div className="font-gilmer-medium" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.72, fontWeight: 300, flex: 1 }}>
          {dev.tagline}
        </div>
      </div>

      {/* Social footer — pinned to bottom */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '9px', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '14px 22px', marginTop: '18px', flexShrink: 0 }}>
        {socials.map(({ href, icon, title }) => (
          <a
            key={title}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={title}
            style={iconBtn}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(218,200,109,0.5)';
              el.style.color = '#DAC86D';
              el.style.background = 'rgba(218,200,109,0.07)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(255,255,255,0.1)';
              el.style.color = 'rgba(255,255,255,0.42)';
              el.style.background = 'transparent';
            }}
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function Developers() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }); }, []);

  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── Hero ── */}
      <div style={{ paddingTop: '120px', paddingBottom: '64px', paddingLeft: '64px', paddingRight: '64px', borderBottom: '1px solid rgba(255,255,255,0.08)', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>

        {/* Ghost 2026 behind content */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', userSelect: 'none' }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(160px, 22vw, 260px)', lineHeight: 1, letterSpacing: '0.06em', color: 'transparent', WebkitTextStroke: '1px rgba(218,200,109,0.18)', whiteSpace: 'nowrap' }}>
            2026
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="font-gilmer-bold" style={{ fontSize: '13px', letterSpacing: '0.44em', color: '#DAC86D', textTransform: 'uppercase', marginBottom: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px' }}>
            <span style={{ display: 'block', width: '32px', height: '1.5px', background: '#DAC86D', opacity: 0.6 }} />
            Tag Your Snap Portal · 2026
            <span style={{ display: 'block', width: '32px', height: '1.5px', background: '#DAC86D', opacity: 0.6 }} />
          </div>

          <div className="font-display" style={{ fontStyle: 'italic', fontWeight: 700, fontSize: 'clamp(64px, 8vw, 96px)', lineHeight: 0.94, color: '#fff', letterSpacing: '-0.02em' }}>
            Meet the<br />
            <span style={{ color: '#DAC86D' }}>Team.</span>
          </div>

          <div className="font-gilmer-medium" style={{ marginTop: '24px', fontSize: '13px', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
            BITS Pilani · SARC
          </div>
        </div>
      </div>

      {/* ── Cards — key={i} avoids duplicate-key bug ── */}
      <div style={{ padding: '64px 56px 96px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', alignItems: 'stretch' }}>
          {DEVS.map((dev, i) => (
            <DevCard key={i} dev={dev} index={i} />
          ))}
        </div>
      </div>

    </div>
  );
}