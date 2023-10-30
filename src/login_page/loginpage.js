import styled from "styled-components";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/accountSlice";

import './login.css';
const LoginPage = props => {
  const dispatch = useDispatch();
  
  const Title = styled.h1`
    font-size: 40px;
    font-weight: 200;
    text-align: center;
    color: #174590;
  `;

  const Wrapper = styled.section`
    margin: 4% auto;
    text-align: center;
    background-color: #f9f5eb;
    font-family: 'Architechts Daughter', cursive;
    width: fit-content;
    margin-bottom: 1rem;
  `;

  const Heading = styled.p`
    margin: 10px 10px;
    font-style: italic;
    font-size: 1rem;
  `;

  const [contact, setContact] = useState({
    name: '',
    email: '',
    password: ''
  });

  function userLoginHandler() {
    dispatch(login({
      name: contact.name,
      email: contact.email,
      password: contact.password
  }));
    console.log("Clicked");
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setContact((previnfo) => {
      return {
        ...previnfo,
        [name]: value
      };
    });
  }


  return (
    <React.Fragment>
      <Wrapper>
        <Title>
          Welcome, {contact.name}
        </Title>
        <Heading>
          Please login below
        </Heading>
      </Wrapper>
      <input
        name="name"
        type="text"
        placeholder="Enter Name"
        onChange={handleChange}
        value={contact.name}
        autoComplete="off"
      />
      <input
        name="email"
        type="text"
        placeholder="Enter Email"
        onChange={handleChange}
        value={contact.email}
        autoComplete="off"
      />
      <input
        name="password"
        placeholder="Password"
        type="password"
        onChange={handleChange}
        value={contact.password}
        autoComplete="off"
      />
      <button
        onClick={userLoginHandler}
      > Login </button>
    </React.Fragment>
  );
}

export default LoginPage;