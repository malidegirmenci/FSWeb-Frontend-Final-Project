import './App.css'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <div className='app'>
      <Hero/>
      <Skills/>
      <Profile/>
      <Projects/>
    </div>
  )
}

export default App
