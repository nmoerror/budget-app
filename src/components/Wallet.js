import React from 'react';
import styled from 'styled-components';

const ThisSection = styled.div`
  position: relative;
  height: 24rem;
  margin: 0 0 2rem 0;
  background: -webkit-linear-gradient(to right, #0083b0, #00b4db);
  background: linear-gradient(to right, #0083b0, #00b4db);
  color: #333;
`;

const Main = styled.div`
  background: white;
  position: absolute;
  height: 3.5rem;
  width: 16rem;
  top: 92%;
  left: 50%;
  text-align: center;
  border-radius: 0.8rem;
  transform: translateX(-50%);
`;

const Money = styled.p`
  display: inline-block;
  margin: 1rem 0.5rem;
  font-size: 1.3rem;
  font-weight: 300;
`;

const Wallet = ({ total }) => {
  return (
    <ThisSection>
      <Main>
        <Money>Wallet:</Money>
        <Money>${total}</Money>
      </Main>
    </ThisSection>
  );
};

export default Wallet;
