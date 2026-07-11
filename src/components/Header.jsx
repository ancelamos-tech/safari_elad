const PantherIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    <ellipse cx="30" cy="35" rx="18" ry="20" fill="#1a1a1a" stroke="#ec4899" strokeWidth="1.5"/>
    <ellipse cx="30" cy="20" rx="12" ry="11" fill="#1a1a1a" stroke="#ec4899" strokeWidth="1.5"/>
    <ellipse cx="23" cy="13" rx="5" ry="7" fill="#1a1a1a" stroke="#ec4899" strokeWidth="1.5"/>
    <ellipse cx="37" cy="13" rx="5" ry="7" fill="#1a1a1a" stroke="#ec4899" strokeWidth="1.5"/>
    <circle cx="25" cy="20" r="2.5" fill="#ec4899"/>
    <circle cx="35" cy="20" r="2.5" fill="#ec4899"/>
    <circle cx="30" cy="24" r="1.5" fill="#ec4899" opacity="0.7"/>
  </svg>
)

const TitleText = () => (
  <div style={{
    fontFamily: 'serif', fontSize: 22, fontWeight: 900,
    color: '#fff', letterSpacing: 2, direction: 'rtl',
    textShadow: '0 0 20px rgba(236,72,153,0.5)',
  }}>
    שכבת אלעד
  </div>
)

export default function Header() {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 24px',
      background: '#111',
      borderBottom: '2px solid #ec4899',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <TitleText />
      <PantherIcon />
    </header>
  )
}
