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
  let [clickCount, setClickCount] = useState(0);
  useEffect(() => {
    console.log("This is the side effect.");
    console.log("latest count:", clickCount);

    // cleanup function
    return () => {
      console.log(
        "This is the cleanup function."
      );
      // even though, cleanup function executes after re-renders and before the side-effect, it still contains previous state
      console.log("old count:", clickCount);
    };
  });

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className="people">
      <p>Button clicked {clickCount} times</p>
      <Button variant="secondary" onClick={handleClick}>
        Click me
      </Button>
    </div>
  );
};

export default App;
