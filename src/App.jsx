import React from 'react'
import AOS from 'aos'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

const App = () => {
  React.useEffect(() => {
    AOS.init(
      {
        duration: 700,
        easing: "ease-in-sine",
        offset:100,
      }
    );
  },[])
  return (
    <>
      <div className='overflow-hidden'l>
        <Navbar />
        <Hero />
      </div>
    </>
  )
}

export default App
