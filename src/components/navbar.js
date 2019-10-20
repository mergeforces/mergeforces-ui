import React from 'react';

import logo from '../static/logo.png'

export const Menu = () => {
  return (
    <nav>
      <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
        <li><a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="#">About</a></li>
        <li><a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="#">Meetups</a></li>
        <li><a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="#">Login</a></li>
        <li><a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="#">Register</a></li>
      </ul>
    </nav>
  )
}

const NavBar = () => {
  return (
    <React.Fragment>
      <header class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2 bg-red-400 shadow-md">
        <div class="flex-1 flex justify-between items-center">
          <a href="#">
            <img src={logo}></img>
          </a>
        </div>
        <label for="menu-toggle" class="pointer-cursor lg:hidden block">
          <svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </label>
        <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
          <Menu />
        </div>
      </header>
    </React.Fragment >
  )
}

export default NavBar;
