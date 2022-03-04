import { NavLink } from 'react-router-dom'
import './header.css'

export default function Header() {
    return (
        <nav className="navlinks">
            <NavLink to='/'> Home </NavLink>
            <NavLink to='/about'> About Me</NavLink>
            <NavLink to='/portfolio'> Portfolio </NavLink>
            <NavLink to='/contact'> Contact </NavLink>
        </nav>
    )
}

