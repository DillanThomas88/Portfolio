

function Navbar() {
  return (
    <div className="navbar cursor-default">
      <header className="flex justify-between  py-2 text-sm font-thin mx-4">
        <div className='w-2/3'>Dillan Thomas</div>
        <ul className="w-1/3 flex justify-between items-end">
            <li className="">Home</li>
            <li className="">About</li>
            <li className="">Projects</li>
            <li className="">Connect</li>
        </ul>

      </header>
    </div>
  );
}

export default Navbar;