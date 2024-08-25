// import {
    
// } from '@/store/store'
// import { ReactNode, useContext, useRef } from 'react'
// import createContext from 'zustand/context'
// // import { createStore } from '@/store/store'

// export type StoreApi = ReturnType<typeof Store>

// export const StoreContext = createContext<StoreApi<Store> | undefined>()

  
// export interface StoreProviderProps {
//     children: ReactNode
//   }
  
//   export const CounterStoreProvider = ({
//     children,
//   }: StoreProviderProps) => {
//     const storeRef = useRef<StoreApi>()
//     if (!storeRef.current) {
//       storeRef.current = Store()
//     }
  
//     return (
//       <StoreContext.Provider value={storeRef.current} >
//         {children}  
//       </StoreContext.Provider>
//     )
//   }
  
//   export const useCounterStore = <T,>(
//     selector: (store: Store) => T,
//   ): T => {
//     const counterStoreContext = useContext(CounterStoreContext)
  
//     if (!counterStoreContext) {
//       throw new Error(`useCounterStore must be used within CounterStoreProvider`)
//     }
  
//     return useStore(counterStoreContext, selector)
//   }