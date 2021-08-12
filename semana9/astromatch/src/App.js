import React, { useState, useEffect } from 'react'
import { HomePage } from './pages/HomePage/HomePage'
import { MatchesPage } from './pages/MatchesPage.js/MatchesPage'


const App = () => {
  const [telaAtual, setTelaAtual] = useState('HomePage')
  
 const escolherTela = () => {
    switch (telaAtual){
      case 'HomePage':
        return <HomePage/>
      case 'MatchesPage':
        return <MatchesPage/>
      default:
        return <HomePage />
    }
  }

  const irParaHome = () => {
    setTelaAtual('HomePage')
  }
  const irParaMatches = () => {
    setTelaAtual('MatchesPage')
  }


  return (
    <div>
      Astromatch
      {escolherTela()}
      <button onClick={irParaHome}>Ir para Home</button>
      <button onClick={irParaMatches}>Ir para match</button>
    </div>
  )
}

export default App