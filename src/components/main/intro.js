import { ReactComponent as Join } from '../../svg/buttons/join.svg'
import { ReactComponent as ReactLogo } from '../../svg/logo/react.svg'

function Intro() {
      return (
            <div className=' rounded-sm grid content-center justify-center'>
                  <div>
                        <p className="text-xl text-center font-thin opacity-70">Dillan Thomas' Portfolio</p>
                        <p className="font-thin text-6xl text-center pb-1 "> Welcome,</p>
                        <p className="font-thin text-2xl text-center opacity-70"> I love to build beautiful things.</p>

                        <div className='flex flex-col items-center py-8 text-center'>
                              <div className='text-center'>Using React.js</div>
                              <ReactLogo className=" h-20 w-20 text-blue-400" />
                        </div>
                        <p className="font-thin text-md text-center text-justify">
                              My name is Dillan Thomas and I'm an aspiring Software Engineer. All my life I've been fascinated by all the brilliant designs made by Engineers. Learning Full-Stack Web Development is just the first step in my Journey to becoming The person I've always wanted to be.
                        </p>
                        <div className='flex justify-center'>
                              <div className=" mt-8 uppercase font-semibold flex justify-center items-center py-2 px-4 rounded-md bg-neutral-700 text-white text-lg  h-content hover:cursor-pointer hover:bg-blue-500">
                                    <Join className='h-3 w-3 rotate-90 mr-2' />
                                    Contact
                              </div>
                        </div>

                  </div>


            </div>

      );
}

export default Intro;