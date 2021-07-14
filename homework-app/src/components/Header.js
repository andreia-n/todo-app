import React from 'react';
import image from '../assests/img.png';
import './Header.css';
const Header = () => {
  return (
    <div className='header'>
      <h1>To Do, To Doo, To Dooo</h1>
      <img src={image} alt='pink panther' className='image' />
    </div>
  );
};
export default Header;
