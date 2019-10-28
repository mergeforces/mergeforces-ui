import React from 'react';

const CreateEvent = () => {
  const style = {
    width: '80%',
    height: '100vh',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    margin: '0 auto',
  };

  return (
    <section style={style}>
      <div className="w-full max-w-xs">
        <form action='/event' className="w-full max-w-lg">

          <div className="flex flex-wrap -mx-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Title
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Kyle's Birthday Party" />
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Description
            </label>
            <textarea rows="5" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Let's surprise Kyle with a birthday party when he's out for a morning cycle in his faourite park" />
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Location
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Picnic area in Ormeau Park" />
          </div>


          <div className="flex flex-wrap -mx-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Date and Time
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="1st of November at 11:00PM" />
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <button type="submit" className="mx-auto bg-white text-gray-800 font-bold border border-green-500 rounded-full my-6 py-4 px-8 shadow-lg">Create Event</button>
          </div>
        </form>

      </div>
    </section>
  );
};

export default CreateEvent;
