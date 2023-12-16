import "./index.css";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import {
  startNewPuzzle,
  requestSolution,
  getSolution,
  changeGridSize,
  changeDisplayType,
} from "./actionCreators";
import appReducer from "./reducers";
import Root from "./components/Root";
import React from "react";
import ReactDOM from "react-dom";

import { render } from "react-dom";

const loggerMiddleware = createLogger();

let defaultSize = 3;
if (window.location.pathname === "/sulit") {
  defaultSize = 4;
} else if (window.location.pathname === "/mudah") {
  defaultSize = 3;
}

const initialState = {
  viewArea: { w: window.innerWidth, h: window.innerHeight },
  gridSize: defaultSize,
  tiles: null,
  puzzleArea: { w: 768, h: 768 },
  displayType: "Angka",
  solution: null,
  isSolving: false,
  showNext: false,
  isShowingSolution: false,
  imgSrc: null,
  images: [],
  defaultImg: null,
  dragIndex: null,
  dragStart: null,
  dragOffset: null,
  dragArea: null,
  dropIndex: null,
};

const store = createStore(
  appReducer,
  initialState,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

store.dispatch(startNewPuzzle(defaultSize));

render(<Root store={store} />, document.getElementById("root"));
