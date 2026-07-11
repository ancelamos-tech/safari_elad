export default function Header() {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 28px',
      background: 'rgba(0,0,0,0.5)',
      borderBottom: '2px solid #ff1493',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(10px)',
    }}>
      <img src="/safari_elad/images/text-logo.png" alt="שכבת אלעד" style={{ height: 100, objectFit: 'contain' }} />
      <img src="/safari_elad/images/panther-logo.png" alt="פנתר" style={{ height: 80, objectFit: 'contain' }} />
    </header>
  )
}
