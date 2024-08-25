import logo from '../assets/logo-bonus.svg'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
const ScoreBoard = () => {
  const score = useSelector((state:RootState) => state.score.value || 0)
  return (
    <div className='flex w-[80%] justify-between h-[140px] border-2 border-white rounded p-4'>
    <img src={logo} alt="Logo" className=' object-contain' />
    <div className='flex flex-col font-bold items-center justify-center text-center aspect-square text-blue-400 bg-white text-[hsl(229, 64%, 46%)] rounded p-4 w-fit_content'>
        <p>SCORE</p>
        <p className=' text-[#7687d0] text-[3em]'>{score}</p>
    </div>
</div>

  )
}

export default ScoreBoard