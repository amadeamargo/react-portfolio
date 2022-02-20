import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouse, faFutbol, faNewspaper, faTemperatureHalf } from '@fortawesome/free-solid-svg-icons';
import Home from './components/home/Home'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'



function App() {
  return (
    <>
      <nav>
        <NavLink to='/'> Home </NavLink>
        <NavLink to='/about'> About </NavLink>
        <NavLink to='/portfolio'> Portfolio </NavLink>
        <NavLink to='/contact'> Contact </NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
