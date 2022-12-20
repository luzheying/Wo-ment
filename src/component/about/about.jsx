import React from "react";
import "./style.css";
const divStyle = {
  'display': 'flex',
  'text-align' : 'center',
  'font-weight' : 'bold'
};


const About = () => {
  return (
    <>
    <nav class="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/#/about">About Us</a></li>
          <li><a href="/">Find a Mentor</a></li>
          <li><a href="/#/mentor/signup">Become a Mentor</a></li>
          <li><a href="/#/resource">Resource</a></li>
        </ul>
    </nav>

    
    <h1>ABOUT US</h1>

      <div id="faq">
        {/* <div style={divStyle}>
            <h1>ABOUT US</h1>
        </div> */}
        <ul>
          <li>
            <input type="checkbox" checked />
            <i></i>
            <h2>Mission Statement</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
              debitis iusto voluptatum doloribus rem, qui nesciunt labore tempore
              fugit iste deserunt incidunt error provident repudiandae laudantium
              quo ipsa unde perspiciatis, nihil autem distinctio! Deserunt,
              aspernatur.
            </p>
          </li>
          <li>
            <input type="checkbox" checked />
            <i></i>
            <h2>Our Story</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              quasi, quia provident facere recusandae itaque assumenda fuga veniam
              dicta earum dolorem architecto facilis nisi pariatur.
            </p>
          </li>
          <li>
            <input type="checkbox" checked />
            <i></i>
            <h2>Why Us?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quas
              placeat assumenda mollitia magni consequatur dolorum, quod nihil
              distinctio aperiam officia alias! Voluptate dolore ex officiis sit,
              magnam non a, eligendi pariatur aut, earum dolores tenetur ipsam id
              illo deleniti. Laudantium deserunt eaque ipsam voluptatum
              consequuntur voluptatibus sed minima ad accusamus debitis eos
              similique laboriosam, molestiae? Consequatur neque tempore quis.
              Eligendi, in ut aspernatur esse nesciunt libero.
            </p>
          </li>
        </ul>
      </div>

      <p class="quote">
        “A girl should be two things: who and what she wants” -Coco Channel
      </p>
    </>
  );
};

export default About;