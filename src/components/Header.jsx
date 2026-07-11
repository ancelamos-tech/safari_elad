export default function Header() {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px 28px',
      background: 'rgba(0,0,0,0.5)',
      borderBottom: '2px solid #ff1493',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(10px)',
    }}>
      <div className="header-text">
        <h1>שכבת אלעד</h1>
        <p>@AmosAncel</p>
      </div>
    </header>
  )
}
