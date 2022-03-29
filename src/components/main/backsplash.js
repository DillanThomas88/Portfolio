function Backsplash() {
    return ( 
        <div className="absolute w-screen h-screen">

          <div className='-z-10 absolute py-4 w-3/6 h-2/6 bg-neutral-400 opacity-10 top-72'></div>
          {/* <div className='-z-10 absolute py-4 w-1/6 h-4/6 bg-neutral-400 opacity-10 top-52 left-72'></div> */}
          <div className='-z-10 absolute py-4 w-5/6 h-20 bg-neutral-400 opacity-10 top-20 -left-60'></div>
        </div>

    );
}

export default Backsplash;