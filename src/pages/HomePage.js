import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LeftSide from '../components/LeftSide';
import RightSide from '../components/RightSide';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import MainSeller from './seller/MainSeller';
import MainBuyer from './buyer/MainBuyer';

const HomePage = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const[isSeller,setIsSeller]=useState(false)

  const [rerenderKey, setRerenderKey] = useState(0);

  useEffect(() => {
    if (!localStorage.getItem('token')) {

      navigate('/login');
    }
    console.log(user)
   if(user?.isSeller){
    setIsSeller(true)
   }else{
    setIsSeller(false)
   }
  }, [user, navigate]);


 

  
 

  

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Layout>
        <LeftSide />
        {isSeller ? (
          <MainSeller key={rerenderKey} props={user} />
        ) : (
          <MainBuyer key={rerenderKey} props={user} />
        )}
        <RightSide />
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 58px;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
`;


const Layout = styled.div`
  display: -ms-grid;
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: 20% 50% 30%;
  -webkit-column-gap: 25px;
  -moz-column-gap: 25px;
          column-gap: 25px;
  row-gap: 25px;
  margin: 25px 0;

  @media (max-width: 768px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    padding: 0 5px;
  }
`;

export default HomePage;
