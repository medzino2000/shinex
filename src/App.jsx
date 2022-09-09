import React, { useEffect, useState } from 'react'
import Header from './components/about/header/Header'
import About from "./components/about/About";
import Services from "./components/about/services/Services";
import Contact from "./components/about/contact/Contact";
import Footer from "./components/about/footer/Footer";
import './App.css'
import db from "./data.json";
import CopyRight from "./components/copyright/CopyRight";



function useWindowsize() {
  const [size, setsize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setsize([window.innerHeight, window.innerWidth])
    }
    window.addEventListener('resize', handleResize)
    
  }, [])
  return size
}


function App() {
  
  const[width] = useWindowsize();
  
  useEffect (() => {
    if (window.innerWidth < 870 && engcpt === 0) {
      document.getElementById('second').style.borderRadius = '0 0 0 16px'
    }
  })
  
  const [engcpt, setEngcpt] = useState(0);
  const [eng, setEng] = useState(true);

  return (
    <>
    <div id='lang_switcher_container' onClick={() =>{
      setEng(!eng)
      setEngcpt(engcpt + 1)
      }  }>
      <div className={eng ? 'second_lang' : 'first_lang'} src={eng ? db.lang_switch[0].eng_img : db.lang_switch[0].uae_img} alt="" ></div>
      {/* <img className='second_lang' src={eng ? db.lang_switch[0].uae_img : db.lang_switch[0].eng_img} alt="" /> */}
      <p>{eng ? "للعربية" : "to english"}</p>
      
    </div>
      <Header 
      lang={eng}
      />
      <About
      lang={eng}
      />
      <Services 
      screenWidth={width}
      lang={eng}
      />
      <Footer
      lang={eng}
      screenWidth={width}
      />
      <Contact
      lang={eng}
      />
      <CopyRight />
    </>
    
  )
}
export default App;