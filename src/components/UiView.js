import React from "react";

const UiView = (props) => (
  <div>
    <div className="nav" style={props.navStyle}>
      <button onClick={props.onDisplayClick} style={props.buttonStyle}>
        {props.selectType}
      </button>
      <button onClick={props.onSizeClick} style={props.buttonStyle}>
        {props.selectSize} Puzzle{" "}
        {props.selectSize === 15 ? "(Sulit)" : "(Mudah)"}
      </button>
    </div>
    <div className="nav" style={props.navStyle}>
      <button onClick={props.onNewClick} style={props.buttonStyle}>
        Mulai Baru
      </button>
      <button onClick={props.onSolveClick} style={props.buttonStyle}>
        Selesaikan
      </button>
    </div>
  </div>
);

export default UiView;
