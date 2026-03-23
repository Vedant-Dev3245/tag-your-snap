import sarcLogo from "/sarc-logo.svg";

export default function Footer() {

  const socialLinks = [
    {
      title: 'Instagram',
      href: 'https://www.instagram.com/sarc_bitspilani/',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>,
    },
    {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/company/sarcbitspilani/posts/?feedView=all',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
    },
    {
      title: 'Twitter / X',
      href: 'https://twitter.com/sarcbitspilani',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
    },
  ];

  const aboutLinks = [
    { label: 'BITS and Beyond', href: 'https://open.spotify.com/show/3z8808lf1AB9NspMNufPqr?si=cd20f854d98a42b2' },
    { label: 'Initiatives',     href: 'https://fierce-jeep-1d2.notion.site/Student-Alumni-Relations-Cell-Who-are-we-9fb9470c4ec14d59978ed9c98a440711' },
    { label: 'Gallery',         href: 'https://fierce-jeep-1d2.notion.site/Photo-Archive-cddd977931804e458b7eb0bb04a9288a' },
    { label: 'Echo',            href: 'https://www.bitsaa.org/page/publications/bits-echo' },
  ];

  const secLabel: React.CSSProperties = {
    fontFamily: 'Gilmer-Bold, sans-serif', fontSize: '13px', fontWeight: 700,
    color: '#DAC86D', letterSpacing: '0.24em', textTransform: 'uppercase',
    display: 'block', marginBottom: '22px',
  };

  return (
    <footer
      id="contact"
      style={{ width: '100%', background: '#060606', borderTop: '1.5px solid rgba(218,200,109,0.2)', position: 'relative', zIndex: 5 }}
    >
      {/* Thin gold gradient accent line */}
      <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(218,200,109,0.5) 20%, rgba(218,200,109,0.5) 80%, transparent)' }} />

      {/* ── Main grid ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '80px 88px 72px', gap: '0', width: '100%', boxSizing: 'border-box' }}>

        {/* Col 1 — Contact */}
        <div style={{ paddingRight: '72px' }}>
          <span style={secLabel}>Email Us</span>
          <a
            href="mailto:alumnicell@pilani.bits-pilani.ac.in"
            className="font-gilmer-medium"
            style={{ fontSize: '17px', fontWeight: 400, color: 'rgba(255,255,255,0.75)', display: 'block', marginBottom: '48px', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#DAC86D')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
          >
            alumnicell@pilani.bits-pilani.ac.in
          </a>

          <span style={secLabel}>Socials</span>
          <div style={{ display: 'flex', gap: '14px' }}>
            {socialLinks.map(({ title, href, icon }) => (
              <a
                key={title} href={href} target="_blank" rel="noopener noreferrer" title={title}
                className="social-btn"
                style={{ width: '54px', height: '54px', border: '1px solid rgba(218,200,109,0.3)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', background: 'rgba(218,200,109,0.03)' }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — About SARC */}
        <div style={{ paddingLeft: '72px', paddingRight: '72px', borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
          <span style={secLabel}>About SARC</span>
          {aboutLinks.map(({ label, href }) => (
            <a
              key={label} href={href} target="_blank" rel="noopener noreferrer"
              className="footer-link font-gilmer-medium"
              style={{ display: 'block', fontSize: '22px', fontWeight: 400, color: 'rgba(255,255,255,0.62)', marginBottom: '20px', textDecoration: 'none', transition: 'color 0.2s, padding-left 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#DAC86D'; (e.currentTarget as HTMLElement).style.paddingLeft = '8px'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.62)'; (e.currentTarget as HTMLElement).style.paddingLeft = '0'; }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Col 3 — Brand */}
        <div style={{ paddingLeft: '72px', borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '22px', marginBottom: '24px' }}>
            <div style={{ width: '88px', height: '88px', border: '1.5px solid rgba(218,200,109,0.5)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(218,200,109,0.06)', flexShrink: 0, boxShadow: '0 0 24px rgba(218,200,109,0.15)' }}>
              <img src={sarcLogo} alt="SARC" style={{ width: '56px', height: '56px' }} />
            </div>
            {/* Plain solid gold — no animation */}
            <div className="font-bebas" style={{ fontSize: '72px', letterSpacing: '0.1em', lineHeight: 1, color: '#DAC86D' }}>
              SARC
            </div>
          </div>

          <p className="font-gilmer-medium" style={{ fontSize: '16px', fontWeight: 300, color: 'rgba(255,255,255,0.55)', lineHeight: 1.88, maxWidth: '310px' }}>
            Student Alumni Relations Cell is a student body of BITS Pilani, Pilani Campus working under the aegis of the Dean of Alumni Relations Division.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div style={{ width: '100%', height: '1px', background: 'rgba(218,200,109,0.12)' }} />

      {/* Bottom bar */}
      <div style={{ padding: '28px 88px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', width: '100%', boxSizing: 'border-box', background: 'rgba(0,0,0,0.5)' }}>
        <div className="font-gilmer-medium" style={{ fontSize: '18px', fontWeight: 500, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>
          Made with <span style={{ color: '#DAC86D', fontSize: '20px' }}>♥</span> by SARC
        </div>
        <div className="font-gilmer-medium" style={{ fontSize: '12px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)' }}>
          © SARC · BITS Pilani · Batch Snaps 2026
        </div>
      </div>
    </footer>
  );
}