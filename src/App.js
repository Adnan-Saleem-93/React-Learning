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
  return <div className="people"></div>;
};

export default App;
