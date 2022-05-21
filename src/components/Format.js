import React, { useState } from "react";
import styledComponents from "styled-components";

const FormatSelect = styledComponents("div")`
background-color:#FDFBF8;
`;
const DropDownContainer = styledComponents("div")``;
const DropDownHeader = styledComponents("div")``;
const DropDownListContainer = styledComponents("div")``;
const DropDownList = styledComponents("ul")``;
const ListItem = styledComponents("li")`
    list-style:none;
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
      <p>Format</p>
      <DropDownHeader onClick={toggling}>
        {selectedFormat || "Select a format"} v
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
