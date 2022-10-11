import './styles/main.css'
import logoImg from './assets/Logo-nlw-esports.svg'
import GameBanner from './components/GameBanner'

import { useEffect, useState } from 'react'
import ModalForm from './components/forms/ModalForm'
import axios from 'axios'
//JSX => JavaScript + XML (HTML)
//Components and props

export interface Games {
  bannerURL: string;
  id: string;
  title: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Games[]>([])

  useEffect(() => {
    axios('http://localhost:3333/games')
    .then(response => setGames(response.data))
  }, [])

  return(
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt=""></img>
      <h1 className="text-7xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient text-transparent bg-clip-text">duo</span> está aqui.
      </h1>
      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => {
          return(
            <GameBanner 
            key={game.id}
            bannerUrl={game.bannerURL} 
            title={game.title} 
            adsCount={game._count.ads}
            />
          )
        })}
      </div>
      <ModalForm data={games}/>
    </div>
  )
}

export default App
