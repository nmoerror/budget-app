import React, { useState } from 'react';
import styled from 'styled-components';
import Submit_Logo from '../assets/success.svg';

const ThisSection = styled.div`
  form {
    display: flex;
    align-content: center;
    justify-content: center;
  }
  button {
    height: 1.5rem;
    border: none;
    cursor: pointer;
  }
  img {
    margin: 0 1rem;
    height: 100%;
  }
  span {
    font-size: 0.9rem;
    margin: 0.1rem 0.5rem;
  }
`;

const Add = props => {
  return (
    <ThisSection>
      <form onSubmit={e => props.handleSubmit(e)}>
        <span>Type:</span>
        <select
          value={props.type}
          className='type'
          onChange={e => props.setType(e.target.value)}
        >
          <option value='inc'>inc</option>
          <option value='exp'>exp</option>
        </select>

        <span>Description: </span>
        <input
          value={props.description}
          type='text'
          className='description'
          onChange={e => props.setDescription(e.target.value)}
        />
        <span>Amount: </span>
        <input
          value={props.amount}
          type='number'
          className='amount'
          onChange={e => props.setAmount(e.target.value)}
        />

        <button type='submit'>
          <img src={Submit_Logo} alt='' />
        </button>
      </form>
    </ThisSection>
  );
};

export default Add;
