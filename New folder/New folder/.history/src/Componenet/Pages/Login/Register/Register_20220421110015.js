import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";

import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const emailRef = useRef(null);
  const PassRef = useRef(null);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const pass = PassRef.current.value;
    console.log(email, pass);
  };
  const navigateLogin = () => {
    navigateLogin("/Login");
  };
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.terget.name.value;
    const email = event.terget.email.value;
    const pass = event.terget.pass.value;
    const createUserWithEmailAndPassword(email);
  };
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-center mt-2">Please Ragister</h2>

      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3">
          <Form.Label>Enter your name</Form.Label>
          <Form.Control type="name" placeholder="Enter your name" required />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>
        New to Best photo provider
        <Link
          to={"/Login"}
          className="text-danger btn "
          onClick={navigateLogin}
        >
          Allredy have an account?
        </Link>
      </p>
    </div>
  );
};

export default Register;
