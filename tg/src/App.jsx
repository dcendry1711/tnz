import { useState } from 'react'
import Header from './components/Header'
import Die from './components/Die'

function App() {

  function allNewDice(){
    return new Array(10).fill(0).map(() => ({value: Math.floor(Math.random()* 6 + 1), isHeld: false}))
  }

  const [dies, setDies] = useState(allNewDice)


  const btnsEl = dies.map((die,index) => {
    return <Die key={index} value={die.value} isHeld={die.isHeld}/>
  })

  function reRoll(){
    setDies( prevDies => allNewDice())
  }

  return (
    <main>
      <Header />

        <section className="btns-section">
          {btnsEl}
        </section>
      
      <button className="roll-btn" onClick={reRoll}>ROLL</button>

    </main>
  )
}

export default App
