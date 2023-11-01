import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { logout } from '../store/accountSlice';
import { useDispatch } from 'react-redux';
const Dashboard = () => {
    const userName = useSelector((state) => state.userAccount.userName);
    const email = useSelector((state) => state.userAccount.email);
    const dispatch = useDispatch(); 

  const Title = styled.h1`
  font-size: 40px;
  font-weight: 200;
  text-align: center;
  color: #04364A;
  margin-bottom: 5px;
`;
const Heading = styled.p`
    margin: 10px 10px;
    font-style: italic;
    font-size: 1.6rem;
  `;
const Wrapper = styled.section`
  margin: 4% auto;
  text-align: center;
  background-color: #D0BFFF;
  font-family: 'Architechts Daughter', cursive;
  width: fit-content;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LogoutButton = styled.button`
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

    return(
        <Wrapper>
            <Title> Welcome back, <em>{userName}</em></Title>
            <Heading>{email}</Heading>
            <Heading>Click below to logout</Heading>
            <LogoutButton onClick={() => dispatch(logout())}> Logout </LogoutButton>
        </Wrapper>
    );
};

export default Dashboard;