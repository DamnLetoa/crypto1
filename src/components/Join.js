import React from 'react';
import pic1 from '../images/pic1.png';
import pic2 from '../images/pic2.png';
import '../Span.css'; // Import your CSS file for styling
import '../style/Join.css'; // Import your CSS file for styling
const Join = () => {
  return (

    <section id='join'>
    <h1>JOIN US VIA</h1>
    <h1 id='joinH1'><span id='span1'>D</span><span id='span2'>I</span><span id='span3'>S</span><span id='span4'>C</span><span id='span5'>O</span><span id='span6'>R</span><span id='span7'>D</span></h1>
  <p>Start your journey and invest crypto.</p>
  <a href='https://discord.gg/sdfwghw'><button>Join now!</button></a>


  <div>
<div id='pics'>
    <img src={pic1}></img>
    <img src={pic2}></img>

</div>

  </div>
  </section>
  
  
  

  );
};

export default Join;