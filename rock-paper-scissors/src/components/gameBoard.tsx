
import { useSelector } from 'react-redux'
import Select from './steps/select'
import { RootState } from '../store'
import Result from './steps/result';

const GameBoard = () => {
  const userSelected = useSelector( (state:RootState) => state.tile.userSelected );
  console.log('in gameboard ',userSelected);
  return (
    <>
    { userSelected === 0 ? <Select /> : <Result /> }
    </>
  )
}

export default GameBoard