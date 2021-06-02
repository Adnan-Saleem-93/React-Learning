import React, {useState, useEffect} from "react";
import {github_url} from "./constants";
import Loader from "./Loader";
import "./index.css";
import {Row, Col, Image, Container} from "react-bootstrap";

const Practice = () => {
  // in this example, we will use the short circuit evaluation methods
  let [isLoading, setIsLoading] = useState(true);
  let [users, setUsers] = useState([]);

  const getUsers = () => {
    setTimeout(async () => {
      try {
        let response = await fetch(github_url);
        let _users = await response.json();
        setUsers(_users);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    }, 2000);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const renderUsers = () => {
    return (
      // if users array in not empty, render the user list
      users.map((user, index) => {
        return (
          <Col xs={6} md={4} key={index}>
            <Image src={user.avatar_url} roundedCircle height={64} width={64} />
            <p>{user.login}</p>
          </Col>
        );
      })
    );
  };

  return (
    <div className="main">
      {/* if isLoading is truthy, render a loader component */}
      {isLoading && <Loader />}
      {/* if isLoading is falsy, render the github users */}
      {isLoading || (
        <>
          <h2>{users.length || 0} Github Users</h2>
          {/* if users' length is greater than zero, render users, otherwise don't */}
          {users.length > 0 && (
            <Container>
              <Row>{renderUsers()}</Row>
            </Container>
          )}
        </>
      )}
    </div>
  );
};

export default Practice;
