import React from "react";
import PropTypes from "prop-types";
import "./MemeInputs.css";

const MemeInputs = (props) => {
  return (
    <>
      <form>
        <div className="formMeme">
          <div className="input">
            <input
              autoComplete="off"
              type="text"
              placeholder="Insert Top Text"
              value={props.topText}
              name="topText"
              onChange={props.hendlerInputChange}
              />
          </div>
          <div className="input">
            <input
              autoComplete="off"
              type="text"
              placeholder="Insert Bottom Text"
              value={props.bottomText}
              name="bottomText"
              onChange={props.hendlerInputChange}
              />
          </div>
          <button className="myButton" onClick={props.hendlerGeneratorImages}>Gen</button>
        </div>
      </form>
    </>
  );
};

export default MemeInputs;
