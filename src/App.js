import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalStyles } from './GlobalStyles'

const Splash = styled.section`
  display:flex;
  flex-direction:column;
  height:100vh;
  width:100vw;
  padding:2rem;
  align-items:center;
  justify-content:center;
`;

const Logo = styled.img`
  width:175px;
  height:175px;
  border:2px solid #04050A;
  border-radius:50%;
  background-image: url(./images/ocsd_logo.png);
  background-repeat:no-repeat;
  background-size:170px 170px;
`;

const Sus = styled.p`
  font-size:3rem;
  font-family:'Roboto', sans-serif;
  padding:1.5rem 0;
  text-align:center;
  text-transform:uppercase;
`;

const Info = styled.p`
  font-family:'Roboto', sans-serif;
  font-size:1.5rem;
  text-align:center;
  padding:0 0 1.5rem 0;
`;

const Contact = styled.p`
  font-family:'Roboto', sans-serif;
  text-align:center;
  font-size:1rem;
`;



export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Splash id="splash">
        <Logo></Logo>
        <Sus>Return iPad Now</Sus>
        <Info>
          <p>Please Return this device to Mobile Support.</p>
        </Info>
        <Contact>haganw@okaloosaschools.com</Contact>
      </Splash>
    </BrowserRouter>
  );
}
