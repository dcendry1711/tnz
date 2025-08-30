import { useState } from 'react'
import { nanoid } from 'nanoid'
import Header from './components/Header'
import Die from './components/Die'
import Confetti from 'react-confetti'

function App() {

  //tworzenie tablicy z obiektami do gry

  function allNewDice(){
    return new Array(10).fill(0).map(() => ({value: Math.floor(Math.random()* 6 + 1), isHeld: false, id:nanoid()}))
  }

  //state trzymający dane w tablicy z obiektami utworzonymi przez allNewDice()

  const [dies, setDies] = useState(allNewDice)

  //mapowanie po tablicy dies w celu wyświetlenia przycisków (komponent Die) do gry na ekranie

  const btnsEl = dies.map(die => {
    return <Die 
              key={die.id} 
              id={die.id} 
              value={die.value} 
              isHeld={die.isHeld} 
              hold={hold}
            />
  })

  //funkcja losująca liczby i zliczająca ilość losowań

  function reRoll(){
    setRolls(prevRolls => prevRolls + 1)
    setDies( prevDies => prevDies.map(obj => {
      return obj.isHeld ? {...obj} : {...obj, value: Math.floor(Math.random()* 6 + 1)}
    }))
  }

  //funkcja obsługująca kliknięcie wybranego przycisku, kliknięcie zmienia właściwość isHeld danego obiektu z tablicy dies

  function hold(id){
    setDies( prevDies => prevDies.map( obj => {
      return obj.id === id ? {...obj, isHeld: !obj.isHeld} : {...obj}
    }))
  }

  //zmiennna sprawdzająca czy gra została zakończona

  const isGameOver = dies.every(obj => obj.isHeld) && dies.every(obj => obj.value === dies[0].value)

  //funkcja obsługująca rozpoczęcie nowej gry

  function newGame(){
    setDies(allNewDice)
    setRolls(0)
  }

  //state trzymający info dot. ilości wykonanych rollów podczas gry
  
  const [rolls, setRolls] = useState(0)

  return (
    <main>
      <Header />

        <section className="btns-section">
          {btnsEl}
        </section>
      
      <button 
        className="roll-btn" 
        onClick={isGameOver ? newGame : reRoll}
        >
          {isGameOver ? 'New Game' : 'ROLL'}
      </button>

      <h2 className='rolls-counter'>{isGameOver? `Your rolls score is: ${rolls}` : `Roll counter: ${rolls}`}</h2>

    {isGameOver && <Confetti />}
    </main>
  )
}

export default App
