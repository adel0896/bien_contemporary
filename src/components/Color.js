import React, { useState } from "react";
import styledComponents from "styled-components";
import arrowDown from "./assets/arrow-down.png";
import arrowUp from "./assets/arrow-up.png";

const ColorSelect = styledComponents("div")`
width:7rem;
z-index:99;
position:relative;
background-color:#FDFBF8;


`;
const Arrow = styledComponents("div")`

`;
const DropDownContainer = styledComponents("div")`
position:absolute`;
const DropDownHeader = styledComponents("div")`
margin: auto 0;
width:30px;
height:30px;
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
column-gap:0.2vw;
row-gap:0.2vw;
background-color:var(--white);

`;
const ListItem = styledComponents("li")`
  list-style:none;
  width:30px;
  height:30px;
  cursor:pointer;
  `;

const lightGreen = {
  name: "lightGreen",
  hex: "#e9efed",
};
const lightGrey = {
  name: "lightGrey",
  hex: "#c3c1c4",
};
const pink = {
  name: "pink",
  hex: "#cc9e87",
};
const green = {
  name: "green",
  hex: "#839388",
};
const grey = {
  name: "grey",
  hex: "#6c6c6e",
};
const black = {
  name: "black",
  hex: "#000000",
};
const white = {
  name: "white",
  hex: "#FFFFFF",
};
const darkRed = {
  name: "darkred",
  hex: "#490f19",
};

const options = [
  lightGreen,
  lightGrey,
  pink,
  green,
  grey,
  black,
  white,
  darkRed,
];

export default function Color(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (hex, name) => () => {
    props.onColorChange(hex);
    setSelectedOption(name);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <div className="Color">
      <ColorSelect>
        <p className="selectColor inputLabel">Color</p>
        <div className="headerArrow">
          <DropDownHeader
            className={selectedOption || "lightGreen"}
          ></DropDownHeader>
          <Arrow onClick={toggling} className="arrow">
            {/* <img src={arrowDown} alt="arrow" /> */}
            {isOpen && <img src={arrowUp} alt="arrow" />}
            {!isOpen && <img src={arrowDown} alt="arrow" />}
          </Arrow>
        </div>
        <DropDownContainer>
          <DropDownListContainer>
            {isOpen && (
              <DropDownList className="colorDropDownList">
                {options.map((option) => (
                  <ListItem
                    onClick={onOptionClicked(option.hex, option.name)}
                    key={Math.random()}
                    className={option.name}
                    data-color={option.name}
                    value={props.value}
                    name="color"
                  ></ListItem>
                ))}
              </DropDownList>
            )}
          </DropDownListContainer>
        </DropDownContainer>
      </ColorSelect>
    </div>
  );
}
