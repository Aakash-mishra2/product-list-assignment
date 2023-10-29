import styled from "styled-components";
import { useState } from "react";
import './login.css';
const LoginPage = props => {
  const Title = styled.h1`
    font-size: 4rem;
    text-align: center;
    color: #BF4F74;
  `;
  const Wrapper = styled.section`
    padding: 3em;
    background: papayawhip;
  `;
  const [contact, setContact] = useState({
    name: '',
    email: '',
    password: ''
  });
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
    <div>
      <Wrapper>
        <Title>
          Hello, {contact.name}
        </Title>
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
    </div>
  );
}

export default LoginPage;