import React, {useState} from "react";
import "./index.css";

const Practice = () => {
  const [user, setUser] = useState({name: "", email: "", age: 0});
  const [userList, setUserList] = useState([]);

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUser({...user, [name]: value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.name && user.email && user.age) {
      setUserList((prevUsers) => {
        let newUsers = [...prevUsers];
        newUsers.push({id: newUsers.length + 1, name: user.name, email: user.email, age: user.age});
        return [...newUsers];
      });
      setUser({name: "", email: "", age: ""});
    } else {
      alert("All fields are required.!");
    }
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <label htmlFor="name" className="col-md-3">
            User Name : &ensp;
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control col-md-7"
            autoComplete="true"
            autoFocus={true}
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="row">
          <label htmlFor="email" className="col-md-3">
            Email : &ensp;
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control col-md-7"
            autoComplete="true"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="row">
          <label htmlFor="age" className="col-md-3">
            Age : &ensp;
          </label>
          <input
            type="number"
            min="0"
            id="age"
            name="age"
            className="form-control col-md-7"
            autoComplete="false"
            value={user.age}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {userList.length > 0 && (
        <>
          {userList.map((item, index) => {
            return (
              <div key={index} className="user">
                <b>{item.name}</b>
                <span>{item.age}</span>
                <span>{item.email}</span>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Practice;
