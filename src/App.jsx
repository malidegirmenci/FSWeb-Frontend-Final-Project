import { useEffect } from 'react'
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { fetchAnother } from './store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { RiseLoader } from "react-spinners";
function App() {
  const data = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAnother());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='app'>
      {loading && <div className='h-screen flex justify-center items-center bg-[#4731D3]'><RiseLoader color="#cbf281" /></div>}
      {!loading && data &&
        <>
          <Hero />
          <Skills />
          <Profile />
          <Projects />
          <Footer data={data}/>
        </>}
    </div>
  )
}

export default App
