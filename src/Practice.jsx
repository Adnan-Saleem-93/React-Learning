import React, {useEffect, useRef, forwardRef} from "react";
import "./index.css";

const Practice = () => {
  const counter = useRef(0);
  const textInput = useRef(null);

  useEffect(() => {
    // Every time the component has been re-rendered,
    // the counter is incremented
    counter.current = counter.current + 1;
  });
  const handleClick = () => {
    textInput.current.value = "selected";
    textInput.current.focus();
  };

  console.log("render " + parseInt(counter.current + 1));
  return (
    <div className="container-sm mx-auto mt-5 text-center">
      <InputComponent ref={textInput} />
      <button className="btn btn-primary" onClick={handleClick}>
        Click
      </button>
    </div>
  );
};

export const InputComponent = forwardRef((props, ref) => {
  return (
    <>
      <input value="" className="form-control" ref={ref} />
    </>
  );
});

export default Practice;
