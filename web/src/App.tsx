import './styles/main.css'
import logoImg from './assets/Logo-nlw-esports.svg'
import GameBanner from './components/GameBanner'
import CreateAdBanner from './components/CreateAdBanner'
//JSX => JavaScript + XML (HTML)
//Components and props

function App() {
  return(
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt=""></img>
      <h1 className="text-7xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient text-transparent bg-clip-text">duo</span> está aqui.
      </h1>
      <div className='grid grid-cols-6 gap-6 mt-16'>
        <GameBanner bannerUrl="../../public/image-1.png" title="League of legends" adsCount={3}/>
      </div>
      <CreateAdBanner/>
    </div>
  )
}

export default App
