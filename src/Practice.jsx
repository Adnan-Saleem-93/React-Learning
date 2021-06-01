import React, {useState, useEffect} from "react";
import {github_url} from "./constants";
import Loader from "./Loader";
import "./index.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationCircle} from "@fortawesome/free-solid-svg-icons";
import {Row, Col, Image, Container} from "react-bootstrap";

const Practice = () => {
  // in this example, we will use the short circuit evaluation methods
  let [loading, setLoading] = useState(true);
  let [users, setUsers] = useState([]);

  const getUsers = () => {
    setTimeout(async () => {
      try {
        let response = await fetch(github_url);
        let _users = await response.json();
        setUsers(_users);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    }, 2000);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const renderUsers = () => {
    return users ? (
      // if users array in not empty, render the user list
      users.map((user, index) => {
        return (
          <Col xs={6} md={4} key={index}>
            <Image src={user.avatar_url} roundedCircle height={64} width={64} />
            <p>{user.login}</p>
          </Col>
        );
      })
    ) : (
      // if users array is empty, show this message
      <h3 className="main" style={{color: "red"}}>
        <i>
          <FontAwesomeIcon icon={faExclamationCircle} />
          &ensp;
        </i>
        No Users Found
      </h3>
    );
  };

  return (
    <div className="main">
      {/* {if loading is 'true' show a spinner} */}
      {loading ? (
        <Loader />
      ) : (
        // else show the github users
        <>
          <h2>Github Users</h2>
          <Container>
            <Row>{renderUsers()}</Row>
          </Container>
        </>
      )}
    </div>
  );
};

export default Practice;
