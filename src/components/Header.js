import React from 'react';
import logo from '../images/discord.png';
import '../Header.css'; // Import your CSS file for styling

const Header = () => {
  return (
    <header className="header">
     
        <h2 className='logo'>CRYPTOFIELD</h2>
      
  <div id='navigation'>
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#market">Market</a></li>
          <li><a href="#services">Choose us</a></li>
          <li><a href="#join">Join</a></li>
        </ul>
      </div>
      <div className="discord-icon">
        <a href='https://discord.gg/sdfwghw'><img src={logo} alt="Discord Icon" /></a>
      </div>
    </header>
  );
};

export default Header;