import React from 'react'
import Hero from './component/Hero'
import MarketPlace from './component/MarketPlace'
import HowItWorked from './component/HowItWorked'
import ScreeningProcess from './component/ScreeningProcess'
import Journey from './component/Journey'
import FAQ from './component/FAQ'
import Footer from './component/Footer'
import Board from './component/Board'
import { ThemeProvider } from "@material-tailwind/react";
import ResponsiveNav from './component/ResponsiveNav'




const App = () => {
  return (
      <ThemeProvider>
        <div className='bg-white h-fit overflow-hidden '>
          <ResponsiveNav />
          <Hero/>
          <div className=' h-fit  '>
            <MarketPlace/>
          </div>
          <HowItWorked/>
          <ScreeningProcess/>
          <Journey />
          <Board/>
          <FAQ />
          <Footer/>
        </div>

      </ThemeProvider>
  )
}

export default App