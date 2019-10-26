import React from 'react';

import logo from '../static/logo.png'

export const Menu = () => {
  return (
    <nav>
      <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
        <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-red-400" href="#">About</a></li>
      </ul>
    </nav>
  )
}

const NavBar = () => {
  return (
    <React.Fragment>
      <header className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2 shadow-md">
        <div className="flex-1 flex justify-between items-center">
          <a href="#">
            <img src={logo}></img>
          </a>
        </div>
        <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
          <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </label>
        <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
          <Menu />
        </div>
      </header>
    </React.Fragment>
  )
}

export default NavBar;
