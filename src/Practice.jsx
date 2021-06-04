import React, {useState, useEffect} from "react";
import "./index.css";

const Practice = () => {
  const [userName, setUserName] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName) {
      setUsers((prevUsers) => {
        let newUsers = [...prevUsers];
        newUsers.push({id: newUsers.length + 1, userName: userName});
        return [...newUsers];
      });
      setUserName("");
    } else {
      alert("Please enter a value");
    }
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
          <button type="submit" className="btn btn-primary ml-2 mb-1">
            Submit
          </button>
        </div>
      </form>
      {users.length > 0 && (
        <div>
          {users.map((user, index) => {
            return (
              <h5 key={index}>
                {index + 1}. {user.userName}
              </h5>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Practice;
