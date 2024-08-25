'use client'
import { useCountryStore } from '@/store/countryStore'
import { url } from '@/utlities/constant'
import { QueryClient, useQuery } from '@tanstack/react-query'
import { count } from 'console'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
  const queryClient = new QueryClient()
  const pathName = usePathname().replace(/_/g, " ")
  const [isLoading, setIsLoading] = useState(true)
  // const { country, update } = useCountryStore((s) => s)
  console.log(pathName)
  const country =  useQuery({
    queryKey: ['country'],
    queryFn: async () => {
        const response = await fetch(url + "name" + pathName + '?fullText=true')
        console.log(response)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return await response.json().then
    },
  })

  useEffect(() => {
    if(country.isSuccess) 
      setIsLoading(false)
    if(country.error){
      console.log(country.error.message)
    }
  }, [country])

  return (
    <div>
      <div>
        <div>
          back
        </div>
      </div>
      {isLoading == false ? <div>
        <div>
          <img src={country.flags.svg} />
        </div>
        <div>
          <p>
            {/* {country.names.common} */}
          </p>
        </div>
      </div> : <></>}
    </div>
  )
}

export default page