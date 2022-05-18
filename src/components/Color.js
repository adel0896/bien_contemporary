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

const options = ["lightGreen", "lightGrey", "pink", "green", "grey"];
export default function Color() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => setIsOpen(!isOpen);
  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
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
                  onClick={onOptionClicked(option)}
                  key={Math.random()}
                  className={option}
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
