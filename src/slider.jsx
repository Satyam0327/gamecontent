
import React, { useRef } from 'react';
import './slider.css'; 
import myimage from './images/img.jpeg';
import myimage2 from './images/img2.jpeg';
import myimage3 from './images/img3.jpeg';
import myimage4 from './images/img4.jpeg';
function Slider() {
   const nextRef = useRef(null);
  const prevRef = useRef(null);

  const handleNextClick = () => {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
  };

  const handlePrevClick = () => {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
  };
  return (
    <div className="container">
      <div className="slide">
        <div className="item" style={{ backgroundImage: `url(${myimage})`}}>
          <div className="content">
            <div className="name">JAVASCRIPT</div>
            <div className="des">In JavaScript, a function is a block of code that performs a specific task. You can define a function using the function keyword, followed by the name of the function and parentheses. Optionally, you can include a list of input parameters within the parentheses. The code block that needs to be executed when the function is called is written within curly braces.</div>
            <button>Learn this </button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${myimage2})` }}>
          <div className="content">
            <div className="name">FUNCTIONS</div>
            <div className="des">In JavaScript, a function is a block of code that performs a specific task. You can define a function using the function keyword, followed by the name of the function and parentheses. Optionally, you can include a list of input parameters within the parentheses. The code block that needs to be executed when the function is called is written within curly braces.</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${myimage3})` }}>
          <div className="content">
            <div className="name">FUNCTIONS</div>
            <div className="des">In JavaScript, a function is a block of code that performs a specific task. You can define a function using the function keyword, followed by the name of the function and parentheses. Optionally, you can include a list of input parameters within the parentheses. The code block that needs to be executed when the function is called is written within curly braces.</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${myimage4})` }}>
          <div className="content">
            <div className="name">FUNCTIONS</div>
            <div className="des">In JavaScript, a function is a block of code that performs a specific task. You can define a function using the function keyword, followed by the name of the function and parentheses. Optionally, you can include a list of input parameters within the parentheses. The code block that needs to be executed when the function is called is written within curly braces.</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${myimage2})` }}>
          <div className="content">
            <div className="name">FUNCTIONS</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${myimage2})` }}>
          <div className="content">
            <div className="name">FUNCTIONS</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
      </div>
      <div className="button">
        <button className="prev" ref={prevRef} onClick={handlePrevClick}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="next" ref={nextRef} onClick={handleNextClick}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Slider;
