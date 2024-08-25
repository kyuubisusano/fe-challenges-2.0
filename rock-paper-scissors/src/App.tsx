import './App.css'
import ScoreBoard from './components/scoreBoard'
import Rules from './components/rule'
import GameBoard from './components/gameBoard'
import Modal from './components/modal'

function App() {

  return (
    <div className=' size-full overflow-hidden flex items-center  flex-col'>
      <div className=' mt-5 mb-[50px] tab:mb-[10px] w-full flex items-center justify-center'> <ScoreBoard /> </div>
      <GameBoard />
      <Rules />
      <Modal />
    </div>
  )
}

export default App
