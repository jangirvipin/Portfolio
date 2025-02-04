import Navbar from "./Components/Navbar.tsx";
import Hero from "./Components/Hero.tsx"
import Hero2 from "./Components/Hero2.tsx";
import About from "./Components/About.tsx"
function App() {


  return (
    <>
      <div className='max-w-[1300px] mx-auto  '>
        <Navbar />
          <Hero />
          <Hero2 />
      </div>
        <div className='bg-gray-200'>
            <About/>
        </div>

    </>
  )
}

export default App

