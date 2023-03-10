import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import ReduxStore from "../store/ReduxState"
import { Provider } from 'react-redux'
import MobileNav from '@/components/MobileNav'

export default function App({ Component, pageProps }: AppProps) {


  return (
    <ChakraProvider>
      <Provider store={ReduxStore}>

        <div className='mobNav'>
          <MobileNav />
        </div>

        <div className='mobNavDIsappear'>
          <Navbar />
        </div>

        <Component {...pageProps} />
      </Provider>

    </ChakraProvider>
  )
}
