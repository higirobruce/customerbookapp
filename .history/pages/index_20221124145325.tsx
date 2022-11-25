import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../layout/sidebar'
import MainScreen from '../layout/mainScreen'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      
     <Sidebar/>
     <MainScreen/>

    </div>
  )
}

export default Home
