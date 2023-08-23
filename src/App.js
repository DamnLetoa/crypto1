import React from 'react';
import './App.css';
import './Span.css';

import pic3 from './images/crypto.png';
import Api from './components/Api';
import Header from './components/Header'; // Import the Header component
import Choose from './components/Choose';
import Join from './components/Join';
function App() {
  return (
    <div className="App">
      <Header /> {/* Use the Header component */}
      <section id='home'>
      <div id="container1">
        <div id='anim1'></div>
        <div id='container2'>
    
      <h1 >BUY AND TRADE</h1>
  <h1 id='firstH1'><span id='span1'>C</span><span id='span2'>R</span><span id='span3'>Y</span><span id='span4'>P</span><span id='spanT'>T</span><span id='span5'>O</span> <span id='span6'>C</span><span id='span7'>U</span><span id='span8'>R</span><span id='span9'>R</span><span id='span10'>E</span><span id='span11'>N</span><span id='span12'>C</span><span id='span13'>I</span><span id='span14'>E</span><span id='span15'>S</span></h1>
    </div> <div id='anim2'></div>  </div>  
    <Api />
    </section>
<Choose />
<Join />
     {/* Use the CryptoTable component */}</div>
  );
}

export default App;
