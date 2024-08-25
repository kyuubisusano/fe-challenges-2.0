import rules from '../assets/image-rules-bonus.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import closeIcon from '../assets/icon-close.svg'
import { switchDisplay } from '../reducers/modalSlice'
const Modal = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector((state : RootState) => state.modal.isOpen)
  return (
    <div className= {`absolute ${isOpen ? 'block' : ' hidden '} cursor-pointer size-full bg-black/10 z-50 flex justify-center items-center`}>
        <div className='mob:max-tab:relative mob:max-tab:size-full mob:max-tab:items-center mob:max-tab:justify-center mob:max-tab:flex mob:p-6  bg-white tab:rounded-lg tab:size-max p-4 '>
            <div className=' flex justify-between mob:max-tab:absolute mob:max-tab:flex-col mob:max-tab:self-center mob:max-tab:h-[95%] items-center'>
            <p className=' text-[#3b4363] font-bold text-[2rem]'>RULES</p>
            <div onClick={() => dispatch(switchDisplay())}> <img src={closeIcon} alt="icon"/></div>
            </div>
            <img src={rules} alt='rules' className=' cursor-pointer'/>  
        </div>
    </div>
  )
}

export default Modal