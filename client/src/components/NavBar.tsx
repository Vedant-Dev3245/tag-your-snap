import { useNavigate, useLocation } from 'react-router-dom';
import FancyButton from './FancyButton';
import { useGoogleLogin } from '@react-oauth/google';
import { jwtDecode, JwtPayload } from "jwt-decode";
import Cookies from 'js-cookie';
import { useState } from 'react';

export default function NavBar() {
  const [auth, setAuth]       = useState<boolean>(false);
  const [navMenu, setNavMenu] = useState<boolean>(false);
  const navigate              = useNavigate();
  const location              = useLocation();

  if (Cookies.get('jwt') !== undefined && !auth) setAuth(true);

  // ── Login logic — completely unchanged ──
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const url = "https://snaps-api.bits-sarc.in/users/google/";
      const response = await fetch(url, {
        method: "POST", mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: tokenResponse.access_token }),
      });
      const json: { error: boolean; message: string; data?: any } = await response.json();
      if (json.error) { alert(json.message); return; }
      setAuth(true);
      Cookies.set('jwt', json.data.access_token, { expires: 1 });
      const decoded = jwtDecode(Cookies.get('jwt') as string) as JwtPayload & { branch: string };
      if (decoded.branch !== undefined) navigate(`/tag/${decoded.branch}`);
      else navigate('/tag');
    },
  });

  const handleHome = () => {
    setNavMenu(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (location.pathname !== '/') navigate('/');
  };

  const handleHash = (id: string) => {
    setNavMenu(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 130);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Home',       fn: handleHome },
    { label: 'About',      fn: () => handleHash('about') },
    { label: 'Contact',    fn: () => handleHash('contact') },
    { label: 'Developers', fn: () => { setNavMenu(false); navigate('/developers'); } },
  ];

  const linkStyle: React.CSSProperties = {
    fontSize: '17px', fontWeight: 600,
    color: 'rgba(255,255,255,0.72)',
    background: 'none', border: 'none', cursor: 'pointer',
    fontFamily: 'Gilmer-Bold, sans-serif',
    letterSpacing: '0.03em', padding: '6px 0',
    display: 'inline-block', transition: 'color 0.2s',
    position: 'relative',
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[10000] px-5 md:px-8"
      style={{ background: 'linear-gradient(180deg,rgba(0,0,0,0.97) 0%,rgba(0,0,0,0.78) 55%,rgba(0,0,0,0) 100%)' }}
    >
      {/* ── Desktop ── */}
      <div
        className="hidden lg:flex items-center justify-between mt-3 px-10 rounded-2xl"
        style={{ height: '72px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(18px)' }}
      >
        {/* SARC — plain solid gold, no animation */}
        <button
          onClick={handleHome}
          className="font-bebas"
          style={{ fontSize: '34px', letterSpacing: '0.16em', color: '#DAC86D', background: 'none', border: 'none', cursor: 'pointer', padding: 0, lineHeight: 1 }}
        >
          SARC
        </button>

        <ul className="flex flex-1 justify-center list-none gap-0">
          {navItems.map(({ label, fn }) => (
            <li key={label} className="flex-1 text-center">
              <button
                onClick={fn}
                className="nav-link font-gilmer-bold w-full"
                style={linkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = '#DAC86D')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.72)')}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div className="custom-follow-mouse" style={{ minWidth: '130px', display: 'flex', justifyContent: 'flex-end' }}>
          <FancyButton text="Login" auth={auth} login={login} />
        </div>
      </div>

      {/* ── Mobile ── */}
      <div className="lg:hidden mt-3">
        <div
          className={`rounded-2xl px-5 ${navMenu ? 'pb-5' : ''}`}
          style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(16px)' }}
        >
          <div className="flex items-center justify-between h-14">
            <button onClick={handleHome} className="font-bebas" style={{ fontSize: '26px', letterSpacing: '0.14em', color: '#DAC86D', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              SARC
            </button>
            <button onClick={() => setNavMenu(!navMenu)} style={{ color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width={26} height={26}>
                <path strokeLinecap="round" strokeLinejoin="round" d={navMenu ? "M6 18L18 6M6 6l12 12" : "M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"} />
              </svg>
            </button>
          </div>
          {navMenu && (
            <div className="flex flex-col gap-4 text-center pb-2">
              {navItems.map(({ label, fn }) => (
                <button key={label} onClick={fn} className="font-gilmer-bold" style={{ ...linkStyle, fontSize: '22px', width: '100%', textAlign: 'center' }}>
                  {label}
                </button>
              ))}
              <div className="mt-2"><FancyButton text="Login" auth={auth} login={login} /></div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}