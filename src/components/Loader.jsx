import React from 'react';
import Logo from '../data/AAJ.svg';
import './loader.css';

function Loader () {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        background: '#FAFBFB',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <img src={Logo} alt='logo' className='loader' />
    </div>
  );
}

export default Loader;
