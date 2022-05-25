import React, { useState } from "react";
import styledComponents from "styled-components";
import lightGreen from "./logos_svg/logo-lightGreen.svg";
import lightGrey from "./logos_svg/logo-lightGrey.svg";
import pink from "./logos_svg/logo-pink.svg";
import green from "./logos_svg/logo-green.svg";
import grey from "./logos_svg/logo-grey.svg";
import black from "./logos_svg/logo-black.svg";
import white from "./logos_svg/logo-white.svg";
import outline from "./logos_svg/logo-outline.svg";
import ArrowDown from "./assets/arrow-down.png";

const LogoSelect = styledComponents("div")`
// width:9rem;
// display:grid;
position:relative;
// background-color:var(--background-color);
// .selectColor{
//   grid-column: 1/2;
//   grid-row:1/2;
// }

`;
const Arrow = styledComponents("div")`
// cursor:pointer;
// grid-column: 3/4;
// grid-row: 1/2;
`;
const DropDownContainer = styledComponents("div")`
position:absolute;
// border: solid var(--light-grey) 1px;
// background-color:#EAE5E1;
`;
const DropDownHeader = styledComponents("div")`
margin: auto 0;
width:50px;
height:50px;
align-items:center;
display:flex;


`;
const DropDownListContainer = styledComponents("div")``;
const DropDownList = styledComponents("ul")`
display:flex;
flex-wrap:wrap;
min-height:6vw;
width:24vw;
padding:0.5vw 0;
justify-content:space-evenly;
align-items:center;
border: solid var(--light-grey) 1px;
column-gap:0.5vw;
row-gap:0.2vw;
background-color:var(--white);


`;
const ListItem = styledComponents("li")`
  list-style:none;
  width:50px;
  height:50px; 
  cursor:pointer;
  img{
    width:50px;
    height:50px;
  }
  `;

const lightGreenLogo = {
  path: lightGreen,
  logoColor: "lightGreen",
  appearAs: lightGreen,
};
const lightGreyLogo = {
  path: lightGrey,
  logoColor: "lightGrey",
  appearAs: lightGrey,
};
const pinkLogo = {
  path: pink,
  logoColor: "pink",
  appearAs: pink,
};
const greenLogo = {
  path: green,
  logoColor: "green",
  appearAs: green,
};
const greyLogo = {
  path: grey,
  logoColor: "grey",
  appearAs: grey,
};
const blackLogo = {
  path: black,
  logoColor: "black",
  appearAs: black,
};
const whiteLogo = {
  path: white,
  logoColor: "white",
  appearAs: outline,
};
// const outlineLogo = {
//   path: outline,
//   logoColor: "outline",
//   appearAs:outline,

// };
export const logoColors = [
  lightGreenLogo,
  lightGreyLogo,
  pinkLogo,
  greenLogo,
  greyLogo,
  blackLogo,
  whiteLogo,
  // outlineLogo,
];
export default function Logo(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState(null);
  const toggling = () => setIsOpen(!isOpen);

  const onLogoClicked = (path, logoColor, appearAs) => () => {
    props.onLogoChange(logoColor);
    setSelectedLogo(appearAs);
    setIsOpen(false);
  };

  return (
    <div className="Logo">
      <LogoSelect>
        <p className="setLogoColor inputLabel">Logo appearance</p>
        <div className="headerArrow">
          <DropDownHeader>
            <img src={selectedLogo || black} alt="selected_logo" />
          </DropDownHeader>
          <Arrow onClick={toggling}>
            <img src={ArrowDown} alt="arrow-down" />
          </Arrow>
        </div>
        <DropDownContainer>
          <DropDownListContainer>
            {isOpen && (
              <DropDownList className="colorDropDownList">
                {logoColors.map((option) => (
                  <ListItem
                    onClick={onLogoClicked(
                      option.path,
                      option.logoColor,
                      option.appearAs
                    )}
                    key={Math.random()}
                    value={props.value}
                    name="logo"
                  >
                    <img src={option.appearAs} alt="logo_option" />
                  </ListItem>
                ))}
              </DropDownList>
            )}
          </DropDownListContainer>
        </DropDownContainer>
      </LogoSelect>
    </div>
  );
}
