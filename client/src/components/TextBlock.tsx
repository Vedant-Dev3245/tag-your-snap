export default function TextBlock() {

  const facts = [
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} style={{ width:22,height:22 }}><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" /></svg>,
      title: 'Official Batch Photographs',
      desc:  'Formal department snaps with professors across all 50+ branches at the iconic Sky Lawns.',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} style={{ width:22,height:22 }}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>,
      title: 'Every Face Tagged',
      desc:  'Login with your BITS email — you land straight on your branch snap, ready to tag.',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} style={{ width:22,height:22 }}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>,
      title: 'Sky Lawns · Birla Museum',
      desc:  'Two unforgettable days at the most iconic venue on campus — where every branch gathers.',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} style={{ width:22,height:22 }}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>,
      title: 'Memories That Last Forever',
      desc:  'Every tag is saved permanently — a digital record of your BITSian chapter that endures.',
    },
  ];

  return (
    <section id="about" style={{ padding:'120px 72px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'96px', alignItems:'start', borderTop:'1px solid rgba(255,255,255,0.1)', position:'relative', zIndex:5 }}>

      {/* ── Left ── */}
      <div>
        <div className="font-gilmer-bold anim-fade-up-1" style={{ fontSize:'13px', letterSpacing:'0.42em', textTransform:'uppercase', color:'#DAC86D', display:'flex', alignItems:'center', gap:'14px', marginBottom:'28px' }}>
          <span style={{ display:'block', width:'32px', height:'2px', background:'#DAC86D', opacity:0.6 }} />
          About Batch Snaps
        </div>

        {/* Heading — biggest */}
        <div className="anim-fade-up-2 font-display" style={{ fontSize:'clamp(62px, 7.5vw, 96px)', fontWeight:700, fontStyle:'italic', color:'#fff', lineHeight:1.03, letterSpacing:'-0.02em', marginBottom:'36px', textShadow:'0 2px 48px rgba(255,255,255,0.05)' }}>
          A BITSian<br />tradition like<br />no other.
        </div>

        {[
          "Batch Snaps has been an integral part of the rich BITSian heritage — one of the most memorable days in any BITSian's life.",
          "Spread over 2 days at the Sky Lawns beside the Birla Museum, formal snaps are conducted for every department with their professors.",
          "SARC brings it all online — every face, every branch, tagged and preserved forever.",
        ].map((p,i)=>(
          <p key={i} className="font-gilmer-medium anim-fade-up-3" style={{ fontSize:'18px', lineHeight:1.95, color:'rgba(255,255,255,0.68)', fontWeight:300, marginBottom:'18px' }}>{p}</p>
        ))}

        {/* Stats */}
        <div className="anim-fade-up-4" style={{ display:'flex', gap:'52px', marginTop:'48px', paddingTop:'36px', borderTop:'1px solid rgba(255,255,255,0.1)' }}>
          {[{num:'3000+',lbl:'Students'},{num:'50+',lbl:'Branches'},{num:'∞',lbl:'Memories',isInf:true}].map(({num,lbl,isInf})=>(
            <div key={lbl}>
              <div style={{ fontFamily:isInf?"'Cormorant Garamond',serif":"'Bebas Neue',sans-serif", fontStyle:isInf?'italic':'normal', fontSize:isInf?'58px':'60px', color:'#DAC86D', letterSpacing:'0.04em', lineHeight:1, textShadow:'0 0 24px rgba(218,200,109,0.25)' }}>
                {num}
              </div>
              <div className="font-gilmer-medium" style={{ fontSize:'13px', letterSpacing:'0.26em', textTransform:'uppercase', color:'rgba(255,255,255,0.5)', marginTop:'6px' }}>{lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right — fact cards ── */}
      <div style={{ display:'flex', flexDirection:'column', gap:'18px' }}>
        {facts.map(({icon,title,desc},i)=>(
          <div key={title} className={`fact-card anim-fade-up-${Math.min(i+2,5)}`}
            style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.1)', padding:'28px 32px', display:'flex', gap:'22px', alignItems:'flex-start', borderRadius:'14px' }}>
            <div style={{ width:'52px', height:'52px', borderRadius:'50%', border:'1px solid rgba(218,200,109,0.35)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, color:'#DAC86D', background:'rgba(218,200,109,0.07)' }}>
              {icon}
            </div>
            <div>
              <div className="font-gilmer-bold" style={{ fontSize:'19px', fontWeight:700, color:'#fff', marginBottom:'8px' }}>{title}</div>
              <div className="font-gilmer-medium" style={{ fontSize:'16px', color:'rgba(255,255,255,0.52)', lineHeight:1.75, fontWeight:300 }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}