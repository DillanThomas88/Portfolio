import Image from "../images"
import Icon from "../svg"

function Card({ props, css }) {
  return (<>
    <div className='w-full py-2'>
      <header className={`${css.text} uppercase text-2xl font-semibold mt-6 mb-1 `}>
        {props.name} | <span className='font-normal text-xl'>{props.type}</span>
      </header>
      <div className='relative h-content w-content grid content-center rounded-lg justify-center '>
        <div className='absolute p-4 z-10'>
          {/* <Icon title={'doc'} classes={`h-full w-8 pointer-events-none text-white`} /> */}

        </div>
        <div className='absolute top-0 rounded-lg w-full h-full grid content-center justify-center overflow-hidden '>
          <div className='absolute rounded-lg w-full h-full bg-black opacity-60'></div>
          <div className='absolute rounded-lg w-full h-28 bg-black opacity-70'></div>
          <div className={` text-white h-full w-full z-20 px-4 flex flex-col justify-between items-between`}>
            <p className='mb-10'>{props.desc}</p>
            <div className="w-full flex justify-center">
              <a href={props.link}
              target="_blank" rel="noopener noreferrer" 
              className="flex h-16">
                <Icon title={'link'} classes={'h-full'} />

              </a>
            </div>
          </div>
        </div>
        <Image title={props.name} classes={`${css.border} rounded-lg`} />
      </div>
    </div>

  </>)
}
export default Card