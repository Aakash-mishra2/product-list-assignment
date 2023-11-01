import styled from "styled-components";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/accountSlice";

const Title = styled.h1`
font-size: 40px;
font-weight: 200;
text-align: center;
color: #04364A;
`;
const Wrapper = styled.section`
margin: 4% auto;
text-align: center;
background-color: #D0BFFF;
font-family: 'Architechts Daughter', cursive;
width: fit-content;
margin-bottom: 1rem;
`;
const Heading = styled.p`
margin: 10px 10px;
font-style: italic;
font-size: 1.2rem;
`;
const Input = styled.input`
border: 1px solid #213555;
background-color: rgba(252, 252, 252, 0.2);
width: 250px;
border-radius: 3px;
font-family: "Source Sans Pro", sans-serif;
padding: 10px 15px;
margin: 0 auto 10px auto;
display: block;
text-align: center;
font-size: 18px;
color: #213555;
font-weight: 300;
box-shadow: 4px 3px 7px 2px #00000040;
`;
const Button = styled.button`
  letter-spacing: 2px;
    box-shadow: 4px 3px 7px 2px #00000040;
    border-radius: 25px;
    margin: 1rem 0.7rem;
    font-size: 19px;
    background-color: #04364A;
    color: white;
    height: 50px;
    width: 100px;
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LoginPage = props => {
  const dispatch = useDispatch();
  
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
   
  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((previnfo) => {
      return {
        ...previnfo,
        [name]: value
      };
    });
  }


  return (
    <Section >
      <Wrapper>
        <Title>
          Welcome, {contact.name}
        </Title>
        <Heading>
          Please login below
        </Heading>
      </Wrapper>
      <Input
        name="name"
        type="text"
        placeholder="Enter Name"
        onChange={(event) => setContact((prev) => {
            return {
            ...prev, 
            [event.target.name]: event.target.value
            };
            })
        }
        value={contact.name}
        autoComplete="off"
      />
      <Input
        name="email"
        type="text"
        placeholder="Enter Email"
        onChange={handleChange}
        value={contact.email}
        autoComplete="off"
      />
      <Input
        name="password"
        placeholder="Password"
        type="password"
        onChange={handleChange}
        value={contact.password}
        autoComplete="off"
      />
      <Button
        onClick={userLoginHandler}
      > Login 
      </Button>
    </Section>
  );
}

export default LoginPage;