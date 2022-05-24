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
background-color:var(--background-color);
`;
const DropDownHeader = styledComponents("div")`
margin: auto 0;
width:50px;
height:50px;
align-items:center;
display:flex;
// grid-column: 2/3;
// grid-row:1/2;

`;
const DropDownListContainer = styledComponents("div")``;
const DropDownList = styledComponents("ul")`
padding:0 1rem;


`;
const ListItem = styledComponents("li")`
  list-style:none;
  width:50px;
  height:50px; 
  img{
    width:50px;
    height:50px;
  }
  `;

const lightGreenLogo = {
  path: lightGreen,
  logoColor: "lightGreen",
};
const lightGreyLogo = {
  path: lightGrey,
  logoColor: "lightGrey",
};
const pinkLogo = {
  path: pink,
  logoColor: "pink",
};
const greenLogo = {
  path: green,
  logoColor: "green",
};
const greyLogo = {
  path: grey,
  logoColor: "grey",
};
const blackLogo = {
  path: black,
  logoColor: "black",
};
const whiteLogo = {
  path: white,
  logoColor: "white",
};
const outlineLogo = {
  path: outline,
  logoColor: "outline",
};
export const logoColors = [
  lightGreenLogo,
  lightGreyLogo,
  pinkLogo,
  greenLogo,
  greyLogo,
  blackLogo,
  whiteLogo,
  outlineLogo,
];
export default function Logo(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState(null);
  const toggling = () => setIsOpen(!isOpen);

  const onLogoClicked = (path, logoColor) => () => {
    props.onLogoChange(logoColor);
    setSelectedLogo(path);
    setIsOpen(false);
  };

  return (
    <div className="Logo">
      <LogoSelect>
        <p className="setLogoColor inputLabel">Logo appearance</p>
        <div class="headerArrow">
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
                    onClick={onLogoClicked(option.path, option.logoColor)}
                    key={Math.random()}
                    value={props.value}
                    name="logo"
                  >
                    <img src={option.path} alt="logo_option" />
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
