import React, { useState } from "react";
import styledComponents from "styled-components";

const ColorSelect = styledComponents("div")`
width:7rem;
display:grid;
z-index:99;
position:absolute;
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
width:30px;
height:30px;
grid-column: 2/3;
grid-row:1/2;

`;
const DropDownListContainer = styledComponents("div")``;
const DropDownList = styledComponents("ul")`
padding:0;
`;
const ListItem = styledComponents("li")`
  list-style:none;
  width:30px;
  height:30px;  `;

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
const options = [lightGreen, lightGrey, pink, green, grey];

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
    <ColorSelect>
      <p className="selectColor">Color</p>
      <DropDownHeader
        className={selectedOption || "lightGreen"}
      ></DropDownHeader>

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
      <Arrow onClick={toggling}>v</Arrow>
    </ColorSelect>
  );
}
