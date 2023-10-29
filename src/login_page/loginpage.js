import styled from "styled-components";
import { useState } from "react";

const loginPage = props => {
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
  })
  return (
    <div>
        <Wrapper>
    <Title>
      This is me!!
    </Title>

    </Wrapper>
    </div>
  );
}

export default loginPage;