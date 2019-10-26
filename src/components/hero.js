import React from 'react';

import heroImage from '../static/hero.jpg';

const Hero = () => {
  const background = {
    backgroundImage: `url(${heroImage})`,
    width: '100%',
    height: '500px',
  }

  return (
    <React.Fragment>
      <div className="bg-cover" style={background}>
        <div className="container px-4 mx-auto pt-24 bg-local">
          <div className="flex-1 text-center">
            <h1 className="my-4 text-5xl font-bold leading-tight">Main Hero Message to sell yourself!</h1>
            <p className="leading-normal text-2xl mb-8">Sub-hero message, not too long and not too short. Make it just right!</p>
            <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Sign Up</button>
          </div>
        </div>
      </div>
    </React.Fragment >
  )
}

export default Hero;
