import Leaderboard from './Leaderboard'
import { useState } from 'react'

const btnStyle = {
  background: '#ff1493',
  color: '#000000',
  border: '3px solid #000000',
  padding: '15px 30px',
  fontSize: 18,
  fontWeight: 'bold',
  borderRadius: 8,
  cursor: 'pointer',
  width: 220,
}

export default function StartScreen({ onStart }) {
  const [showBoard, setShowBoard] = useState(false)

  return (
    <div style={{ textAlign: 'center', maxWidth: 480, width: '100%' }}>
      <h1 style={{ fontSize: 36, fontWeight: 800, color: '#000000', margin: '32px 0 12px' }}>
        טריוויה שכבת אלעד
      </h1>
      <p style={{ color: '#000000', marginBottom: 36 }}>15 שאלות אקראיות | מי הטוב ביותר?</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center' }}>
        <button style={btnStyle} onClick={onStart}>התחל משחק</button>
        <button style={{ ...btnStyle, background: 'transparent', color: '#000000' }} onClick={() => setShowBoard(v => !v)}>
          {showBoard ? 'סגור לידרבורד' : 'לידרבורד'}
        </button>
      </div>
      {showBoard && <Leaderboard style={{ marginTop: 32 }} />}
    </div>
  )
}
