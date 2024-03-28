import './App.css'
import { About } from './components/About/about'
import { Contact } from './components/Contact/contact'
import { Exp } from './components/Exp/exp'
import { Footer } from './components/Footer/footer'
import { Header } from './components/Header/header'
import { Project } from './components/Project/project'

function App() {

  return (
    <>
    <Header/>
    <About/>
    <Exp/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
