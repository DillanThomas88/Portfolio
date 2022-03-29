
import './output.css'
import React, { useEffect, useState } from 'react';
import Icon from './svg';



function App() {

  const [isDark, setisDark] = useState(false)
  const [style, setStyle] = useState('')
  const [navbar, setNavbar] = useState(false)
  const [navStyle, setNavStyle] = useState('')

  useEffect(() => {
    if (isDark === true) {
      setStyle({
        style: true,
        main: 'text-white bg-neutral-900',
        alt: 'text-neutral-700 bg-white',
        text: 'text-white',
        modal: 'border-b border-neutral-600',
        wash: 'bg-neutral-800',
      })
    } else {
      setStyle({
        style: true,
        main: 'text-neutral-900 bg-white',
        alt: 'text-white bg-neutral-900',
        text: 'text-neutral-900',
        modal: 'border-b border-neutral-400',
        wash: 'bg-neutral-200'
      })
    }
  }, [isDark])


  const toggleNavbar = () => {
    setNavbar(!navbar)
    if(!navbar){
      setNavStyle('animate-openNav')
    } else {
      setNavStyle('animate-closeNav')
    }
  }

  return (
    <div style={{ height: window.innerHeight, width: window.innerWidth }} className={style.main}>
      <header className="App-header z-50 fixed w-full font-default ">

        {/* <div className='hidden md:block uppercase '>
          <div className='font-normal'>Dillan T. Mansor</div>
          <ul className='flex w-full justify-between'>
            <li>About</li>
            <li>Projects</li>
            <li>contact</li>
          </ul>
        </div> */}

        {renderNavbar()}
      </header>
      <main className="flex flex-col items-center pt-40">
        heyyy
      </main>
      <footer>

      </footer>

    </div>
  );



  function renderNavbar() {
    let overlay = 'hidden'
    let anim = ('')
    if(navbar === true) {
      overlay = 'animate-fadeIn'
      anim = 'animate-openNav'
    }
    return (
      <div className={` ${style.main} md:hidden relative h-12 w-full flex justify-between items-center py-2`}>

        <Icon title={'email'} classes={' h-full ml-2'} />
        
        <div className='uppercase'>
          Portfolio
        </div>

        <div className='h-full'
          onClick={toggleNavbar}>
          <Icon title={'menu'} classes={' h-full mr-2 pointer-events-none'} />
        </div>

        <div onClick={toggleNavbar}
         className={`${overlay} fixed top-0 w-full h-full -z-20 ${style.wash} opacity-80`}></div>

        <div style={{transform: 'translateY(-2.5rem)'}} className={`${style.main} navbar -z-10 ${anim} absolute w-full font-medium`}>
          <ul className={`${style.modal}  w-full text-center uppercase space-y-3 py-4`}>
            <li>About</li>
            <li>Projects</li>
            <li>contact</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
