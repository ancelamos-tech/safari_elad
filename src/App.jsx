import { useState } from 'react'
import Header from './components/Header'
import StartScreen from './components/StartScreen'
import GameScreen from './components/GameScreen'
import ResultScreen from './components/ResultScreen'
import './App.css'

export default function App() {
  const [screen, setScreen] = useState('start')
  const [result, setResult] = useState(null)

  function handleFinish(data) {
    setResult(data)
    setScreen('result')
  }

  function handleRestart() {
    setResult(null)
    setScreen('start')
  }

  return (
    <div className="app">
      <Header />
      <main className="main">
        {screen === 'start' && <StartScreen onStart={() => setScreen('game')} />}
        {screen === 'game' && <GameScreen onFinish={handleFinish} />}
        {screen === 'result' && <ResultScreen result={result} onRestart={handleRestart} />}
      </main>
    </div>
  )
}
