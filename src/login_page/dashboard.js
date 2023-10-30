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
  color: #174590;
`;
const Heading = styled.p`
    margin: 10px 10px;
    font-style: italic;
    font-size: 1.6rem;
  `;
const Wrapper = styled.section`
  margin: 4% auto;
  text-align: center;
  background-color: #f9f5eb;
  font-family: 'Architechts Daughter', cursive;
  width: fit-content;
  margin-bottom: 1rem;
`;
const LogoutButton = styled.button`
    border-radius: 13px;
    height: 50px;
    width: 200px;
    background-color: #174590;
`
    return(
        <div>
        <Wrapper>
            <Title> Welcome back, <em>{userName}</em></Title>
            <Heading>{email}</Heading>
            <Heading>Click below to logout</Heading>
            <LogoutButton onClick={() => dispatch(logout())}> Logout </LogoutButton>
        </Wrapper>
        </div>
    );
};

export default Dashboard;