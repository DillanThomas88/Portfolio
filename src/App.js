
import './output.css'
import React, { useEffect, useState } from 'react';
import Icon from './svg';
import Image from './images';
import Resume from './documents/resume.pdf'
import Card from './components/card';
import Projects from './components/projects.json'



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
        alttext: 'text-neutral-800',
        modal: 'border-b border-neutral-500',
        border: 'border-b border-neutral-600',
        wash: 'bg-black',
        pop: 'bg-emerald-500',
        poptext: 'text-emerald-500'
      })
      setMode('animate-light')
      document.body.style.background = 'bg-neutral-900'

    } else {
      setStyle({
        style: true,
        main: 'text-neutral-700 bg-white lg:text-sm',
        alt: 'text-white bg-neutral-700',
        text: 'text-neutral-800',
        alttext: 'text-white',
        modal: 'border-b border-neutral-400',
        border: 'border-b border-neutral-300',
        wash: 'bg-black',
        pop: 'bg-orange-300 text-neutral-900',
        poptext: 'text-orange-300'
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

        {renderAboutMe()}
        {renderProjects()}


        <div
          className={`${style.main} w-full h-[30rem] flex flex-col items-center justify-center`}>

          <div className={`${style.border} w-4/6 my-4`}></div>
          <div className='transition ease-in-out hover:scale-110 flex flex-col justify-center'
          onClick={() => window.location = 'mailto:dillanthomas88@gmail.com'}>

            <div className=' text-2xl font-semibold mb-2 text-center pointer-events-none'>Contact Me</div>
            <div className=' flex justify-center items-center animate-wiggle pointer-events-none'>
              <Icon title={'send'} classes={`w-1/6  pointer-events-none`} />
            </div>
          </div>
          <div className={`${style.border} w-4/6 my-4`}></div>
        </div>

        {themeToggle()}

      </main >
      <footer>

      </footer>

    </div >
  );



  function renderProjects() {

    return <div className={`${style.pop} w-full p-4 pb-14 `}>
      <div className='flex w-full'>
        <div className='ml-2 text-sm text-center'>
        </div>
      </div>
      <div className={` rounded-sm h-content p-4 my-4`}>
        <header className={`${style.alttext} text-3xl font-medium flex justify-end`}>Projects</header>

        {Projects.map((data, index) => {
          return <Card props={data} css={style} key={index} />;
        })}

      </div>
    </div>;
  }

  function renderAboutMe() {
    return <div className={`${style.main} w-full p-4 mt-4 `}>
      <div className='flex w-full'>
        <Image title={'avatar'} classes={` h-20 rounded-sm`} />
        <div className='ml-2 text-sm text-center'>
          <ul className='my-2'>
            <li className='font-semibold'> Full Stack Developer | Software Engineer | UI/UX Design</li>
            <li className='mt-2'>Oceanside, CA United States</li>
          </ul>
          <div className='border-b border-neutral-500 -mt-1 mx-5'></div>
        </div>
      </div>
      <div className={` rounded-sm h-content p-4 my-6`}>
        <header className='text-3xl font-medium'>About Me</header>
        <p className='indent-5 text-md my-5'>
          Trained Full Stack Developer for modern applications and frameworks. Currently Junior / Entry level experience with front-end and back-end environments. My time is spent implementing new frameworks and applying skills learned from mentors or Snowboarding.
        </p>
        <p className='indent-5 text-md'>
          Here you'll find all the projects I'd like you to see. If you'd like to collab on anything or would just like to connect, here are my other socials.
        </p>
        <div className='w-full flex justify-around items-center h-16 mt-6'>
          <a href={Resume} target="_blank" rel="noopener noreferrer" className={`ml-2 h-4/6 w-3/6 flex justify-center items-center uppercase text-lg font-medium hover:font-bold ${style.alt} rounded-md`}>
            Resume
            <Icon title={'doc'} classes={'ml-2 h-[1.1rem] '} />
          </a>
          <div className='w-3/6 h-full flex justify-around items-center pl-4'>
            <a href='https://github.com/DillanThomas88' target="_blank" rel="noopener noreferrer" className='h-4/6'>
              <Icon title={'github'} classes={' h-full '} />
            </a>
            <a href='https://www.linkedin.com/in/dillanthomasmansor/' target="_blank" rel="noopener noreferrer" className='h-4/6'>
              <Icon title={'linkedin'} classes={' h-full '} />
            </a>
          </div>
        </div>
      </div>
    </div>;
  }

  function themeToggle() {
    return <div onClick={() => toggleDarkmode()}
      className={`${style.main} fixed bottom-2 right-2 flex cursor-pointer rounded-full p-2 shadow-lg shadow-neutral-900`}>
      <div className='pointer-events-none flex flex-wrap w-full h-full justify-between items-between '>
        <div className='pointer-events-none flex justify-end items-end'>
          {isDark
            ? <Icon title={'dark'} classes={'h-8'} />
            : <Icon title={'light'} classes={'h-8'} />}
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
          className={`${overlay} fixed top-0 w-full h-full -z-20 ${style.wash}`}></div>

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
