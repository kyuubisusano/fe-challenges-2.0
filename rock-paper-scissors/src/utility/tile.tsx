import { useDispatch } from 'react-redux';
import { change } from '../reducers/tileSlice';
import './style/tile.css'

interface ComponentProps {
  borderColor: string;
  imageSrc: string;
  size?: string;
  type: number,
  won?: boolean
}
declare module 'react' {
  interface CSSProperties {
    '--bg-color'?: string;
    '--bg-shadow'?: string;
    '--size'?: string;
  }
}


const Tile = ({ borderColor, imageSrc, size, type, won }: ComponentProps) => {
  const borderColorArr = borderColor.match(/\d+/g)?.map(Number) ?? [];
  const shadowColor = ` ${borderColorArr[0]},${borderColorArr[1]+20}%,${borderColorArr[2]-15}%`;
  const dispatch = useDispatch();

  return (
    <div onClick={()=>{ dispatch(change({ userSelected: type }));
    console.log('tile clicked');
  }} style={{ '--bg-color': ` linear-gradient(${borderColor})`, '--bg-shadow': `hsl(${shadowColor})`}} className={` tile cursor-pointer  ${size}`}>
      <div className=' tile-inner '>
        <img src={imageSrc} alt="icon" />
      </div>
      { won && <div style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.10) 39%, rgba(255, 255, 255, 0.05) 36%, rgba(255, 255, 255, 0.05) 56%, rgba(255, 255, 255, 0.02) 44%, rgba(255, 255, 255, 0.02) 66%)'}} className=' absolute size-[400px] tab:size-[600px] -z-[100] rounded-full ' /> }
    </div>
  )
}

export default Tile