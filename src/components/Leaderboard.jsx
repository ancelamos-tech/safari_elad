import { useEffect, useState } from 'react'
import { db } from '../firebase-config'
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore'

function formatTime(s) {
  const m = Math.floor(s / 60).toString().padStart(2, '0')
  const sec = (s % 60).toString().padStart(2, '0')
  return `${m}:${sec}`
}

export default function Leaderboard({ style }) {
  const [board, setBoard] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const q = query(collection(db, 'leaderboard'), orderBy('score', 'desc'), orderBy('time', 'asc'), limit(50))
        const snap = await getDocs(q)
        setBoard(snap.docs.map(d => d.data()))
      } catch {
        setBoard([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div style={{ marginTop: 32, ...style }}>
      <h3 style={{ color: '#ff1493', marginBottom: 16, fontSize: 20 }}>🏆 לידרבורד</h3>
      {loading ? (
        <p style={{ color: '#888' }}>טוען...</p>
      ) : board.length === 0 ? (
        <p style={{ color: '#555' }}>אין תוצאות עדיין</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {board.map((entry, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              background: i === 0 ? 'rgba(255,20,147,0.12)' : 'rgba(17,17,17,0.85)',
              border: `1px solid ${i === 0 ? '#ff1493' : '#222'}`,
              borderRadius: 10, padding: '10px 16px',
            }}>
              <span style={{ color: '#ff1493', fontWeight: 800, minWidth: 24, fontSize: 18 }}>
                {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}.`}
              </span>
              <span style={{ flex: 1, textAlign: 'right', fontWeight: 600 }}>{entry.name}</span>
              <span style={{ color: '#22c55e', fontWeight: 700 }}>{entry.score}/15</span>
              <span style={{ color: '#888', fontSize: 14 }}>{formatTime(entry.time)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
