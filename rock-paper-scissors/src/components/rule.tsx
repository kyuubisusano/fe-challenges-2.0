import React from 'react'
import { useDispatch } from 'react-redux'
import { switchDisplay } from '../reducers/modalSlice'

const Rules = () => {
    const dispatch = useDispatch()

    return (
       <div className=' w-full flex justify-center tab:justify-end p-4 '>
         <div onClick={() => dispatch(switchDisplay())} className=' border border-white rounded-lg px-6 w-fit text-white py-2 text-[1rem] cursor-pointer'>
            Rules
        </div>
       </div>
    )

    
}

export default Rules