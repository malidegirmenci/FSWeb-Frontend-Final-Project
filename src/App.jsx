import './App.css'
import Hero from './components/Hero'
import Skills from './components/Skills'

function App() {
  return (
    <div className='flex flex-col gap-10'>
      <Hero/>
      <Skills/>
    </div>
  )
}

export default App
