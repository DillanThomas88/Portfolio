
import './output.css'
import Navbar from './components/navbar';
import Footer from './components/footer'
import Main from './components/main/index';
import MobileNavbar from './components/mobileNavbar';


function App() {
  let size

  if(window.outerWidth <= 390 ){
    size = <MobileNavbar />
  } else {size = <Navbar />}
  

    return (
      <div className="h-screen px-8  grid content-between justify-center select-none  text-neutral-200 12pro:px-7">
        <header className="App-header ">
          {size}
        </header>
        <main className="flex flex-col items-center">
          <Main />
        </main>
        <footer>
          <Footer />
        </footer>
  
      </div>
    );
 

}

export default App;
