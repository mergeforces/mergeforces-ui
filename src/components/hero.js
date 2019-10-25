import React from 'react';

import bg from '../static/hero.jpg';

const Hero = () => {
  const background = {
    backgroundImage: `url(${bg})`,
    width: '100%',
    height: '500px',
  }

  return (
    <React.Fragment>
      <div class="bg-cover" style={background}>
        <div className="container px-4 mx-auto pt-24 bg-local">
          <div class="flex-1 text-center">
            <h1 class="my-4 text-5xl font-bold leading-tight">Main Hero Message to sell yourself!</h1>
            <p class="leading-normal text-2xl mb-8">Sub-hero message, not too long and not too short. Make it just right!</p>
            <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Sign Up</button>
          </div>
        </div>
      </div>
    </React.Fragment >
  )
}

export default Hero;
