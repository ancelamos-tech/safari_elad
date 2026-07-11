import titleImg from '../assets/WhatsApp Image 2026-07-11 at 16.36.51.jpeg'
import pantherImg from '../assets/WhatsApp Image 2026-07-11 at 16.36.52.jpeg'

export default function Header() {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 24px',
      background: '#111',
      borderBottom: '2px solid #ec4899',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <img src={titleImg} alt="שכבת אלעד" style={{ height: 60, objectFit: 'contain' }} />
      <img src={pantherImg} alt="פנתר" style={{ height: 60, objectFit: 'contain' }} />
    </header>
  )
}
