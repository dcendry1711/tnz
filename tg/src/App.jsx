import { useState } from 'react'
import Header from './components/Header'
import Die from './components/Die'

function App() {

  function allNewDice(){
    const dieArr = []
      for (let i = 0; i < 10 ; i++){
        const randomNumber = Math.floor(Math.random() * 6 + 1)
        dieArr.push(randomNumber)
      }
    return dieArr
  }

  const [dies, setDies] = useState(allNewDice)

  const btnsEl = dies.map(die => {
    return <Die value={die}/>
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
