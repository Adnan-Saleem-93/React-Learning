import React, {useState, useEffect, useRef} from "react";
import "./index.css";

const Practice = () => {
  const [value, setValue] = useState("");
  const counter = useRef(0);
  const textInput = useRef(null);

  useEffect(() => {
    // Every time the component has been re-rendered,
    // the counter is incremented
    counter.current = counter.current + 1;
  });
  const handleClick = () => {
    textInput.current.value = "selected";
  };

  console.log("render " + parseInt(counter.current + 1));
  return (
    <div className="container-sm mx-auto mt-5 text-center">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="form-control"
        ref={textInput}
      />
      <h1>{`The component has been re-rendered ${counter.current} times`}</h1>
      <button className="btn btn-primary" onClick={handleClick}>
        Click
      </button>
    </div>
  );
};

export default Practice;
