import React, { useState } from "react";
import styledComponents from "styled-components";
import logo from "./assets/logo.png";
import arrowDown from "./assets/arrow-down.png";
import arrowUp from "./assets/arrow-up.png";

const FormatSelect = styledComponents("div")`
    width:20%;
    text-align:center;
    margin:auto;
    border: solid var(--grey) 1px;
    cursor:pointer;
    text-transform:uppercase;
`;
const DropDownContainer = styledComponents("div")``;
const DropDownHeader = styledComponents("div")`
padding:0.3rem 0;
font-size:1.2rem;

align-items:center;
display:flex;
`;
const DropDownListContainer = styledComponents("div")``;
const DropDownList = styledComponents("ul")`
padding:0;

`;
const ListItem = styledComponents("li")`
    list-style:none;
    margin:0.2rem 0;
  `;

const Arrow = styledComponents("div")`

`;

const formats = ["story", "post", "banner"];
export default function Format(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onFormatClicked = (format) => () => {
    props.onFormatChange(format);
    setSelectedFormat(format);
    setIsOpen(false);
  };

  return (
    <div className="headerFormat">
      <img className="logo" src={logo} alt="logo"></img>
      <label> Select the format:</label>

      <section className="formatInputContainer">
        <FormatSelect onClick={toggling}>
          <div className="formatInputArrow">
            <DropDownHeader>{selectedFormat || "Post"}</DropDownHeader>
            <Arrow className="arrow">
              {isOpen && <img src={arrowUp} alt="arrow" />}
              {!isOpen && <img src={arrowDown} alt="arrow" />}{" "}
            </Arrow>
          </div>
          <DropDownContainer>
            <DropDownListContainer>
              {isOpen && (
                <DropDownList className="formatOptions">
                  {formats.map((format) => (
                    <ListItem
                      onClick={onFormatClicked(format)}
                      key={Math.random()}
                      className={format}
                    >
                      {format}
                    </ListItem>
                  ))}
                </DropDownList>
              )}
            </DropDownListContainer>
          </DropDownContainer>
        </FormatSelect>
      </section>
    </div>
  );
}
