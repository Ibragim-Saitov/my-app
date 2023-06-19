import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Skill from "./components/Skill";
import Wrapper from "./components/Wrapper";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
  return ( 
  <>
    <Header/>
    <Home/>
    <About/>
    <Portfolio/>
    <Skill/>
    <Wrapper/>
    <Testimonials/>
    <Blog/>
    <Work/>
    <Footer/>
  </>
  )
}

export default App;