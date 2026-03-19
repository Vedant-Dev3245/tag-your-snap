import Marquee from 'react-fast-marquee';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { jwtDecode, JwtPayload } from "jwt-decode";
import Cookies from 'js-cookie';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

// Interactive memory phrase — highlights gold and pauses scroll on hover
function MemPhrase({ text, onHover }: { text: string; onHover: (v: boolean) => void }) {
  const [lit, setLit] = useState(false);
  return (
    <span
      className="font-display"
      style={{
        fontStyle: 'italic',
        fontSize: '20px',
        fontWeight: 400,
        color: lit ? '#DAC86D' : 'rgba(255,255,255,0.38)',
        padding: '0 36px',
        whiteSpace: 'nowrap',
        letterSpacing: lit ? '0.07em' : '0.02em',
        textShadow: lit ? '0 0 28px rgba(218,200,109,0.4)' : 'none',
        transition: 'color 0.28s, letter-spacing 0.3s, text-shadow 0.3s',
        cursor: 'default',
        userSelect: 'none',
      }}
      onMouseEnter={() => { setLit(true);  onHover(true);  }}
      onMouseLeave={() => { setLit(false); onHover(false); }}
    >
      {text}
    </span>
  );
}

const memPhrases = [
  'The day everyone dressed up',
  'Sky Lawns at golden hour',
  'Professors and batchmates, one frame',
  'The snap that lives forever',
  'Every branch, every face',
  'A BITSian chapter, sealed in silver',
  'Find yourself in the crowd',
  'Tagged and remembered, always',
  'Two days, infinite memories',
];

export default function Hero() {
  const [memPaused, setMemPaused] = useState(false);
  const navigate = useNavigate();

  // ── Same login logic as NavBar/FancyButton — wired directly to hero button ──
  const auth = Cookies.get('jwt') !== undefined;

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const url  = "https://snaps-api.bits-sarc.in/users/google/";
      const response = await fetch(url, {
        method: "POST", mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: tokenResponse.access_token }),
      });
      const json: { error: boolean; message: string; data?: any } = await response.json();
      if (json.error) { alert(json.message); return; }
      Cookies.set('jwt', json.data.access_token, { expires: 1 });
      const decoded = jwtDecode(Cookies.get('jwt') as string) as JwtPayload & { branch: string };
      if (decoded.branch !== undefined) navigate(`/tag/${decoded.branch}`);
      else navigate('/tag');
    },
  });

  const getTagHref = () => {
    if (!auth) return null; // will trigger login
    try {
      const decoded = jwtDecode(Cookies.get('jwt') as string) as JwtPayload & { branch: string };
      return decoded.branch ? `/tag/${decoded.branch}` : '/tag';
    } catch { return '/tag'; }
  };

  const tagHref = getTagHref();

  return (
    <div className="pt-48 font-body">

      {/* ── Hero text ── */}
      <section className="text-center px-8 pt-16 pb-0 relative z-10">

        <div className="anim-fade-up-1 font-gilmer-bold uppercase mb-5"
          style={{ fontSize: '13px', color: 'rgba(218,200,109,0.65)', letterSpacing: '0.38em' }}>
          Login · Recognise · Tag
        </div>

        <div className="anim-fade-up-2 font-display"
          style={{ fontStyle: 'italic', fontWeight: 700, fontSize: 'clamp(64px, 10vw, 120px)', lineHeight: 0.94, letterSpacing: '-0.02em', color: '#DAC86D', marginBottom: '22px', textShadow: '0 0 60px rgba(218,200,109,0.18)' }}>
          Capturing Memories<br />Capturing Smiles
        </div>

        <div className="anim-fade-up-3 font-gilmer-medium"
          style={{ fontSize: '19px', fontWeight: 300, color: 'rgba(255,255,255,0.6)', marginBottom: '52px', letterSpacing: '0.03em' }}>
          tagging made easy and effortless
        </div>

        {/* Buttons — Login & Tag is a real working login/navigate button */}
        <div className="anim-fade-up-4 flex gap-4 justify-center mb-16">

          {/* Login & Tag button — triggers login if not authed, navigates to tag if authed */}
          {auth && tagHref ? (
            <Link
              to={tagHref}
              className="font-gilmer-bold rounded-full"
              style={{ background: '#DAC86D', color: '#000', fontSize: '16px', fontWeight: 700, padding: '18px 52px', textDecoration: 'none', letterSpacing: '0.06em', transition: 'transform 0.2s, box-shadow 0.2s', display: 'inline-block' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 32px rgba(218,200,109,0.38)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)';   (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
            >
              Tag →
            </Link>
          ) : (
            <button
              onClick={() => login()}
              className="font-gilmer-bold rounded-full"
              style={{ background: '#DAC86D', color: '#000', fontSize: '16px', fontWeight: 700, padding: '18px 52px', border: 'none', letterSpacing: '0.06em', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 32px rgba(218,200,109,0.38)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)';   (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
            >
              Login &amp; Tag →
            </button>
          )}

          {/* How it works */}
          <a
            href="#hiw"
            className="font-gilmer-medium rounded-full flex items-center gap-3 watch-btn"
            style={{ border: '1.5px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.65)', fontSize: '16px', padding: '18px 38px', textDecoration: 'none' }}
          >
            <span style={{ width: '22px', height: '22px', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ width: 0, height: 0, borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderLeft: '7px solid rgba(255,255,255,0.55)', marginLeft: '2px' }} />
            </span>
            How it works
          </a>
        </div>
      </section>

      {/* ── Info bar — scrolls right ── */}
      <div style={{ overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '15px 0', background: 'rgba(218,200,109,0.025)' }}>
        <Marquee autoFill gradient gradientColor="#000" gradientWidth={220} speed={45} direction="left">
          {['50+ Branches', 'BITS Pilani', 'Sky Lawns', 'SARC', 'Batch Snaps 2026', '3000+ Students'].flatMap((t, i) => [
            <span key={`t${i}`} className="font-gilmer-bold" style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(218,200,109,0.7)', padding: '0 32px', whiteSpace: 'nowrap' }}>{t}</span>,
            <span key={`s${i}`} style={{ color: 'rgba(218,200,109,0.3)', padding: '0 4px', fontSize: '16px' }}>✦</span>,
          ])}
        </Marquee>
      </div>

      {/* ── Memory marquee — opposite direction, hover to pause + highlight ── */}
      <div style={{ overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '20px 0', background: 'rgba(8,8,8,0.98)' }}>
        <Marquee autoFill gradient gradientColor="#080808" gradientWidth={220} speed={38} direction="right" play={!memPaused}>
          {memPhrases.flatMap((phrase, i) => [
            <MemPhrase key={`p${i}`} text={phrase} onHover={setMemPaused} />,
            <span key={`d${i}`} style={{ color: 'rgba(218,200,109,0.22)', padding: '0 6px', fontSize: '20px', userSelect: 'none' }}>◆</span>,
          ])}
        </Marquee>
      </div>

    </div>
  );
}