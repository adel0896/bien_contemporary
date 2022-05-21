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

const ColorSelect = styledComponents("div")`
width:9rem;
display:grid;
grid-template-columns: 1.4fr 1fr 0.6fr;
background-color:#FDFBF8;
.selectColor{
  grid-column: 1/2;
  grid-row:1/2;
}

`;
const Arrow = styledComponents("p")`
cursor:pointer;
grid-column: 3/4;
grid-row: 1/2;
`;
const DropDownContainer = styledComponents("div")`
grid-column: 2/3;
grid-row:1/2;`;
const DropDownHeader = styledComponents("div")`
margin: auto 0;
width:50px;
height:50px;
grid-column: 2/3;
grid-row:1/2;

`;
const DropDownListContainer = styledComponents("div")``;
const DropDownList = styledComponents("ul")`
background-color:#FDFBF8;
padding:0;
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
    <ColorSelect>
      <p className="setLogoColor">Logo appearance</p>
      <DropDownHeader>
        <img src={selectedLogo || black} alt="selected_logo" />
      </DropDownHeader>
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
      <Arrow onClick={toggling}>v</Arrow>
    </ColorSelect>
  );
}
