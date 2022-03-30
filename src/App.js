
import './output.css'
import React, { useEffect, useState } from 'react';
import Icon from './svg';



function App() {

  const [isDark, setisDark] = useState(false)
  const [style, setStyle] = useState('')
  const [navbar, setNavbar] = useState(false)
  const [navStyle, setNavStyle] = useState('')
  const [mode, setMode] = useState(() => {
    if(isDark){
      return 'animate-dark'
    } else {
      return 'animate-light'
    }
  })

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
      setMode('animate-light')
      document.body.style.background = 'bg-neutral-900'
      
    } else {
      setStyle({
        style: true,
        main: 'text-neutral-800 bg-white',
        alt: 'text-white bg-neutral-900',
        text: 'text-neutral-800',
        modal: 'border-b border-neutral-400',
        wash: 'bg-neutral-200'
      })
      setMode('animate-dark')
      document.body.style.background = 'bg-white'
    }
  }, [isDark])


  const toggleNavbar = () => {
    setNavbar(!navbar)
    if (!navbar) {
      setNavStyle('animate-openNav')
    } else {
      setNavStyle('animate-closeNav')
    }
  }

  const toggleDarkmode = () => {
    setisDark(!isDark)
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
      
      <main className=" flex flex-col items-center pt-40">        
        {themeToggle()}
      </main>
      <footer>

      </footer>

    </div>
  );



  function themeToggle() {
    return <div onClick={() => toggleDarkmode()}
      className={`${style.text} ${mode} fixed -bottom-[3rem] -right-[3rem] h-[6rem] w-[6rem] flex`}>
      <div className='pointer-events-none flex flex-wrap w-full h-full justify-between items-between'>
        <div className='w-[6rem] h-[3rem] flex justify-start items-start'>

          <Icon title={'light'} classes={'h-8'} />
        </div>
        <div className='pointer-events-none w-[6rem] h-[3rem] flex justify-end items-end'>
          <Icon title={'dark'} classes={'h-8  rotate-180'} />
        </div>
      </div>
    </div>;
  }

  function renderNavbar() {
    let overlay = 'hidden'
    let anim = ('')

    if (navbar === true) {
      overlay = 'animate-fadeIn'
      anim = 'animate-openNav'
    }

    return (
      <div className={` ${style.main} md:hidden relative h-12 w-full flex justify-between items-center py-2`}>

        <Icon title={'email'} classes={`${style.text} h-full ml-2 pointer-events-none`} />

        <div className='uppercase'>
          Portfolio
        </div>

        <div className='h-full'
          onClick={toggleNavbar}>
          <Icon title={'menu'} classes={`${style.text} h-full mr-2 pointer-events-none`} />
        </div>

        <div onClick={toggleNavbar}
          className={`${overlay} fixed top-0 w-full h-full -z-20 ${style.wash} opacity-10`}></div>

        <div style={{ transform: 'translateY(-2.5rem)' }} className={`${style.main} navbar -z-10 ${anim} absolute w-full font-medium`}>
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
