
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {NavLink  } from 'react-router-dom';

function Nav() {

  const linkStyle = {
    margin: '15px',
    textDecoration: 'none',
    color: 'inherit'
  };

  return (
    <nav>
      <NavLink to="/" style={linkStyle}>Улюблений фільм</NavLink>
      <NavLink to="/personal" style={linkStyle}>Персональна сторінка</NavLink>
      <NavLink to="/time" style={linkStyle}>Годинник</NavLink>
      <NavLink to="/pet" style={linkStyle}>Домашній улюбленець</NavLink>
    </nav>
  );
}

export default Nav
