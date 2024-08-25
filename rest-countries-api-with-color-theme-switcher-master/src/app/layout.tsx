'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { useThemeStore } from "@/store/themeStore";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: (val: any) => { return val },
      },
    },
  })

  // const toggleTheme = useMutation({
  //   mutationFn: (newTheme: any) => {
  //     return newTheme
  //   },
  // })

  // const theme: UseQueryResult<any, Error> = useQuery({ queryKey: ['theme'] })
  const { dark, toggle } = useThemeStore((state) => state)
  // const toggleTheme: Partial<ThemeState>  = useStore((state) => state.toggleTheme )
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      // document.body.classList.add('dark')
      // toggleTheme.mutate({ theme: 'dark' })
      toggle();
      console.log('hit')
    } else {
      // document.body.classList.remove('dark')
      // toggleTheme.mutate({ theme: 'light' })
      toggle()
    }
  }, [])

  useEffect(() => {

    if (dark != undefined && document != undefined) {
      // console.log(theme.data[0].theme)
      if (dark) {
        document.body.classList.add('dark')
      } else {
        document.body.classList.remove('dark')
      }
    }
  }, [dark])


  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body className="dark">
          <Header />
          <div className="bg-[hsl(0,_0%,_98%)] dark:bg-[hsl(207,_26%,_17%)] min-h-full h-fit ">
            {children}
          </div>
        </body>
      </html>
    </QueryClientProvider>

  );
}
