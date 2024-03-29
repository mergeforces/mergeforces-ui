import React from 'react';
import { Link } from 'react-router-dom';

import heroImage from '../static/hero.jpg';

const Hero = () => {
  const background = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
    width: '100vw',
    height: '100vh',
    color: 'white'
  }

  return (
    <React.Fragment>
      <div className="bg-cover" style={background}>
        <div className="container px-4 mx-auto pt-24 bg-local">
          <div className="flex-1 text-center">
            <h1 className="my-4 text-5xl font-bold leading-tight">Get together with friends!</h1>
            <p className="leading-normal text-2xl mb-8">Create one-off events without a signup process.</p>
            <Link to='/create' className="mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Create Event</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Hero;
