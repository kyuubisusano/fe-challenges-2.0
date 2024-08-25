import Tile from '../utility/tile';
import rockIcon from '../assets/icon-rock.svg'
import paperIcon from '../assets/icon-paper.svg'
import scissorsIcon from '../assets/icon-scissors.svg'
import lizardIcon from '../assets/icon-lizard.svg'
import spockIcon from '../assets/icon-spock.svg'

interface ComponentProps {
    id: number;
    size?: string;
    won?: boolean
}

const TileVariant = ({ id, size, won }: ComponentProps) => {
    if (id === 3)
        return <Tile borderColor='hsl(349, 71%, 52%),hsl(349, 70%, 56%)' size={size ? size : '100px'} imageSrc={rockIcon} type={3} won={won}/>
    if (id === 2)
        return <Tile borderColor='hsl(230, 89%, 62%),hsl(230, 89%, 65%)' size={size ? size : '100px'} imageSrc={paperIcon} type={2} won={won}/>
    if (id === 5)
        return <Tile borderColor='hsl(189, 59%, 53%),hsl(189, 58%, 57%)' size={size ? size : '100px'} imageSrc={spockIcon} type={5} won={won}/>
    if (id === 4)
        return <Tile borderColor='hsl(261, 73%, 60%),hsl(261, 72%, 63%)' size={size ? size : '100px'} imageSrc={lizardIcon} type={4} won={won}/>
    if (id === 1)
        return <Tile borderColor='hsl(39, 89%, 49%),hsl(40, 84%, 53%)' size={size ? size : '100px'} imageSrc={scissorsIcon} type={1} won={won}/>
    else
        return <></>    
}

export default TileVariant;
