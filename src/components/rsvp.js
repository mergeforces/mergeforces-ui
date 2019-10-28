import React from 'react';

const RSVP = () => {
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
        <header>
          <h1>
            🎉
            You're going to Kyle's Birthday Party!
          </h1>
        </header>
      </div>
    </section>
  );
};

export default RSVP;
