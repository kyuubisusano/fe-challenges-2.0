'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useCountryStore } from '@/store/countryStore'

const Card = ( {data} : any ) => {
  const [ isLoading, setIsLoading ]  = useState(true)
  const { update } = useCountryStore((s) =>s)
  const handleClick = ()=> {
    update(data)
  }
  useEffect( ()=>{
    if(data.population != undefined){
      setIsLoading(false)
      console.log(data.name.official)
      }
  },[data])

  return isLoading == false ? (
  <Link onClick={handleClick} href={`/${data.name.official.replace(/\s/g, "_")}`} className=' w-full'>
    <div className=' w-full dark:bg-[hsl(209,_23%,_22%)] rounded-md overflow-hidden cursor-pointer shadow-md'>
       <div className=' h-[150px] w-full'>
        <img src={data.flags.svg} className=' size-full object-cover' />
       </div>
       <div className=' dark:text-white p-4 text-sm flex flex-col gap-y-1'>
           <p className=' font-bold text-lg'>{data.name.common}</p>
           <p>Population: <span className='dark:text-[hsl(0,_0%,_52%)]'>{data.population}</span> </p>
           <p>Region: <span className='dark:text-[hsl(0,_0%,_52%)]'>{data.region}</span></p>
           <p>Capital: <span className='dark:text-[hsl(0,_0%,_52%)]'>{data.capital}</span></p>
       </div>
   </div>
    </Link>
 ) : (<></>)
}

export default Card

