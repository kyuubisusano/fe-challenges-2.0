'use client'
import React from 'react'
import Image from 'next/image'
import { useMutation, useQuery, UseQueryResult } from '@tanstack/react-query'
import { useThemeStore } from '@/store/themeStore'

const Header = () => {

  const { dark, toggle } = useThemeStore((s) => s)

  const handleClick = () => {
    // console.log(theme)
    if (localStorage.theme == 'dark') {
      localStorage.removeItem('theme')
      toggle()
    }
    else {
      localStorage.theme = 'dark'
      toggle()
    }
  }
  return (
    <div className=' bg-[hsl(0,_0%,_100%)] text-black dark:text-[hsl(0,_0%,_100%)] dark:bg-[hsl(209,_23%,_22%)] w-full flex justify-between px-5 py-2 drop-shadow-sm'>
      <p>What in the world?</p>
      <button onClick={handleClick} className=' flex'>
        <Image src={dark != undefined && dark ? `/moon_dark.png` : `/moon_light.png`} width={20} height={20} alt='icon' />
        Dark Mode
      </button>
    </div>
  )
}

export default Header