import React, {useState, useEffect} from "react";
import "./index.css";

const Practice = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Hello user");
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">User Name : &ensp;</label>
          <input
            type="text"
            id="userName"
            name="userName"
            className="form-control"
            autoComplete="false"
            autoFocus={true}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Practice;
