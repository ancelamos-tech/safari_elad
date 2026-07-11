import { useState, useEffect, useRef } from 'react'
import { questions } from '../questions'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function GameScreen({ onFinish }) {
  const [pool] = useState(() => shuffle(questions).slice(0, 10))
  const [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [elapsed, setElapsed] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setInterval(() => setElapsed(e => e + 1), 1000)
    return () => clearInterval(timerRef.current)
  }, [])

  function handleAnswer(i) {
    if (selected !== null) return
    setSelected(i)
    const correct = pool[idx].correctIndex === i
    const newScore = correct ? score + 1 : score
    if (correct) setScore(newScore)

    setTimeout(() => {
      if (idx + 1 >= pool.length) {
        clearInterval(timerRef.current)
        onFinish({ score: newScore, time: elapsed + 1, total: pool.length })
      } else {
        setIdx(idx + 1)
        setSelected(null)
      }
    }, 900)
  }

  const q = pool[idx]
  const progress = ((idx + 1) / pool.length) * 100

  return (
    <div style={{ maxWidth: 560, width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, color: '#888', fontSize: 14 }}>
        <span>שאלה {idx + 1} / {pool.length}</span>
        <span style={{ color: '#ec4899', fontWeight: 700 }}>⏱ {formatTime(elapsed)}</span>
      </div>
      <div style={{ background: '#222', borderRadius: 8, height: 6, marginBottom: 24 }}>
        <div style={{ background: '#ec4899', height: '100%', borderRadius: 8, width: `${progress}%`, transition: 'width 0.3s' }} />
      </div>
      <div style={{
        background: '#111', border: '1px solid #222', borderRadius: 16,
        padding: '28px 24px', marginBottom: 20
      }}>
        <p style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.5 }}>{q.question}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {q.options.map((opt, i) => {
          let bg = '#111'
          let border = '#333'
          if (selected !== null) {
            if (i === q.correctIndex) { bg = 'rgba(34,197,94,0.2)'; border = '#22c55e' }
            else if (i === selected) { bg = 'rgba(239,68,68,0.2)'; border = '#ef4444' }
          }
          return (
            <button key={i} onClick={() => handleAnswer(i)} style={{
              background: bg, border: `2px solid ${border}`, borderRadius: 12,
              padding: '14px 20px', color: '#fff', fontSize: 16, fontFamily: 'inherit',
              cursor: selected !== null ? 'default' : 'pointer', textAlign: 'right',
              transition: 'all 0.2s',
            }}>
              {opt}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function formatTime(s) {
  const m = Math.floor(s / 60).toString().padStart(2, '0')
  const sec = (s % 60).toString().padStart(2, '0')
  return `${m}:${sec}`
}
