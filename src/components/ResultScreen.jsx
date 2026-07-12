import { useState } from 'react'
import Leaderboard from './Leaderboard'
import { db } from '../firebase-config'
import { collection, addDoc } from 'firebase/firestore'

function formatTime(s) {
  const m = Math.floor(s / 60).toString().padStart(2, '0')
  const sec = (s % 60).toString().padStart(2, '0')
  return `${m}:${sec}`
}

export default function ResultScreen({ result, onRestart }) {
  const [name, setName] = useState('')
  const [saved, setSaved] = useState(false)
  const [saving, setSaving] = useState(false)

  async function handleSave() {
    if (!name.trim() || saving) return
    setSaving(true)
    try {
      await addDoc(collection(db, 'leaderboard'), {
        name: name.trim(),
        score: result.score,
        time: result.time,
        date: Date.now(),
      })
      setSaved(true)
    } catch {
      setSaved(true)
    }
    setSaving(false)
  }

  const pct = Math.round((result.score / result.total) * 100)

  return (
    <div style={{ maxWidth: 520, width: '100%', textAlign: 'center' }}>
      <div style={{
        background: '#111', border: '1px solid #222', borderRadius: 20,
        padding: '36px 28px', marginBottom: 24,
      }}>
        <div style={{ fontSize: 64, marginBottom: 8 }}>
          {pct === 100 ? '🏆' : pct >= 70 ? '⭐' : pct >= 40 ? '👍' : '💪'}
        </div>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: '#ff1493', marginBottom: 8 }}>
          {result.score} / {result.total} נכון
        </h2>
        <p style={{ color: '#888', fontSize: 18 }}>זמן: {formatTime(result.time)}</p>
      </div>

      {!saved ? (
        <div style={{ marginBottom: 24 }}>
          <p style={{ color: '#aaa', marginBottom: 12 }}>שמור את תוצאתך בלידרבורד</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="השם שלך"
              onKeyDown={e => e.key === 'Enter' && handleSave()}
              style={{
                background: '#111', border: '2px solid #333', borderRadius: 10,
                padding: '10px 16px', color: '#fff', fontSize: 16,
                fontFamily: 'inherit', direction: 'rtl', flex: 1, maxWidth: 220,
              }}
            />
            <button className="btn" onClick={handleSave} disabled={saving}>
              {saving ? '...' : 'שמור'}
            </button>
          </div>
        </div>
      ) : (
        <p style={{ color: '#22c55e', marginBottom: 24, fontSize: 16 }}>✓ נשמר בהצלחה!</p>
      )}

      <button className="btn" onClick={onRestart} style={{ width: 200 }}>שחק שוב</button>

      {saved && <Leaderboard style={{ marginTop: 32 }} />}
    </div>
  )
}
