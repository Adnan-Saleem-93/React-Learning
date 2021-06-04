import React, {useState, useEffect} from "react";
import "./index.css";

const Practice = () => {
  const [userName, setUserName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello ${userName}`);
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
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
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
