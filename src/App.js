
import './output.css'
import React, { useEffect, useState } from 'react';
import Icon from './svg';
import Avatar from './images/avatar.JPG'



function App() {

  const [isDark, setisDark] = useState(false)
  const [style, setStyle] = useState('')
  const [navbar, setNavbar] = useState(false)
  const [navStyle, setNavStyle] = useState('')
  const [mode, setMode] = useState(() => {
    if (isDark) {
      return 'animate-dark'
    } else {
      return 'animate-light'
    }
  })

  useEffect(() => {
    if (isDark === true) {
      setStyle({
        style: true,
        main: 'text-white bg-neutral-900 lg:text-sm',
        alt: 'text-neutral-700 bg-white',
        text: 'text-white',
        modal: 'border-b border-neutral-500',
        border: 'border border-white',
        wash: 'bg-black',
        pop: 'bg-emerald-500',
      })
      setMode('animate-light')
      document.body.style.background = 'bg-neutral-900'

    } else {
      setStyle({
        style: true,
        main: 'text-neutral-700 bg-white lg:text-sm',
        alt: 'text-white bg-neutral-900',
        text: 'text-neutral-800',
        modal: 'border-b border-neutral-400',
        border: 'border border-neutral-500',
        wash: 'bg-black',
        pop: 'bg-orange-300 text-neutral-900',
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

  const handleNavigation = (e) => {
    let el = e.target.getAttribute('id')
    console.log(el);
  }
  return (
    <div style={{ height: window.innerHeight, width: window.innerWidth }} className={`${style.main} overflow-x-none overflow-y-none flex justify-center items-start`}>
      <header className="App-header lg:w-4/6 z-50 fixed w-full font-default  lg:py-2 ">
        <div className='hidden md:block uppercase lg:flex lg:justify-between lg:items-center '>
          <div className='h-full w-content'>Dillan Thomas' <span className='font-semibold'>Portfolio</span></div>
          <ul onClick={(e) => handleNavigation(e)} className='flex text-center'>
            <li id='about' className='cursor-pointer hover:scale-110 hover:font-semibold w-20'>About</li>
            <li id='projects' className='cursor-pointer hover:scale-110 hover:font-semibold w-24'>Projects</li>
            <li id='contact' className='cursor-pointer hover:scale-110 hover:font-semibold w-24'>contact</li>
          </ul>
        </div>

        {renderNavbar()}
      </header>

      <main className=" flex flex-col items-center pt-12 w-full">
        <div className='h-[36rem] w-full p-4 flex'>
          <img src={Avatar} alt='avatar'
            className={`${style.border} h-20 rounded-sm border`}>
          </img>
          <div className='ml-2 text-sm text-center'>
            <ul className='my-2'>
              <li className='font-semibold'> Full Stack Developer | Software Engineer | UI/UX Design</li>
              <li className='mt-2'>Oceanside, CA United States</li>
            </ul>
          </div>
        </div>
        <div className={`text-white h-[36rem] w-full ${style.pop}`}>
          hey
        </div>
        <div className={`text-white h-[36rem] w-full bg-neutral-900`}>
          hey
        </div>



        {themeToggle()}
      </main>
      <footer>

      </footer>

    </div>
  );



  function themeToggle() {
    return <div onClick={() => toggleDarkmode()}
      className={`${style.text} ${mode} fixed -bottom-[3rem] -right-[3rem] h-[6rem] w-[6rem] flex cursor-pointer`}>
      <div className='pointer-events-none flex flex-wrap w-full h-full justify-between items-between '>
        <div className='w-[6rem] h-[3rem] flex justify-start items-start '>

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
          <ul onClick={(e) => handleNavigation(e)}
            className={`${style.modal}  w-full text-center uppercase space-y-3 py-4`}>
            <li id='about' className='w-full'>About</li>
            <li id='projects' className='w-full'>Projects</li>
            <li id='contact' className='w-full'>contact</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
