import React from "react";

export default function Artist(props) {
  return (
    <div className="Artist customizerInput">
      <label className="inputLabel">
        Artist
        <input
          placeholder={props.defaultArtist}
          onChange={props.onInputChange}
          name="artist"
          value={props.value}
        ></input>
      </label>
    </div>
  );
}
