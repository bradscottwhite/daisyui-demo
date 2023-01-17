import avatar from './avatar.png';
import bg from './bg.jpg';

import { useState } from 'react';

const App = () => {
  const [ theme, setTheme ] = useState('cupcake');

  const themes = [ 'light', 'dark', 'cupcake', 'winter' ];

  const changeTheme = theme => {
    document.body.setAttribute('data-theme', theme);
    setTheme(theme);
  };

  return (
    <div className='w-screen h-screen grid place-items-center'>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title'>Set Mode</h2>
          <div className='btn-group'>
            {themes.map(themeName => <button className={`btn ${theme === themeName ? 'btn-active' : ''}`} onClick={() => changeTheme(themeName)}>{themeName}</button>)}
          </div>
        </div>
      </div>

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={bg} alt="background" /></figure>
        <div className="card-body">
          <h2 className="card-title">Howdy!</h2>
          <p>Hey, this is Brad.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Click me</button>
          </div>
        </div>
      </div>

      <div className='card w-92 bg-base-100 shadow-xl'>
        <div className='card-body'>
          <div className="avatar justify-end">
            <div className="w-20 mask mask-squircle">
              <img alt='Brad' src={avatar} />
            </div>
          </div>
          <h2 className='card-title'>Brad</h2>
          <p>...</p>
        </div>
      </div>
    </div>
  );
};

export default App;
