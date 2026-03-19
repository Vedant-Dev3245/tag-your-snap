import { Link } from "react-router-dom";
import { useState } from "react";

const YOUTUBE = "https://youtu.be/NuyQqXrAEmc";

const steps = [
  { n:'01', title:'Login with BITS email',
    desc:'Sign in with your BITS Pilani Google account. The system automatically knows your branch and loads your snap.' },
  { n:'02', title:'Land on your snap',
    desc:'Your branch photograph loads. Hover anywhere on the image — a magnified view appears. Find your face, search your name, then click it to tag yourself.' },
  { n:'03', title:'Tag and remember',
    desc:'Your tag is saved permanently. Tag your batchmates too — these memories stay long after graduation.' },
];

function StepCard({ n, title, desc, index }: { n:string; title:string; desc:string; index:number }) {
  const [h, setH] = useState(false);
  return (
    <div
      className={`hiw-step anim-fade-up-${index+2}`}
      style={{ background:h?'rgba(218,200,109,0.06)':'rgba(255,255,255,0.03)', border:`1px solid ${h?'rgba(218,200,109,0.45)':'rgba(255,255,255,0.1)'}`, borderRadius:'18px', padding:'52px 44px', transform:h?'translateY(-8px)':'translateY(0)', transition:'all 0.32s cubic-bezier(.22,1,.36,1)', cursor:'default', position:'relative', overflow:'hidden' }}
      onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    >
      {h && <div style={{ position:'absolute',top:0,right:0,width:'180px',height:'180px',background:'radial-gradient(circle at top right,rgba(218,200,109,0.13),transparent 70%)',pointerEvents:'none' }} />}

      {/* Step number */}
      <div className="font-bebas" style={{ fontSize:'110px', color:h?'rgba(218,200,109,0.26)':'rgba(218,200,109,0.08)', lineHeight:1, marginBottom:'22px', transition:'color 0.3s', letterSpacing:'-0.02em' }}>{n}</div>

      {/* Title */}
      <div className="font-gilmer-bold" style={{ fontSize:'24px', fontWeight:700, color:h?'#fff':'rgba(255,255,255,0.9)', marginBottom:'16px', transition:'color 0.3s' }}>{title}</div>

      {/* Description */}
      <div className="font-gilmer-medium" style={{ fontSize:'17px', color:h?'rgba(255,255,255,0.72)':'rgba(255,255,255,0.5)', lineHeight:1.82, fontWeight:300, transition:'color 0.3s' }}>{desc}</div>

      {/* Accent line */}
      <div style={{ width:h?'64px':'28px', height:'2.5px', background:'#DAC86D', marginTop:'28px', opacity:h?1:0.3, transition:'width 0.35s ease,opacity 0.35s ease', borderRadius:'2px' }} />
    </div>
  );
}

function WatchButton() {
  const [h, setH] = useState(false);
  return (
    <Link
      to={YOUTUBE} target="_blank"
      className="font-gilmer-bold watch-btn"
      style={{ display:'inline-flex', alignItems:'center', gap:'18px', fontSize:'20px', fontWeight:600, color:h?'#DAC86D':'rgba(255,255,255,0.62)', textDecoration:'none', border:`1.5px solid ${h?'rgba(218,200,109,0.55)':'rgba(255,255,255,0.2)'}`, padding:'22px 52px', borderRadius:'100px', transition:'color 0.25s,border-color 0.25s,transform 0.25s,background 0.25s', transform:h?'scale(1.05)':'scale(1)', letterSpacing:'0.04em', position:'relative', overflow:'hidden', background:h?'rgba(218,200,109,0.06)':'transparent' }}
      onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    >
      <span style={{ width:'52px', height:'52px', borderRadius:'50%', border:`1.5px solid ${h?'rgba(218,200,109,0.65)':'rgba(255,255,255,0.3)'}`, display:'inline-flex', alignItems:'center', justifyContent:'center', background:h?'rgba(218,200,109,0.12)':'transparent', transition:'all 0.25s', flexShrink:0, animation:h?'pulse-gold 1.5s ease infinite':'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={h?'#DAC86D':'rgba(255,255,255,0.65)'} viewBox="0 0 16 16" style={{ marginLeft:'2px', transition:'fill 0.25s' }}>
          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
        </svg>
      </span>
      Watch how it works
    </Link>
  );
}

export default function HowItWorks() {
  return (
    <section id="hiw" style={{ padding:'120px 72px 130px', borderTop:'1px solid rgba(255,255,255,0.1)', position:'relative', zIndex:5, background:'rgba(5,5,5,0.97)' }}>

      {/* Heading — BIGGEST */}
      <div className="text-center anim-fade-up-1" style={{ marginBottom:'80px' }}>
        <div className="font-gilmer-bold" style={{ fontSize:'14px', letterSpacing:'0.44em', textTransform:'uppercase', color:'#DAC86D', marginBottom:'20px' }}>
          How It Works
        </div>
        <div className="font-display" style={{ fontSize:'clamp(62px, 8vw, 100px)', fontWeight:700, fontStyle:'italic', color:'#fff', lineHeight:1.02, textShadow:'0 0 60px rgba(255,255,255,0.05)' }}>
          Three steps.<br />That's all.
        </div>
      </div>

      {/* Cards */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'32px', marginBottom:'80px' }}>
        {steps.map(({n,title,desc},i)=>(<StepCard key={n} n={n} title={title} desc={desc} index={i} />))}
      </div>

      {/* Watch CTA */}
      <div className="text-center anim-fade-up-5"><WatchButton /></div>
    </section>
  );
}