import Leaderboard from './Leaderboard'
import { useState } from 'react'

export default function StartScreen({ onStart }) {
  const [showBoard, setShowBoard] = useState(false)

  return (
    <div style={{ textAlign: 'center', maxWidth: 480, width: '100%' }}>
      <h1 style={{ fontSize: 36, fontWeight: 800, color: '#ff1493', margin: '32px 0 12px' }}>
        טריוויה שכבת אלעד
      </h1>
      <p style={{ color: '#888', marginBottom: 36 }}>10 שאלות אקראיות | מי היכי ביותר?</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center' }}>
        <button className="btn" onClick={onStart} style={{ width: 220 }}>התחל משחק</button>
        <button className="btn-outline" onClick={() => setShowBoard(v => !v)} style={{ width: 220 }}>
          {showBoard ? 'סגור לידרבורד' : 'לידרבורד'}
        </button>
      </div>
      {showBoard && <Leaderboard style={{ marginTop: 32 }} />}
    </div>
  )
}
