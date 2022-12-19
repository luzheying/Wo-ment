import React from "react";
import "./style.css";
import styled from "styled-components";

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
    <div class="WebContainer">
    <div class="BoxofTEXT">
      <div class="TITLE">
          
          <div class="TopAVATARS"></div>
          <span  class="TextTITLE">EMPOWERING WOMEN 
                                    IN THE WORKPLACE
          </span>
          <span  class="TextBOX">Wo-Ment is a professional network for women looking to find mentorship, become a mentor, or find professional services while providing support to guide the others during your career path.</span>
    </div>
    </div>

      <div class="row">
        <div class="column">
              <a href="/" target="_blank">
                <Button>Find a Mentor</Button>
              </a>
        </div>
        <div class="column">
              <a href="/" target="_blank">
                <Button>Find a Mentor</Button>
              </a>
        </div>
      </div>


      <div class="TextOURSTORIES">
      <span  class="TitleOURSTORIES">Our Stories</span>
              <div class="TextITHASBEEN">
                    <div class="BackgroundITHASBEEN"></div>
                    <div class="AvatarITHASBEEN"></div>
                    <span  class="PlacementTEXTITHASBEEN">It has been three months since I became a mentor at wo-ment, I am so glad to bond with my mentees, all amazing human-beings.</span>
              </div>

      <div class="TextAFTER">
            <div class="BackgroundBOTTOMAFTER"></div>
            <div class="AvatarAFTER"></div>
            <span  class="PlacementTEXTAFTER">After being a mentee for a while, I decided to become a mentor! Passing all the help that I have receviced to the others felt great.</span>
      </div>


      <div class="TextBOTTOMIFOUND">
        <div class="BackgroundBOTTOMIFOUND"></div>
              <span  class="PlacementTEXTIFOUND">I found my mentor through WoMent. With her help, I just landed my first internship!</span>
        <div class="AvatarIFOUND"></div>
      </div>
    </div> 
    </div>
    </>
  );
};

export default Home;
