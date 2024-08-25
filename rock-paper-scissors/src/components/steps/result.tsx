import { memo, useEffect, useState } from 'react'
import TileVariant from '../tileVariant'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { change } from '../../reducers/tileSlice'
import { decrement, increment } from '../../reducers/scoreSlice'
import { getRandomNumber, userWins } from '../../utility/gameLogic'

const Result = memo(() => {
    const userSelected = useSelector((state: RootState) => state.tile.userSelected)
    const houseSelected = useSelector((state: RootState) => state.tile.houseSelected)
    const [ result, setResult] = useState('');
    const dispatch = useDispatch();
    console.log('render result page')
    useEffect( () =>{ 
        console.log('hit');
        getRandomNumber().then( (value) =>{
            dispatch(change({ houseSelected: value }));
            userWins(userSelected, value).then( (value) =>{
                if(value==1){
                    setResult("YOU WIN");
                    dispatch(increment());
                }else if(value == 0){
                    setResult("DRAW");
                }else{
                    setResult("YOU LOSE");
                    dispatch(decrement());
                }
            })
        });
    },[])

    return (
            <div className=' mob:w-[90%] h-full flex flex-col justify-center items-center text-white box-content '>
                <div className=' flex relative justify-between items-center mob:w-[90%] tab:w-[80%] -mt-[132px] tab:m-auto'>
                { result.length !=0 && <div className=' flex flex-col absolute left-[calc(50%_-_100px)] mob:max-tab:top-[120%] w-[200px] items-center justify-center gap-5 '>
                        <p className=' text-[3em] font-bold'>{result}</p>
                        <div onClick={() => dispatch(change({userSelected:0, houseSelected:0}))} className='z-50 cursor-pointer text-[#7687d0] font-bold bg-white px-6 py-2 rounded-lg '>PLAY AGAIN</div>
                        </div>}
                    <div className=' z-10 relative '>
                        <div className=' flex flex-col justify-center items-center gap-5 z-0'>
                            <p>YOU PICKED</p>
                            <TileVariant id={userSelected} size='size-[140px] tab:size-[240px]' won = { result === 'YOU WIN' ? true : false}/>
                        </div>
                    </div>
                    <div className=' z-10 relative self-start '>   
                        <div className=' flex flex-col items-center gap-5 z-0'>
                            <p>THE HOUSE PICKED</p>
                            <TileVariant id={houseSelected} size='size-[140px] tab:size-[240px]' won = { result === 'YOU LOSE' ? true : false}/>
                            <div className=' absolute -z-50 flex top-10 items-center size-[140px] tab:size-[240px] justify-center'>
                              { !houseSelected && <div className=' relative  bg-[#3b4363] size-[100px] tab:size-[140px] rounded-full' />}
                             
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        
    )
});

export default Result