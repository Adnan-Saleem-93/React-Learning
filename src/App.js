import React, {useState, useEffect} from "react";
import "./index.css";
import {data} from "./constants";
import {Button, FormControl, Row, Col} from "react-bootstrap";

const App = () => {
  return (
    <React.Fragment>
      <Person />
    </React.Fragment>
  );
};

const Person = () => {
  // in this example, we will resize the browser's window
  let [width, setWidth] = useState(window.innerWidth);
  let [height, setHeight] = useState(window.innerHeight);

  const changeSize = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    // in this side-effect function, we add an event listener on window's resize method
    // but the problem with this approach is that, the browser will generate a resize event
    // with each resize, which results in memory leak as each event will occupy its own space in
    // memory. We need to handle this issue using the cleanup function where, before each re-render
    // the window's resize event listener is removed. Thus, avoiding memory leakage.
    window.addEventListener("resize", changeSize);
    // cleanup function
    return () => {
      // when the component re-renders, the previous resize event listener will be removed from memory
      // to make room for the next resize event listener.
      window.removeEventListener("resize", changeSize);
    };
  });

  return (
    <div className="main">
      <p>Window Size:</p>
      <p>
        {width} x {height}
      </p>
    </div>
  );
};

export default App;
