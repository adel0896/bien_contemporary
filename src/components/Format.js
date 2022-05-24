import React, { useState } from "react";
import styledComponents from "styled-components";

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

`;
const DropDownListContainer = styledComponents("div")``;
const DropDownList = styledComponents("ul")`
padding:0;

`;
const ListItem = styledComponents("li")`
    list-style:none;
    margin:0.2rem 0;
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
    <FormatSelect>
      <DropDownHeader onClick={toggling}>
        {selectedFormat || "Select format"} v
      </DropDownHeader>
      <DropDownContainer>
        <DropDownListContainer>
          {isOpen && (
            <DropDownList>
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
  );
}
