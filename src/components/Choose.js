import React from 'react';
import logo from '../images/icon1.png';
import logo1 from '../images/icon2.png';
import logo2 from '../images/icon3.png';
import logo3 from '../images/icon4.png';
import '../Span.css'; // Import your CSS file for styling
import '../style/Choose.css'; // Import your CSS file for styling
const Choose = () => {
  return (

    <section id='services'>
    <h1>WHY <span id='span1'>C</span><span id='span2'>H</span><span id='span3'>O</span><span id='span4'>O</span><span id='span5'>S</span><span id='span6'>E</span> <span id='span7'>U</span><span id='span8'>S</span></h1>
    <div className="service-row">
      <div className="service-item">
        <div className="icon">
          <img src={logo2} alt="Icon"></img>
        </div>
        <h2>NO FEES</h2>
        <p>Our company has no fees. All the profit goes to u</p>
      </div>
      <div className="service-item">
        <div className="icon">
          <img src={logo1} alt="Icon"></img>
        </div>
        <h2>USER FRIENDLY</h2>
        <p>We make it easy to make profit, to maintain and to buy crypto</p>
      </div>
    </div>
    <div className="service-row">
      <div className="service-item">
        <div className="icon">
          <img src={logo3} alt="Icon"></img>
        </div>
        <h2>CONNECT UR WALLET</h2>
        <p>We accept most wallets. Use Trust Wallet or to connect to the app</p>
      </div>
      <div className="service-item">
        <div className="icon">
          <img src={logo} alt="Icon"></img>
        </div>
        <h2>OUR MARKETPLACE</h2>
        <p>We allow our users to buy crypto, sell crypto and to trade them.</p>
      </div>
    </div>
    <div className="big-image"></div>
  </section>
  
  
  

  );
};

export default Choose;