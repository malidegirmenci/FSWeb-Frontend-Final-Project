import './App.css'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Skills from './components/Skills'

function App() {
  return (
    <div className='flex flex-col gap-10'>
      <Hero/>
      <Skills/>
      <Profile/>
    </div>
  )
}

export default App
