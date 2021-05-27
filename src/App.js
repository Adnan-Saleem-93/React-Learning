import React, {useState, useEffect} from "react";
import "./index.css";
import {github_url} from "./constants";
import {Row, Col, Image, Container} from "react-bootstrap";

const App = () => {
  return (
    <React.Fragment>
      <Person />
    </React.Fragment>
  );
};

const Person = () => {
  // in this example, we will use the Effect Hook to fetch data from an api
  let [users, setUsers] = useState([]);

  const getUsers = async () => {
    let response = await fetch(github_url);
    let _users = await response.json();
    setUsers(_users);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const renderUsers = () => {
    return users.map((user, index) => {
      return (
        <Col xs={6} md={4} key={index}>
          <Image src={user.avatar_url} roundedCircle height={64} width={64} />
          <p>{user.login}</p>
        </Col>
      );
    });
  };

  return (
    <div className="main">
      <h2>Github Users</h2>
      <Container>
        <Row>{renderUsers()}</Row>
      </Container>
    </div>
  );
};

export default App;
