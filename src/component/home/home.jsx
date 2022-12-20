import React from "react";
import "./style.css";
import styled from "styled-components";
import avatar from './images/women_power_avatar.png'
const theme = {
  brown: {
    default: "#C8AD97",
    hover: "#F5EDE7"
  }
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding:35px 35px;
  border-radius: 15px;
  font-size: 35px;
  outline: 0;
  ${'' /* text-transform: uppercase; */}
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "brown"
};


const ButtonToggle = styled(Button)`
  opacity: 0.7;
  ${({ active }) =>
    active &&
    `
    opacity: 1; 
  `}
`;

const Tab = styled.button`
  padding: 10px 30px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;



const Home = () => {
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
    
    <div class="WebContainer">
    <div class="BoxofTEXT">
      <div class="TITLE">
          
          <span  class="TextTITLE">EMPOWERING WOMEN 
                                    IN THE WORKPLACE
          </span>
          <span  class="TextBOX">Wo-Ment is a professional network for women looking to find mentorship, become a mentor, or find professional services while providing support to guide the others during your career path.</span>
          <div class="TopAVATARS"></div>
    </div>
    </div>
    {/* <div class="WebContainer"> */}
      <div class="row">
        <div class="column">
              <a href="/#/mentor/login" >
                <Button>Find a Mentor</Button>
              </a>
        </div>
        <div class="column">
              <a href="/" >
                <Button>Find a Mentor</Button>
              </a>
        </div>
      </div>
    {/* </div> */}


    <div class="row">
      <span  class="h5">Our Stories</span>
      <div class="column-2">
          {/* <img src={avatar}></img> */}
          {/* <div class="AvatarITHASBEEN"></div> */}
          <div class="PlacementTEXTITHASBEEN">
          It has been three months since I became a mentor at wo-ment, I am so glad to bond with my mentees, all amazing human-beings.
          </div>
      </div>
      <div class="column-2">
          {/* <div class="AvatarITHASBEEN"></div> */}
          <div class="PlacementTEXTITHASBEEN">
          After being a mentee for a while, I decided to become a mentor! Passing all the help that I have receviced to the others felt great.
          </div>
      </div>
      <div class="column-2">
          {/* <div class="AvatarITHASBEEN"></div> */}
          <p class="PlacementTEXTITHASBEEN">
          I found my mentor through WoMent. With her help, I just landed my first internship!
          </p>
      </div>
    </div>


    </div>
    </>
  );
};

export default Home;
