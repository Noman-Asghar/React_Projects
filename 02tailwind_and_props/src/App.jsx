import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import logoImg from "./assets/expert-img.jpg"

function App() {

 const links = {
         link_1: "Home",
        link_2: "About",
        link_3 : "Conttact",
        link_4 : "Blog"

    }  

  return (
    <div>
      <Navbar  links={links} username="NOMAN"/>
     <Home  name="NOMAN ASGHAR"/>
      <Footer image={logoImg}/>
    </div>
  )
}

export default App
