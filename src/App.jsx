import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import NotFound from './views/NotFound'
import Contact from './views/Contact'


function App() {

  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/contact' element={<Contact />} />
          <Route path ='*' element={<NotFound />}/>
        </Routes>
      </ BrowserRouter>
    
  )
}

export default App


