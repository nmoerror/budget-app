import React from 'react';
import styled from 'styled-components';
import Sort_Logo from '../assets/sort.svg';

const ThisSection = styled.div`
  display: flex;
  position: relative;
  padding: 0rem;
  width: 100%;
  min-height: 24rem;
`;

const RecordList = styled.div`
  margin: 1rem;
  width: 44%;
  border-radius: 0.3rem;
  padding: 2rem;

  ul {
    list-style: none;
    padding-left: 0;
  }
`;

const Header = styled.div`
  h3 {
    font-weight: 300;
    display: inline;
  }
  img {
    height: 0.7rem;
    display: inline-block;
    float: right;
  }
`;

const Records = props => {
  return (
    <ThisSection>
      <RecordList style={{ background: 'rgba(93, 219, 55, 0.2)' }}>
        <Header>
          <h3>Income</h3>
          <img src={Sort_Logo} />
        </Header>
        <ul>
          {props.incomes.map(income => (
            <li>
              {income.description}
              <span style={{ float: 'right' }}>${income.amount}</span>
            </li>
          ))}
        </ul>
      </RecordList>

      <RecordList style={{ background: 'rgba(225, 35, 35, 0.2)' }}>
        <Header>
          <h3>Expenses</h3>
          <img src={Sort_Logo} />
        </Header>
        <ul>
          {props.expenses.map(expense => (
            <li>
              {expense.description}
              <span style={{ float: 'right' }}>
                ${expense.amount}
                {/*Math.round((expense.amount / props.total) * 100) + '%'*/}
              </span>
            </li>
          ))}
        </ul>
      </RecordList>
    </ThisSection>
  );
};

export default Records;
