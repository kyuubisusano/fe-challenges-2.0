'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  UseQueryResult,
} from '@tanstack/react-query'
import Search from "@/components/search";
import Filter from "@/components/filter";
import { url } from "@/utlities/constant";
import Card from "@/components/card";
import { useThemeStore } from "@/store/themeStore";
// import { useStore } from "zustand";
// import { ThemeState } from "@/store/store";


const queryClient = new QueryClient()
export default function Home() {

  const [ isLoading, setIsLoading ]= useState(true);
  const countries = useQuery({ queryKey: ['countries'],
    queryFn: async () => {
      const response = await fetch(url + "all")
      console.log(response)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return await response.json()
    },
   })


  useEffect(() => {
    if(countries.isSuccess) 
      setIsLoading(false)
      if(countries.data != undefined)
      console.log(countries.data['0'])
      console.log(isLoading)
    if(countries.error){
      console.log(countries.error.message)
    }
  }, [countries])

  return (
    <main className=" flex flex-col justify-center w-full px-10 min-h-screen" >

      <div className=" flex w-full justify-between py-10">
        <Search />
        <Filter />
      </div>

      <div className=" grid grid-flow-row justify-between content-between grid-cols-2 md:grid-cols-3 lg:grid-cols-4 size-full gap-5 md:gap-10">
        {isLoading === false ? countries.data.map((country: any , i: number)=>{
          // console.log(i)
          return (<Card key={i} data={country} />)
        }) : <></>}
      </div> 

    </main>
  );
}

