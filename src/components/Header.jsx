import titleImg from '../assets/WhatsApp Image 2026-07-11 at 16.36.51.jpeg'
import pantherImg from '../assets/WhatsApp Image 2026-07-11 at 16.36.52.jpeg'

export default function Header() {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 28px',
      background: 'rgba(17,17,17,0.95)',
      borderBottom: '2px solid #ff1493',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(8px)',
    }}>
      <img src={titleImg} alt="שכבת אלעד" style={{ height: 100, objectFit: 'contain' }} />
      <img src={pantherImg} alt="פנתר" style={{ height: 80, objectFit: 'contain' }} />
    </header>
  )
}
