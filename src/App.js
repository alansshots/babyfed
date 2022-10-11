import './App.css';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion"


import Navbar from './components/Navbar';
import About from './components/About';
import Steps from './components/Steps';
import Register from './components/Register';
import Footer from './components/Footer';

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 3,
      y: mousePosition.y - 3,
      background: '#ffde59',
      mixBlendMode: 'difference',
      // color:'#000'
    },
  }

  // function is_touch_enabled() {
  //   return ( 'ontouchstart' in window ) ||
  //          ( navigator.maxTouchPoints > 0 ) ||
  //          ( navigator.msMaxTouchPoints > 0 );
  // }

  // if( is_touch_enabled() ) {
  //   let cursor = document.querySelector('.cursor')
  //   cursor.style.display = "none"; 
  // }
  // else {
  //   cursor.style.display = "block"
  // }

  return (
    <div className="App">
      <motion.div
      variants={variants}
      animate="default"
      className='cursor pointer-events-none bg-gray-900 w-[32px] h-[32px] rounded-full z-50 fixed top-0 left-0'></motion.div>
      <Navbar/>
      <About/>
      <Steps/>
      <Register/>
      <Footer/>
    </div>
  );
}

export default App;
